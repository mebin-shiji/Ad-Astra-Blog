export interface Author {
    id: number;
    name: string;
}

export interface AuthorDetails extends Author {
    title: string;
    bio: string;
    imageUrl: string;
}

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

export interface Category {
    key: string;
    name: string;
    description: string
    imageUrl: string;
}

