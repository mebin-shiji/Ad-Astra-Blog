import { Article } from "@/app/_utils/article";
import Link from "next/link";

export default function ArticleCard({ title, description, imageUrl, author, date }: Article) {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-secondary min-h-100 text-fg-secondary">
            <img className="w-full h-70 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <Link href={`/articles/${title}`} className="font-bold text-xl mb-2 text-fg-secondary hover:text-highlight">{title}</Link>
                <p className="text-fg-secondary pt-2 opacity-80 text-base">{description}</p>
                <div className="mt-4 opacity-60 align-bottom">
                    <span className="text-fg-secondary text-sm">{author}</span>
                    <span className="text-fg-secondary text-sm mx-2">•</span>
                    <span className="text-fg-secondary text-sm">{date.toDateString()}</span>
                </div>
            </div>
        </div>
    );
    
}