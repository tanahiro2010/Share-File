import { NextResponse } from "next/server";
import { auth } from "@/libs/database/auth";

export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ success: false, message: "The session is not found" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "The session is found" }, { status: 200 });
}