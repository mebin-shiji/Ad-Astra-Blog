import Link from "next/link";
import Logo from "@/app/components/icons/logo";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center flex-shrink-0 lg:flex-1">
      <Logo className="w-12 h-12 lg:hidden" />
      <span className="text-lg pl-1 font-bold lg:hidden max-sm:hidden">
        AD ASTRA BLOG
      </span>
    </Link>
  );
}
