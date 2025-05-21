import { Session } from "@prisma/client";
import { cookies } from "next/headers";
import prisma from "@/libs/prisma";

export async function auth(): Promise<null | Session> {
    const cookieStore = await cookies();
    const token: string | undefined = await cookieStore.get('s-token')?.value; // セッショントークン
    
    if (!token) {
        return null;
    }

    console.log(`Token: ${token}`);

    return await prisma.session.findFirst({
        where: {
            token: token
        }
    });
}