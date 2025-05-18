import prisma from "@/libs/prisma";
import { cookies } from "next/headers";

export async function auth() {
    const cookieStore = await cookies();
    const token = await cookieStore.get('s-token'); //
    prisma.user.findFirst()
}