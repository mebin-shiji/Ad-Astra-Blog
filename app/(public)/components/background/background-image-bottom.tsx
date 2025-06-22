import Image from "next/image";

export default function ThemeBackgroundBottom() {
  return (
    <Image
      src={"/images/bg-bottom.svg"}
      alt="Background Bottom"
      width={1920}
      height={1080}
      className="w-full h-210 absolute bottom-0 left-0 z-[-1] opacity-10 object-cover max-md:hidden"
    />
  );
}
