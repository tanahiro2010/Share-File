import { Submit, Input } from "@/components/ui/account/form";

export default function Register() {
    return (
        <main className="container mx-auto py-12">
            <div className="text-center p-4">
                <div className="text-2xl font-bold">
                    新規登録
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
                            登録
                        </Submit>
                    </form>
                </div>
            </div>
        </main>
    )
}