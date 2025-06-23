import Link from "next/link";

export default function NavLinks() {

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/category/tech", label: "TECH" },
        { href: "/category/space", label: "SPACE" },
        { href: "/category/politics", label: "POLITICS" },
        { href: "/category", label: "BROWSE" }
    ];

    return (
        <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold transition-colors duration-200 hover:text-highlight-secondary"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}