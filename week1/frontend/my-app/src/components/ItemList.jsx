// ItemList.jsx — Task 6: list with .map(), key props, empty state
export default function ItemList({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="card p-8 text-center">
        <span className="text-3xl">📭</span>
        <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium">No items found</p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="card px-4 py-3 flex items-center gap-3 hover:shadow transition-shadow"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
          <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
        </li>
      ))}
    </ul>
  )
}
