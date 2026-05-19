// Bio.jsx — Sub-component for ProfileCard
export default function Bio({ bio }) {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
      {bio}
    </p>
  )
}
