export interface Author {
    id: number;
    name: string;
}

export interface AuthorDetails extends Author {
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
}

export interface ArticleDetails extends Article {
    content: string;
    author: AuthorDetails;
}

