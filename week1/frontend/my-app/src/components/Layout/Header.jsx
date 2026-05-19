// Header.jsx — Task 8: dark mode toggle, persists in localStorage
export default function Header({ isDark, onToggleDark }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
          F
        </div>
        <span className="font-bold text-slate-900 dark:text-white tracking-tight">Full Front end</span>
        <span className="hidden sm:inline text-xs text-slate-400 font-mono ml-1">/ week1-frontend</span>
      </div>

      <button
        onClick={onToggleDark}
        className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition text-lg"
        title="Toggle dark mode"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
