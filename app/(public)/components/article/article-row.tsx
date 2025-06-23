import { Article } from "@/app/_utils/article";
import Link from "next/link";
import Image from "next/image";

export default function ArticleRow({
  id,
  title,
  imageUrl,
  description,
  author,
  date,
  categoryKey
}: Article) {
  return (
    <div className="flex items-center py-4">
      <Link href={`/article/${id}`}>
        <Image
          className="h-20 w-20 flex-shrink-0 object-cover rounded-lg mr-4"
          src={imageUrl}
          alt={title}
          width={600}
          height={600}
        />
      </Link>
      <div>
        <Link
          href={`/article/${id}`}
          className="font-bold text-xl text-fg-primary hover:text-highlight"
        >
          {title}
        </Link>
        <p className="text-fg-primary font-medium pt-1 text-base opacity-80">
          {description}
        </p>
        <div className="mt-2 opacity-60">
          <span className="text-fg-primary font-medium text-sm">
            {author.name}
          </span>
          <span className="text-fg-primary font-medium text-sm mx-2">•</span>
          <span className="text-fg-primary font-medium text-sm">
            {date.toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
