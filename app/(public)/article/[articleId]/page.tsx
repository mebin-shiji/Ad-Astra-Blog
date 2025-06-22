import ArticleCard from "../../components/cards/article-card";
import ArticleContent from "../components/article-content";
import ArticleHeader from "../components/article-header";
import { articleDetails } from "@/app/_utils/test";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const articleId = Number((await params).articleId);
  console.log("Product ID:", articleId);
  const article = articleDetails.find(article => article.id === articleId);
    console.log("Article:", article);
  if (!article) {
    return <div className="text-center text-primary mt-6">Article not found</div>;
  }
  return (
    <div className="flex flex-col mt-6 p-6 bg-muted rounded-lg shadow-lg">
        <ArticleHeader title={article.title} description={article.description} imageUrl={article.imageUrl} author={article.author} date={article.date}/>
        <ArticleContent content={article.content}/>
    </div>
  );
}
