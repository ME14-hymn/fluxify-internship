// SearchBar.jsx — Task 10: filters team members in real time
export default function SearchBar({ query, onQueryChange }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
      <input
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search by name or role…"
        className="input-field pl-9"
      />
    </div>
  )
}
