// MemberList.jsx — Task 10: renders list of MemberCards
import MemberCard from './MemberCard'

export default function MemberList({ members }) {
  if (members.length === 0) {
    return (
      <div className="card p-10 text-center col-span-full">
        <span className="text-3xl">🔎</span>
        <p className="mt-2 text-slate-500 dark:text-slate-400">No members found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}
