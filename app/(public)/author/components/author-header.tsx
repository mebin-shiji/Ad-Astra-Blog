import Image from "next/image";

export default function AuthorHeader({name, title, imageUrl, bio}: {name: string, title:string, imageUrl:string, bio: string}) {
  return (
    <section className="flex flex-col bg-muted rounded-lg shadow-lg lg:flex-row items-center lg:justify-center gap-10">
      <Image
        src={imageUrl}
        className="mt-10 lg:mb-10 h-80 w-80 object-cover rounded-lg border-2 border-highlight"
        width={500}
        height={500}
        alt={`${name} image`}
      />
      <div className="flex flex-col mb-10">
        <span className="text-4xl font-bold">
          {name.toLocaleUpperCase()}
        </span>
        <span className="text-lg font-medium">
          {title.toLocaleUpperCase()}
        </span>
        <span className="font-medium pt-5">{bio}</span>
      </div>
    </section>
  );
}
