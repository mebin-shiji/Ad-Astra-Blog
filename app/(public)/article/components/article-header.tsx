import { Author } from "@/interfaces/author";
import Image from "next/image";
import Link from "next/link";

export default function ArticleHeader({
  title,
  description,
  imageUrl,
  author,
  date,
}: {
  title: string;
  description?: string;
  imageUrl: string;
  author?: Author;
  date?: Date;
}) {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 pb-4 border-accent border-b-2">
        {/* Image Section */}
        <div className="flex flex-col w-full  lg:w-1/2">
          <Image
            className="h-100 w-full object-cover rounded-lg"
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
          />
          <div className="mt-4 ">
            <Link
              href={`/author/${author?.id}`}
              className="text-fg-primary font-medium text-base hover:text-highlight opacity-60 hover:opacity-100"
            >
              {author?.name}
            </Link>
            <span className="text-fg-primary opacity-60 font-medium text-base mx-2">
              •
            </span>
            <span className="text-fg-primary opacity-60 font-medium text-base">
              {date?.toDateString()}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-fg-primary font-bold text-3xl lg:text-4xl mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-fg-primary font-medium text-lg opacity-80 leading-relaxed">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
