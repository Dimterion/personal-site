export default function Skeleton() {
  return (
    <ul className="flex flex-col gap-8">
      {[...Array(3)].map((_, i) => (
        <li key={i} className="animate-pulse">
          <div className="mb-2 h-6 w-3/4 rounded bg-muted" />
          <div className="mb-2 h-4 w-1/2 rounded bg-muted" />
          <div className="h-4 w-1/2 rounded bg-muted" />
        </li>
      ))}
    </ul>
  );
}
