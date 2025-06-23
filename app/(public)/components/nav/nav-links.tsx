import { NavLink } from "@/interfaces/nav";
import Link from "next/link";

export default function NavLinks({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <div className="hidden lg:flex justify-center flex-1 gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-base font-bold transition-colors duration-200 hover:text-highlight-secondary whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
