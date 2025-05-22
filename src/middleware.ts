import { NextRequest, NextResponse } from 'next/server';
import type { MiddlewareConfig } from 'next/server';

const pageRequireSetting = {
  login: ["/dashboard", "/api/v2"],  // 未ログインではアクセス不可
  logout: ["/account", "/api/v1"]    // ログイン済ではアクセス不可
};

export default async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const baseurl = `${url.protocol}//${url.host}`;

  // セッション確認を const で構成
  const isLoggedIn = await fetch(`${baseurl}/api/v1/session`)
    .then(res => res.json())
    .then(data => !!data.success)
    .catch(() => false); // エラー時は未ログイン扱い

  const shouldRedirectToDashboard = isLoggedIn && pageRequireSetting.logout.some(path =>
    pathname.startsWith(path)
  );

  if (shouldRedirectToDashboard) {
    return NextResponse.redirect(new URL('/dashboard', baseurl));
  }

  const shouldRedirectToAccount = !isLoggedIn && pageRequireSetting.login.some(path =>
    pathname.startsWith(path)
  );

  if (shouldRedirectToAccount) {
    return NextResponse.redirect(new URL('/account', baseurl));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/api/v1/:path*',
    '/api/v2/:path*'
  ]
};
