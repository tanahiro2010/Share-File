import { bin2hex } from "@/utils/bin2hex";
import { isEmail } from "@/utils/check";
import { sha256 } from "@/utils/hash";
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

async function registUser(email: string, name: string, password: string): Promise<null | User> {
    const user = await getUser(null, email);
    
    if (user) return null;
    if (!isEmail(email)) return null;

    const userId: string = bin2hex(32);
    const result = await prisma.user.create({
        data: {
            email,
            name,
            password: sha256(password),
            user_id: userId
        }
    });

    return result;
}

export { getUser, updateUser, registUser };