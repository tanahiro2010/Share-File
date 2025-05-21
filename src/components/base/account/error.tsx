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