import { MiddlewareConfig, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from './utils/auth';

const pageRequireSetting = {
    login: [  // ログインしてないと見れないページ
        "/dashboard",
        "/api/v2"
    ],
    logout: [ // ログインしてたら見れないページ
        "/account",
        "/api/v1"
    ]
}

export default async function middleware(req: NextRequest) {
    const uri = new URL(req.url);
    const baseurl = `${uri.protocol}//${uri.host}`;
    const pathname = uri.pathname;
    const login = await auth();

    if (login) { // ログインしているなら
        pageRequireSetting.logout.forEach((path: string) => {
            if (pathname.startsWith(path)) {
                return NextResponse.redirect(baseurl + "/dashboard");
            }
        });
    } else {     // ログインしていないなら
        pageRequireSetting.login.forEach((path: string) => {
            if (pathname.startsWith(path)) {
                return NextResponse.redirect(baseurl + "/account");
            }
        });
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config: MiddlewareConfig = {
    matcher: [
        '/dashboard/:path*',
        '/account/:path*',
        '/api/v1/:path*', 
        '/api/v2/:path*'
    ],
}