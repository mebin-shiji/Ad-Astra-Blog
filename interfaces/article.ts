import { Author } from "./author";

export interface Article {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: Author;
    date: Date;
    featured?: boolean;
    categoryKey: string;
}

export interface ArticleDetails extends Article {
    content: string;
}