export default function NotFound() {
  return (
    <div className="flex flex-col items-center pb-50 justify-center min-h-screen bg-transparent text-fg-primary">
      <h1 className="text-7xl font-bold">Category Not Found</h1>
      <p className="mt-4 text-2xl">
        The category you are looking for does not exist.
      </p>
       <p className="mt-4 text-2xl">
        Try browsing by category.
      </p>
    </div>
  );
}