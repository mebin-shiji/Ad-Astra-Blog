import { Article } from "../_utils/article";
import ArticleCard from "../components/cards/article-card";
import FeaturedArticle from "../components/cards/featured-article";

export default function Home() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Exploring the Cosmos and Beyond. A Journey Through Space and Time.",
      description: "A deep dive into the mysteries of the universe. What lies beyond our solar system?",
      imageUrl: "https://picsum.photos/600/800",
      author: "Jane Doe",
      date: new Date("2025-10-01"),
      featured: true,
    },
    {
      id: 2,
      title: "The Future of AI",
      description: "How artificial intelligence is shaping our world.",
      imageUrl: "https://picsum.photos/600/800",
      author: "John Smith",
      date: new Date("2023-10-02"),
      featured: false,
    },
    {
      id: 3,
      title: "Climate Change and Its Impact",
      description: "Understanding the effects of climate change on our planet and the ways that we collectively can prevent it.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Alice Johnson",
      date: new Date("2023-10-03"),
      featured: true,
    },
    {
      id: 4,
      title: "Space Exploration Milestones",
      description: "Key achievements in space exploration history.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Bob Brown",
      date: new Date("2023-10-04"),
      featured: true,
    },
    {
      id: 5,
      title: "Quantum Computing Explained",
      description: "An introduction to the principles of quantum computing.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Charlie Davis",
      date: new Date("2023-10-05"),
      featured: false,
    },
    {
      id: 6,
      title: "The Wonders of the Deep Sea",
      description: "Discovering the mysteries of the ocean depths.",
      imageUrl: "https://picsum.photos/600/800",
      author: "David Wilson",
      date: new Date("2023-10-06"),
      featured: false,
    },
    {
      id: 7,
      title: "The Evolution of Spacecraft",
      description: "A look at how spacecraft have evolved over the decades.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Emma Thompson",
      date: new Date("2023-10-07"),
      featured: true,
    },
    {
      id: 8,
      title: "The Science of Black Holes",
      description: "Understanding the enigmatic nature of black holes.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Frank Miller",
      date: new Date("2023-10-08"),
      featured: true,
    },
    {
      id: 9,
      title: "Advancements in Renewable Energy",
      description:
        "Exploring the latest innovations in renewable energy sources.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Grace Lee",
      date: new Date("2023-10-09"),
      featured: false,
    },
    {
      id: 10,
      title: "The Search for Extraterrestrial Life",
      description: "Examining the possibilities of life beyond Earth.",
      imageUrl: "https://picsum.photos/600/800",
      author: "Hannah Brown",
      date: new Date("2023-10-10"),
      featured: false,
    },
  ];
  const featuredArticle = articles.filter((article) => article.featured);

  return (
    <>
      <section className="bg-muted rounded-lg shadow-lg mt-10">
        {featuredArticle && (
          <FeaturedArticle featuredArticles={featuredArticle} />
        )}
      </section>

      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 bg-primary mt-5">
        {articles.map((article, index) => (
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
