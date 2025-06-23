import ThemeBackgroundBottom from "./components/background/background-image-bottom";
import ThemeBackgroundTop from "./components/background/background-image-top";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeBackgroundTop />
      <Header />
      <Nav />
      <div className="mx-4 sm:mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">{children}</div>
      <ThemeBackgroundBottom />
    </>
  );
}
