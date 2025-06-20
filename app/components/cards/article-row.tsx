import { Article } from "@/app/_utils/article";
import Link from "next/link";

export default function ArticleRow({ id, title, imageUrl, description, author, date }: Article) {
    return (
        <div className="flex items-center py-4">
            <img className="h-20 w-20 flex-shrink-0 object-cover rounded-lg mr-4" src={imageUrl} alt={title} />
            <div>
                <Link href={`/articles/${title}`} className="font-bold text-xl text-fg-secondary hover:text-highlight">{title}</Link>
                <p className="text-fg-secondary pt-1 text-base opacity-80">{description}</p>
                <div className="mt-2 opacity-60">
                    <span className="text-fg-secondary text-sm">{author}</span>
                    <span className="text-fg-secondary text-sm mx-2">•</span>
                    <span className="text-fg-secondary text-sm">{date.toDateString()}</span>
                </div>
            </div>
        </div>
    )
}
