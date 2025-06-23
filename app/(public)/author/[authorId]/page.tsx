import { authorDetails, articles } from "@/app/_utils/test";
import { notFound } from "next/navigation";
import AuthorHeader from "../components/author-header";
import ArticleGrid from "../../components/article/article-grid";
export default async function AuthorPage({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const authorId = Number((await params).authorId);

  const author = authorDetails.find((author) => author.id === authorId);
  const authorArticles =
    articles
      .filter((article) => article.author.id === authorId)
      .sort((a, b) => b.date.getTime() - a.date.getTime()) || [];

  if (!author) {
    return notFound();
  }

  return (
    <div className="flex flex-col  mt-10">
      <AuthorHeader
        name={author.name}
        title={author.title}
        bio={author.bio}
        imageUrl={author.imageUrl}
      />

      <div className="flex justify-center items-center bg-muted mt-5 h-15 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">
          RECENT ARTICLES BY {author.name.toLocaleUpperCase()}
        </h1>
      </div>

      <ArticleGrid articles={authorArticles} />
    </div>
  );
}
