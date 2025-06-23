import { articles, categoryList } from "@/app/_utils/test";
import { notFound } from "next/navigation";
import InlineHeadingCard from "../../components/cards/inline-heading-card";
import ArticleGrid from "../../components/cards/article-grid";

export default async function CategoryDetailsPage({
  params,
}: {
  params: Promise<{ categoryKey: string }>;
}) {
  const categoryKey = (await params).categoryKey;

  const categoryDetails = categoryList.find(
    (category) => category.key === categoryKey
  );
  const categoryArticles = articles
    .filter((article) => article.categoryKey === categoryKey)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  if (!categoryDetails) {
    return notFound();
  }

  if (categoryArticles.length === 0) {
    return (
      <>
        <InlineHeadingCard
          heading={`RECENT ARTICLES - ${categoryDetails.name.toLocaleUpperCase()}`}
        />
        <div className="flex flex-col items-center pb-50 justify-center min-h-screen bg-transparent text-fg-primary">
          <p className="mt-4 text-3xl font-medium">
            No recent articles exist for the category - {categoryDetails.name}.
          </p>
          <p className="mt-4 text-3xl font-medium">
            Try browsing another category.
          </p>
        </div>
      </>
    );
  }

  return (
    <section>
      <InlineHeadingCard
        heading={`RECENT ARTICLES - ${categoryDetails.name.toLocaleUpperCase()}`}
      />

      <ArticleGrid articles={categoryArticles} />
    </section>
  );
}
