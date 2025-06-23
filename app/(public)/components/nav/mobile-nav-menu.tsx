import { NavLink } from "@/interfaces/nav";
import { useState } from "react";

export default function MobileNavMenu({
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
}: {
  navLinks: NavLink[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? "max-h-108 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4 space-y-2 border-t border-accent">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-center px-4 py-3 text-lg font-bold rounded-lg transition-colors duration-200 text-fg-secondary hover:text-highlight-secondary hover:bg-highlight/2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/subscribe"
          className="block text-center px-4 py-3 text-lg font-bold text-red-600 rounded-lg transition-colors duration-200 hover:text-red-400 hover:bg-red-400/2.5"
          onClick={() => setIsMenuOpen(false)}
        >
          SUBSCRIBE
        </a>
      </div>
    </div>
  );
}
