import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";


export const metadata: Metadata = {
  title: "Ad Astra Blog",
  description: "Blog about space, science, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <Nav />
        <div className="mx-4 sm:mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">
        {children}
        </div>
      </body>
    </html>
  );
}
