import { NextRequest, NextResponse } from "next/server";
import { getUser, registUser } from "@/libs/database/user";
import { decodeForm } from "@/utils/decode";

interface PostProps {
    email: string | null;
    name: string | null;
    password: string | null;
    location?: string;
}

export async function POST(req: NextRequest) {
    const contentType = req.headers.get('Content-Type');
    const { email, name, password, location }: PostProps = (
        contentType?.includes("application/json") ? 
            await req.json() : (
                contentType?.includes("application/x-www-form-urlencoded") ?
                    decodeForm(await req.text()) : 
                    { email: null, name: null, password: null }
            )
    );

    if (email === null || name === null || password === null) {
        if (location) {
            return NextResponse.redirect(new URL('/account/register?error=parameter-invalid', req.nextUrl));
        }
        
        return NextResponse.json({ success: false, message: "The request parameter is invalid" }, { status: 400 });
    }

    const user = await getUser(null, email);
    if (user) {
        if (location) {
            return NextResponse.redirect(new URL('/account/register?error=user-already-exists', req.nextUrl));
        }

        return NextResponse.json({ success: false, message: "The user already exists" }, { status: 400 });
    }

    const result = await registUser(email, name, password);

    if (!result) {
        if (location) {
            return NextResponse.redirect(new URL('/account/register?error=user-already-exists', req.nextUrl));
        }

        return NextResponse.json({ success: false, message: "The email address is already registered" }, { status: 400 });
    }

    if (location) {
        return NextResponse.redirect(new URL('/account/login', req.nextUrl));
    }

    return NextResponse.json({ success: true, message: "The user has been registered" }, { status: 200 });
}