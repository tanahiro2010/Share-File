import { cookies } from "next/headers";
import DefaultLink from "../ui/link";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Header() {
    
    return (
        <header className={`border border-gray-600 flex items-center justify-between rounded-md px-6 py-3`}>
            <h1 className="text-3xl font-bold">
                <Link href={`/`}>
                    Share-File
                </Link>
            </h1>

            <div className="text-gray-600">
                迅速なファイル共有を無料でお届け
            </div>

            <div className="flex items-center p-2">
                <DefaultLink href="/login">
                    ログイン
                </DefaultLink>
            </div>
        </header>
    );
}