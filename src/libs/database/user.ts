import { User } from "@prisma/client";
import prisma from "../prisma";

async function getUser(userId?: string | null, email?: string): Promise<null | User> {
    const selector: Record<string, string> = {};
    if (userId) {
        selector.user_id = userId;
    } else if (email) {
        selector.email = email;
    } else {
        return null;
    }

    const user = await prisma.user.findFirst({
        where: selector
    });

    if (!user) return null;

    return user;
}

async function updateUser(email: string, data: Record<string, any>): Promise<null | User> {
    const user = await getUser(null, email);
    if (!user) return null;

    try {
        await prisma.user.update({
            where: { email: email },
            data: data
        });
    } catch {
        return null;
    }

    return await getUser(null, email);
}

async function registUser(data: User) {
    
}