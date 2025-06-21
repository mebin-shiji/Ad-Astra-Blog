import Link from "next/link";
import Logo from "../icons/logo";

export default function Header() {
  return (
    <header className="p-3 justify-center bg-transparent w-full mx-auto hidden lg:flex">
      <Link href="/" className="flex items-center w-fit">
        <Logo className="h-10 w-10 sm:h-20 sm:w-20" />
        <h1 className="text-4xl pt-1 pl-2 font-bold text-fg-primary hidden lg:block">
          AD ASTRA BLOG
        </h1>
      </Link>
    </header>
  );
}
