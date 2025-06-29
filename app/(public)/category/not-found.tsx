export default function NotFound() {
  return (
    <div className="flex flex-col items-center pb-50 justify-center min-h-screen bg-transparent text-fg-primary">
      <h1 className="text-7xl font-bold">No Categories Found :(</h1>
      <p className="mt-4 text-2xl">
        There are no categories to browse at the moment.
      </p>
       <p className="mt-4 text-2xl">
        Please try again later.
      </p>
    </div>
  );
}
