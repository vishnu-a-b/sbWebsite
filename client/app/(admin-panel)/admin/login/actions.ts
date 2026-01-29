'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

interface LoginResponse {
  success: boolean;
  token?: string;
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

  try {
    const response = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponse = await response.json();

    if (data.success && data.token && data.admin) {
      const cookieStore = await cookies();

      // Store JWT token
      cookieStore.set('admin_token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      // Store admin info (non-sensitive)
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

      redirect('/admin');
    } else {
      return { error: data.error || 'Login failed' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Unable to connect to server' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  cookieStore.delete('admin_info');
  redirect('/admin/login');
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

export async function getAuthToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  return token?.value || null;
}

export async function isAuthenticated() {
  const token = await getAuthToken();
  return !!token;
}
