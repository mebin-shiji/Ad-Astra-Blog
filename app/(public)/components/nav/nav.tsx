"use client";

import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import NavLogo from "./nav-logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
    // Add logic here to update your app's theme context or document class
  };

 const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/category/tech", label: "TECH" },
        { href: "/category/space", label: "SPACE" },
        { href: "/category/politics", label: "POLITICS" },
        { href: "/category", label: "BROWSE" }
    ];

  return (
    <nav
      className={`sticky top-0 z-50 xl:mx-20 2xl:mx-40 bg-secondary text-fg-secondary shadow-lg`}
    >
      <div className="flex items-center h-15 px-4">
        {/* Logo - Left side */}
        <NavLogo/>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-bold transition-colors duration-200 hover:text-highlight-secondary whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side - Theme toggle and mobile menu button */}
        <div className="flex items-center justify-end space-x-4 flex-1 ml-5">
          <div className="hidden h-5 w-[1px] bg-gray-400 lg:block"></div>
          <a
            href="/subscribe"
            className="text-base font-bold text-red-600 hover:text-red-400 transition-colors duration-200 whitespace-nowrap hidden lg:block"
          >
            SUBSCRIBE
          </a>
          <div className="hidden h-5 w-[1px] bg-gray-400 lg:block"></div>
          <a
            href="/signin"
            className="text-base font-bold text-fg-secondary hover:text-highlight-secondary transition-colors duration-200 whitespace-nowrap"
          >
            SIGN IN
          </a>
          <div className="h-5 w-[1px] bg-gray-400"></div>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 flex-shrink-0 bg-primary/50 hover:bg-accent/40"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-108 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="py-4 space-y-2 border-t border-accent"
        >
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
    </nav>
  );
}
