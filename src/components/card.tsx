export function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="w-full md:w-2/4 lg:w-1/4 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </article>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {children}
    </div>
  );
}
