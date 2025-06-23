import { Article } from "@/interfaces/article";
import ArticleCard from "./article-card";

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mt-5 bg-transparent">
      {articles.map((article) => (
        <ArticleCard
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
    </section>
  );
}
