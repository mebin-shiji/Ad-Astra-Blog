export type Article = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    date: Date;
    featured?: boolean;
}

export type ArticleDetails = {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
}