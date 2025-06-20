import ArticleCard from "../components/cards/article-card";

export default function Home() {

        const articles = [
                {
                        title: "Exploring the Cosmos",
                        description: "A deep dive into the mysteries of the universe.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Jane Doe",
                        date: "2023-10-01"
                },
                {
                        title: "The Future of AI",
                        description: "How artificial intelligence is shaping our world.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "John Smith",
                        date: "2023-10-02"
                },
                {
                        title: "Climate Change and Its Impact",
                        description: "Understanding the effects of climate change on our planet.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Alice Johnson",
                        date: "2023-10-03"
                },
                {
                        title: "Space Exploration Milestones",
                        description: "Key achievements in space exploration history.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Bob Brown",
                        date: "2023-10-04"
                },
                {
                        title: "Quantum Computing Explained",
                        description: "An introduction to the principles of quantum computing.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Charlie Davis",
                        date: "2023-10-05"
                },
                {
                        title: "The Wonders of the Deep Sea",
                        description: "Discovering the mysteries of the ocean depths.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "David Wilson",
                        date: "2023-10-06"
                },
                {
                        title: "The Evolution of Spacecraft",
                        description: "A look at how spacecraft have evolved over the decades.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Emma Thompson",
                        date: "2023-10-07"
                },
                {
                        title: "The Science of Black Holes",
                        description: "Understanding the enigmatic nature of black holes.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Frank Miller",
                        date: "2023-10-08"
                },
                {
                        title: "Advancements in Renewable Energy",
                        description: "Exploring the latest innovations in renewable energy sources.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Grace Lee",
                        date: "2023-10-09"
                },
                {
                        title: "The Search for Extraterrestrial Life",
                        description: "Examining the possibilities of life beyond Earth.",
                        imageUrl: "https://picsum.photos/600/800",
                        author: "Hannah Brown",
                        date: "2023-10-10"
                }
        ]
        return (
                <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-primary text-fg-primary mt-10">

                        {articles.map((article, index) => (
                                <ArticleCard
                                        key={index}
                                        title={article.title}
                                        description={article.description}
                                        imageUrl={article.imageUrl}
                                        author={article.author}
                                        date={article.date}
                                />
                        ))}
                </section>
        );
}
