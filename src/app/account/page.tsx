import LinkButton from "@/components/ui/account/link-button";

export default function Account() {
    return (
        <main className="container mx-auto py-12">
            <div className="flex items-center justify-center h-full">
                <div className="w-2/3 border border-gray-500 rounded p-3 text-center">
                    <div className="text-2xl">
                        アカウント
                    </div>

                    <div className="mt-1 text-gray-600">
                        アカウントを持っている人はログイン、持っていない人は新規登録してください
                    </div>

                    <div className="mt-3">
                        <LinkButton href="/account/login">
                            ログイン
                        </LinkButton>

                        <LinkButton href="/account/register" className="mt-4">
                            新規登録
                        </LinkButton>
                    </div>
                </div>
            </div>
        </main>
    );
}