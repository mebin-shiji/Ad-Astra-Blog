import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export const metadata: Metadata = {
  title: "Ad Astra Blog",
  description: "Blog about space, science, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeProviderProps: ThemeProviderProps = {
    attribute: "data-theme",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased relative min-h-[200vh]`}>
        <ThemeProvider {...themeProviderProps}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
