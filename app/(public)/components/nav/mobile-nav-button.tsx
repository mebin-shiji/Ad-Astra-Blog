"use client";

import { useState } from "react";
import { NavLink } from "@/interfaces/nav";
import MobileNavMenu from "./mobile-nav-menu";

export default function MobileNavButton({ navLinks }: {navLinks: NavLink[]}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className=" lg:hidden p-2 rounded-lg transition-colors duration-200 flex-shrink-0 bg-primary/50 hover:bg-accent/40"
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

      {/* Mobile Navigation Menu */}
      <MobileNavMenu navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen= {setIsMenuOpen}/>
    </>
  );
}