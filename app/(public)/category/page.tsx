import { categoryList } from "@/app/_utils/test";
import { notFound } from "next/navigation";
import InlineHeadingCard from "../components/cards/inline-heading-card";
import CategoryCard from "./components/category-card";

export default async function CategoryPage() {
  if (!categoryList) {
    return notFound();
  }

  return (
    <section className="flex flex-col justify-center">
      <InlineHeadingCard heading="BROWSE BY CATEGORY" />
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mt-5 bg-transparent">
        {categoryList.map((category) => (
          <CategoryCard key={category.key} category={category} />
        ))}
      </div>
    </section>
  );
}
