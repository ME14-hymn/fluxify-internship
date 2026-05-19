// Sidebar.jsx — Task 8: hidden on mobile (hidden md:flex)
const NAV_ITEMS = [
  { icon: '👤', label: 'Profiles' },
  { icon: '🧩', label: 'State' },
  { icon: '🎨', label: 'Styling' },
  { icon: '📝', label: 'Forms' },
  { icon: '👥', label: 'Team Directory' },
]

export default function Sidebar({ activeSection, onNavigate }) {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 gap-1 pt-2">
      <p className="px-3 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
       
      </p>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.label)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
            activeSection === item.label
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  )
}
