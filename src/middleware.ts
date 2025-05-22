import { MiddlewareConfig, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const pageRequireSetting = {
  login: ["/dashboard", "/api/v2"], // ログインしてないと見れない
  logout: ["/account", "/api/v1"],  // ログインしてたら見れない
};

export default async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  // ✅ /api/v1/session は middleware 適用対象から除外
  if (pathname === "/api/v1/session") {
    return NextResponse.next();
  }

  // ✅ セッション状態を確認（fetch + try-catch）
  const login = await (async (): Promise<boolean> => {
    try {
      const res = await fetch(`${origin}/api/v1/session`);
      if (!res.ok) return false;

      const data = await res.json();
      return data.success === true;
    } catch (error) {
      console.warn("Session fetch error:", error);
      return false; // フェッチ失敗時は未ログイン扱い
    }
  })();

  // ✅ パスに応じて適切なリダイレクト
  const redirectTo = login
    ? pageRequireSetting.logout.find(path => pathname.startsWith(path))
      ? "/dashboard"
      : null
    : pageRequireSetting.login.find(path => pathname.startsWith(path))
      ? "/account"
      : null;

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  return NextResponse.next();
}

// ✅ 対象パス指定
export const config: MiddlewareConfig = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/account/:path*",
    "/api/v1/:path*",
    "/api/v2/:path*",
  ],
};
