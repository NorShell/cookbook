const fallbackElements = new Array(5).fill(null)

export function EntriesFallback() {
  return (
    <ul className="animate-pulse space-y-4">
      {fallbackElements.map((_, i) => (
        <li
          key={i}
          className="flex items-center justify-start w-full gap-5 p-5"
        >
          <div className="w-10 h-10 bg-zinc-800 rounded-full" />
          <div className="flex flex-col space-y-2 w-full">
            <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
            <div className="h-3 bg-zinc-700 rounded w-1/2"></div>
          </div>
        </li>
      ))}
    </ul>
  )
}
