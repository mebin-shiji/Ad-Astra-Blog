import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import ThemeBackgroundTop from "../components/background/background-image-top";
import ThemeBackgroundBottom from "../components/background/background-image-bottom";
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
      <body className={`antialiased relative`}>
        <ThemeProvider {...themeProviderProps}>
          <ThemeBackgroundTop />
          <Header />
          <Nav />
          <div className="mx-4 sm:mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">
            {children}
          </div>
          <ThemeBackgroundBottom />
        </ThemeProvider>
      </body>
    </html>
  );
}
