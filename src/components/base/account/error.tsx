"use client";
import { useEffect, useState } from "react";

export default function ErrorMessage() {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("Error");
    const [description, setDescription] = useState<string>("どこかでエラーが起きました");

    useEffect(() => {
        const uri = new URL(window.location.href);
        const { searchParams } = uri;
        const error = searchParams.get('error');

        if (!error) return;
        setIsHidden(false);

        switch (error) {
            case 'parameter-invalid':
                setTitle('送信されたパラメーターが不正です');
                setDescription('値が設定されていない、SQLインジェクションなどの内容が含まれている可能性があります');
                break;

            case 'user-not-found':
                setTitle('ユーザーが見つかりません');
                setDescription('ユーザーが見つからないか、パスワードが間違っています');
                break;

            case 'user-already-exists':
                setTitle('ユーザーが既に存在します');
                setDescription('そのメールアドレスを使用しているユーザーが既に存在します');
                break;
        }
    }, []);

    return (
        <div className={`${isHidden ? "hidden" : ""} flex justify-center`} id="error">
            <div className="mt-2 w-2/3 rounded-md border border-red-600 p-3">
                <div className="text-2xl">
                    { title }
                </div>

                <div className="mt-2 text-gray-600">
                    { description }
                </div>
            </div>
        </div>
        
    );
}