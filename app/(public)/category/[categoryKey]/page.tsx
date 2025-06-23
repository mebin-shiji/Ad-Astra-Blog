import { categoryList } from "@/app/_utils/test";
import { notFound } from "next/navigation";

export default async function CategoryDetailsPage({
  params,
}: {
  params: Promise<{ categoryKey: string }>;
}) {
    const categoryKey = (await params).categoryKey;

    const categoryDetails = categoryList.find(category => category.key === categoryKey);

    if(!categoryDetails) {
        return notFound();
    }

    return (
        <h1>Hello World</h1>
    )
}
