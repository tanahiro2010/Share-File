import { getUnixTimestamp } from "@/utils/timestamp";
import { bin2hex } from "@/utils/bin2hex";
import { Session } from "@prisma/client";
import prisma from "../prisma";

async function getSession(userId?: string | null, token?: string): Promise<Session | null> {
    const selector: Record<string, string> = {};
    if (userId) {
        selector.user_id = userId;
    } else if (token) {
        selector.token = token;
    } else {
        return null;
    }

    return await prisma.session.findFirst({
        where: selector
    });
}

async function updateSession(token: string): Promise<boolean> {
    const session = await getSession(null, token);

    if (!session) {
        return false;
    }

    try {
        await prisma.session.update({
            where: {
                token: token
            },
            data: {
                last_login: getUnixTimestamp()
            }
        });

    } catch (e) {
        return false;
    }

    return true;
}

async function registSession(userId: string): Promise<string | null> {
    const session = await getSession(userId);

    if (session) { // すでにログインしたことがあるなら期間を延ばす
        const updateResult = await updateSession(session.token);

        if (updateResult) {
            return session.token;
        } else {
            return null;
        }
    }

    const token = bin2hex(32); // トークンを生成
    const result = await prisma.session.create({
        data: {
            user_id: userId,
            token: token,
            last_login: getUnixTimestamp()
        }
    });

    if (result) {
        return token;
    }

    return null;
}

async function removeSession(token: string): Promise<boolean> {
    const session = await getSession(null, token);

    if (!session) {
        return false;
    }

    const result = await prisma.session.delete({
        where: {
            token: token
        }
    });

    return !!result;
}

export { getSession, registSession, removeSession };