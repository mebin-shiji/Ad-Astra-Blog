import { authorDetails } from "@/app/_utils/test";
import { notFound } from "next/navigation";

export default async function CategoryPage({params}: {params: Promise<{authorId: string}>}) {

    const authorId = Number((await params).authorId)
    const author = authorDetails.find(author=> author.id === authorId)

    if(!author) {
        return notFound()
    }

    return (
        <h1>Hello World</h1>
    );
}