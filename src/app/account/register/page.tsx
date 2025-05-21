import { Submit, Input } from "@/components/ui/account/form";
import ErrorMessage from "@/components/base/account/error";

export default function Register() {
    return (
        <main className="container mx-auto py-12">
            <div className="text-center p-4">
                <div className="text-2xl font-bold">
                    新規登録
                </div>

                <ErrorMessage />

                <div className="mt-4">
                    <form action="/api/v1/register" method="post">
                        <div className="hidden">
                            <input type="hidden" name="location" value={`/`} />
                        </div>

                        <Input name="email" placeholder="email" />
                        <Input name="name" placeholder="name" className="mt-2"/>
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