import { Article } from "../_utils/article";
import ArticleCard from "./components/cards/article-card";
import FeaturedArticle from "./components/cards/featured-article";
import {articles} from "../_utils/test";
export default function Home() {
 

  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <>
      <section className="bg-muted rounded-lg shadow-lg mt-10">
        {featuredArticles && (
          <FeaturedArticle featuredArticles={featuredArticles} />
        )}
      </section>

      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mt-5 bg-transparent">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            author={article.author}
            date={article.date}
          />
        ))}
      </section>
    </>
  );
}
