import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const accessToken = request.cookies.get('admin_access_token');
    const refreshToken = request.cookies.get('admin_refresh_token');

    // If no tokens at all, redirect to login
    if (!accessToken && !refreshToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect logged-in users away from login page
  if (pathname === '/admin/login') {
    const accessToken = request.cookies.get('admin_access_token');
    const refreshToken = request.cookies.get('admin_refresh_token');

    if (accessToken || refreshToken) {
      const adminUrl = new URL('/admin', request.url);
      return NextResponse.redirect(adminUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
