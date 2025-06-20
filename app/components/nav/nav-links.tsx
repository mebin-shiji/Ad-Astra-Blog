export default function NavLinks() {

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/tech", label: "TECH" },
        { href: "/space", label: "SPACE" },
        { href: "/politics", label: "POLITICS" },
        { href: "/nature", label: "MORE" }
    ];

    return (
        <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold transition-colors duration-200 hover:text-highlight"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}