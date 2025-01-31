import { NextResponse } from 'next/server';

// Define your credentials (DO NOT hardcode in production, use env variables)
const USERNAME = process.env.BASIC_AUTH_USER || 'admin';
const PASSWORD = process.env.BASIC_AUTH_PASS || 'password';

export function middleware(req: Request) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }

  // Decode Base64 username:password
  const credentials = atob(authHeader.split(' ')[1]);
  const [user, pass] = credentials.split(':');

  if (user !== USERNAME || pass !== PASSWORD) {
    return new Response('Unauthorized', { status: 403 });
  }

  return NextResponse.next();
}

// Apply middleware only to protected routes (optional)
export const config = {
  matcher: '/admin/:path*', // Protect all routes under /admin
};
