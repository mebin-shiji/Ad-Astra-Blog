export interface Author {
    id: number;
    name: string;
}

export interface AuthorDetails extends Author {
    title: string;
    bio: string;
    imageUrl: string;
}