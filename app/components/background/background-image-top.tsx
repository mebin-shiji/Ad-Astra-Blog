"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeBackgroundTop() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || (
      !savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    setIsDark(prefersDark);

    // Listen for storage changes (when localStorage is updated)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
      }
    };

    // Listen for custom theme change events (for same-tab updates)
    const handleThemeChange = (e: CustomEvent) => {
      setIsDark(e.detail.isDark);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themechange", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themechange", handleThemeChange as EventListener);
    };
  }, []);

  return (
    <>
      <Image
        src={isDark ? "/images/bg-top-dark.png" : "/images/bg-top-light.png"}
        alt="Background Top"
        width={1920}
        height={1080}
        className="w-full h-250 absolute top-0 z-[-1] opacity-20 object-cover max-md:hidden"
      />
    </>
  );
}