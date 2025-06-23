import Link from "next/link";
import ArticleRow from "./article-row";
import Image from "next/image";
import { Article } from "@/interfaces/article";

export default function FeaturedArticle({
  featuredArticles,
}: {
  featuredArticles: Article[];
}) {
  const featuredArticle = featuredArticles.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )[0];
  const subArticles = featuredArticles
    .filter((article) => article.id !== featuredArticle.id)
    .splice(0, 4);

  return (
    <div className="flex flex-col sm:flex-row rounded-lg p-5 gap-10">
      {/* Featured article card - left side half card */}
      <div className="relative overflow-hidden bg-muted text-fg-secondary xl:w-1/2 rounded-lg">
        {/* Featured tag */}
        <div className="flex justify-center absolute top-4 z-10 bg-highlight-secondary text-secondary text-base font-extrabold px-4 sm:px-10 py-1 rounded-md shadow-md">
          <Image
            src="/icons/star.svg"
            height={16}
            width={16}
            alt="Featured Icon"
            className="mr-2 mb-1 "
          />
          FEATURED
        </div>

        <Link href={`/article/${featuredArticle.id}`}>
          <Image
            className="w-full h-70 object-cover"
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            width={600}
            height={800}
          />
        </Link>
        <div className="px-6 py-4">
          <Link
            href={`/article/${featuredArticle.id}`}
            className="font-bold text-3xl mb-2 text-fg-primary hover:text-highlight"
          >
            {featuredArticle.title}
          </Link>
          <p className="text-fg-primary pt-2 opacity-80 font-medium text-lg">
            {featuredArticle.description}
          </p>
          <div className="mt-4 opacity-60 align-bottom">
            <span className="text-fg-primary font-medium text-base">
              {featuredArticle.author.name}
            </span>
            <span className="text-fg-primary font-medium text-base mx-2">
              •
            </span>
            <span className="text-fg-primary font-medium text-base">
              {featuredArticle.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Sub articles list - right side rows */}
      <div className="rounded-lg overflow-hidden bg-muted min-h-100 w-1/2 hidden xl:block">
        {subArticles.map((article) => (
          <ArticleRow
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            author={article.author}
            date={article.date}
            categoryKey={article.categoryKey}
          />
        ))}
      </div>
    </div>
  );
}
