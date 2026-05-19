// MemberCard.jsx — Task 10: displays a single team member
export default function MemberCard({ member }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)

  return (
    <div className="card p-4 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
        {initials}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{member.name}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">{member.role}</p>
      </div>
      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 font-medium">
        {member.department}
      </span>
    </div>
  )
}
