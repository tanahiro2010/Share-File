import { Submit, Input } from "@/components/ui/account/form";
import ErrorMessage from "@/components/base/account/error";
import DefaultLink from "@/components/ui/link";

export default function Login() {
    return (
        <main className="container mx-auto py-12">
            <div className="text-center p-4">
                <div className="text-2xl font-bold">
                    ログイン
                </div>

                <ErrorMessage />

                <div className="mt-4">
                    <form action="/api/v1/login" method="post">
                        <div className="hidden">
                            <input type="hidden" name="location" value={`/`} />
                        </div>

                        <Input name="email" placeholder="email" />
                        <Input name="password" placeholder="password" type="password" className="mt-2" />

                        <div className=""></div>

                        <Submit className="mt-3">
                            ログイン
                        </Submit>
                    </form>

                    <div className="mt-4 flex justify-center">
                        新規登録は<DefaultLink href="/account/register">こちら</DefaultLink>
                    </div>
                </div>
            </div>
        </main>
    )
}