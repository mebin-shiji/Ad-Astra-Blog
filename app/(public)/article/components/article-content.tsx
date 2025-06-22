import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

export default function ArticleContent({ content }: { content: string }) {
  return (
    <article className="sm:px-20 lg:px-32 xl:px-48 2xl:px-60 mt-10 text-lg text-fg-primary font-medium">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-md mx-auto block"
            />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-highlight hover:underline"
              target="_blank"
              rel="noopener"
            >
              {children}
            </a>
          ),
          p: ({ children }) => <p className="mb-4">{children}</p>,
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold mb-3 mt-5">{children}</h3>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
