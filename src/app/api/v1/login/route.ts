import { NextRequest, NextResponse } from "next/server";
import { decodeForm } from "@/utils/decode";
import { cookies } from "next/headers";
import prisma from "@/libs/prisma";

interface PostProps {
    email: string | null;
    password: string | null;
    location?: string;
}

export async function POST(req: NextRequest) {
    const contentType = req.headers.get('Content-Type');
    const { email, password, location }: PostProps = (
        contentType?.includes("application/json") ? 
            await req.json() : (
                contentType?.includes("application/x-www-form-urlencoded") ?
                    decodeForm(await req.text()) : 
                    { email: null, password: null }
            )
    );

    if (email === null || password === null) {
        if (location) {
            return NextResponse.redirect(new URL('/account/login?error=parameter-invalid', req.nextUrl));
        }
        
        return NextResponse.json({ success: false, message: "The request parameter is invalid" }, { status: 400 });
    }

    
}