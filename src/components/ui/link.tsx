import Link from "next/link";

interface DefaultLinkProps {
    href: string;
    className?: string;
    children?: any;
}

export default function DefaultLink({ href, className, children, ...props }: DefaultLinkProps) {
    return (
        <Link href={href}>
            <div className={`text-blue-400 hover:text-blue-600 hover:underline ${className}`} { ...props }>
                { children }
            </div>
        </Link>  
    );
}