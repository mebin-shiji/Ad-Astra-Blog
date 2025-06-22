"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeBackgroundTop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything during SSR or before mounting
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Image
      src={isDark ? "/images/bg-top-dark.png" : "/images/bg-top-light.png"}
      alt="Background Top"
      width={1920}
      height={1080}
      className="w-full h-250 absolute top-0 z-[-1] opacity-20 object-cover max-md:hidden"
      priority
    />
  );
}