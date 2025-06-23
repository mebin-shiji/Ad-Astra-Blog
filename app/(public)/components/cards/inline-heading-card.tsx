export default function InlineHeadingCard({ heading }: { heading: string }) {
  return (
    <div className="flex justify-center items-center bg-muted mt-5 h-15 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{heading}</h1>
    </div>
  );
}
