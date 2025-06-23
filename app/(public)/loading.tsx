export default function BlogSkeletonRefined() {
  return (
    <>
      {/* Featured Section Skeleton */}
      <section className="bg-muted rounded-lg shadow-lg mt-10 animate-pulse">
        <div className="flex flex-col sm:flex-row rounded-lg p-5 gap-10">
          {/* Featured article skeleton */}
          <div className="relative overflow-hidden bg-secondary xl:w-1/2 rounded-lg">
            {/* Featured tag */}
            <div className="absolute top-4 left-4 z-10 h-8 w-28 bg-primary rounded-md"></div>

            {/* Featured image */}
            <div className="w-full h-80 bg-primary"></div>

            <div className="p-6 space-y-4">
              {/* Title lines */}
              <div className="space-y-3">
                <div className="h-6 bg-primary rounded w-full"></div>
                <div className="h-6 bg-primary rounded w-4/5"></div>
              </div>

              {/* Description lines */}
              <div className="space-y-2">
                <div className="h-4 bg-primary rounded w-full"></div>
                <div className="h-4 bg-primary rounded w-11/12"></div>
                <div className="h-4 bg-primary rounded w-3/4"></div>
              </div>

              {/* Author and date */}
              <div className="flex items-center space-x-3">
                <div className="h-4 bg-primary rounded w-24"></div>
                <div className="h-4 w-4 bg-primary rounded-full"></div>
                <div className="h-4 bg-primary rounded w-20"></div>
              </div>
            </div>
          </div>

          {/* Sub articles skeleton */}
          <div className="w-1/2 hidden xl:block space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-16 h-16 bg-primary rounded flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-primary rounded w-full"></div>
                  <div className="h-4 bg-primary rounded w-3/4"></div>
                  <div className="h-3 bg-primary rounded w-1/2"></div>
                  <div className="flex space-x-2">
                    <div className="h-3 bg-primary rounded w-16"></div>
                    <div className="h-3 bg-primary rounded w-14"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid Skeleton */}
      <section className="grid bg-secondary gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mt-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg bg-secondary animate-pulse"
          >
            <div className="w-full h-48 bg-primary"></div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="h-5 bg-primary rounded w-full"></div>
                <div className="h-5 bg-primary rounded w-4/5"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-primary rounded w-full"></div>
                <div className="h-4 bg-primary rounded w-3/4"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-3 bg-primary rounded w-20"></div>
                <div className="h-3 w-3 bg-primary rounded-full"></div>
                <div className="h-3 bg-primary rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
