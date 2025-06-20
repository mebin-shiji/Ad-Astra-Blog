import { Article } from "@/app/_utils/article";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ title, description, imageUrl, author, date }: Article) {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-muted min-h-100">
            <Image className="w-full h-70 object-cover" src={imageUrl} alt={title} width={600} height = {800}/>
            <div className="px-6 py-4">
                <Link href={`/articles/${title}`} className="font-bold text-xl mb-2 text-fg-primary hover:text-highlight">{title}</Link>
                <p className="text-fg-primary font-medium pt-2 opacity-80 text-base">{description}</p>
                <div className="mt-4 opacity-60 align-bottom">
                    <span className="text-fg-primary font-medium text-sm">{author}</span>
                    <span className="text-fg-primary font-medium text-sm mx-2">•</span>
                    <span className="text-fg-primary font-medium text-sm">{date.toDateString()}</span>
                </div>
            </div>
        </div>
    );
    
}