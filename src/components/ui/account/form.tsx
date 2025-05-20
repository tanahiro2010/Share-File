import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    name?: string;
    placeholder?: string;
    className?: string;
}

function Input({ type = "text", name, placeholder, className, ...props }: InputProps) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`w-2/3 rounded border border-gray-600 px-4 py-2 ${className}`}
            {...props}
        />
    )
}

interface SubmitProps {
    className?: string;
    children?: string;
}

function Submit({ className, children }: SubmitProps) {
    return (
        <div className="w-full flex justify-center">
            <button type="submit" className="w-2/3 cursor-pointer">
                <div className={`px-5 py-2 rounded border hover:bg-gray-100 ${className}`}>
                    {children}
                </div>
            </button>
        </div>

    )
}

export { Input, Submit };