import { Submit, Input } from "@/components/ui/account/form";

export default function Login() {
    return (
        <main className="container mx-auto py-12">
            <div className="text-center p-4">
                <div className="text-2xl font-bold">
                    ログイン
                </div>

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
                </div>
            </div>
        </main>
    )
}