'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

interface LoginResponse {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  admin?: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
  error?: string;
}

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Username and password are required' };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponse = await response.json();

    if (data.success && data.accessToken && data.refreshToken && data.admin) {
      const cookieStore = await cookies();

      // Store access token (short-lived, httpOnly)
      cookieStore.set('admin_access_token', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 15, // 15 minutes
        path: '/',
      });

      // Store refresh token (long-lived, httpOnly)
      cookieStore.set('admin_refresh_token', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      // Store admin info (non-sensitive, for UI)
      cookieStore.set('admin_info', JSON.stringify({
        id: data.admin.id,
        username: data.admin.username,
        role: data.admin.role,
      }), {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });

      shouldRedirect = true;
    } else {
      return { error: data.error || 'Login failed' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Unable to connect to server' };
  }

  // Redirect outside try-catch to avoid catching redirect "error"
  if (shouldRedirect) {
    redirect('/admin');
  }

  return { error: 'Login failed' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_access_token');
  cookieStore.delete('admin_refresh_token');
  cookieStore.delete('admin_info');
  redirect('/admin/login');
}

export async function refreshAccessToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('admin_refresh_token');

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/api/admin/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshToken.value }),
    });

    const data: LoginResponse = await response.json();

    if (data.success && data.accessToken && data.refreshToken) {
      // Update tokens
      cookieStore.set('admin_access_token', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 15,
        path: '/',
      });

      cookieStore.set('admin_refresh_token', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });

      return data.accessToken;
    }
  } catch (error) {
    console.error('Refresh token error:', error);
  }

  return null;
}

export async function getAdminInfo() {
  const cookieStore = await cookies();
  const adminInfo = cookieStore.get('admin_info');

  if (adminInfo) {
    try {
      return JSON.parse(adminInfo.value);
    } catch {
      return null;
    }
  }
  return null;
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_access_token');
  return token?.value || null;
}

export async function getValidAccessToken() {
  let accessToken = await getAccessToken();

  // If no access token, try to refresh
  if (!accessToken) {
    accessToken = await refreshAccessToken();
  }

  return accessToken;
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('admin_access_token');
  const refreshToken = cookieStore.get('admin_refresh_token');

  // Authenticated if we have either token (refresh can get new access token)
  return !!(accessToken || refreshToken);
}
