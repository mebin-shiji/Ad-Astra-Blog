import { Category } from "@/interfaces/category";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="flex flex-row bg-muted rounded-lg shadow-lg">
      <Link href={`/category/${category.key}`}>
        <Image
          className="h-20 w-36 rounded-l-lg object-cover"
          src={category.imageUrl}
          width={150}
          height={100}
          alt={category.name}
        />
      </Link>
      <div className="flex flex-col pl-2 py-2">
        <Link href={`/category/${category.key}`}>
          <h1 className="text-2xl font-bold hover:text-highlight">
            {category.name.toLocaleUpperCase()}
          </h1>
        </Link>
        <p className="text-base font-medium">{category.description}</p>
      </div>
    </div>
  );
}
