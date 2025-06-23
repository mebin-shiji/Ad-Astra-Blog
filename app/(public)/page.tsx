import FeaturedArticle from "./components/cards/featured-article";
import { articles } from "../_utils/test";
import { notFound } from "next/navigation";
import ArticleGrid from "./components/cards/article-grid";
export default function Home() {
  const featuredArticles = articles.filter((article) => article.featured);

  if (featuredArticles.length === 0 && articles.length === 0) {
    return notFound();
  }

  return (
    <>
      <section className="bg-muted rounded-lg shadow-lg mt-10">
        {featuredArticles && (
          <FeaturedArticle featuredArticles={featuredArticles} />
        )}
      </section>

      <ArticleGrid articles={articles} />
    </>
  );
}
