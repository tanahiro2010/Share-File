import Link from "next/link";

interface LinkButtonProps {
    href: string;
    className?: string;
    children?: any;
}

export default function LinkButton({ href, className, children, ...props }: LinkButtonProps) {
    return (
        <Link href={href}>
            <div className={`border rounded-md p-4 hover:shadow-md ${className}`} {...props}>
                { children }
            </div>
        </Link>
    );
}