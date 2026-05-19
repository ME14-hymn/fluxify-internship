// ToggleCard.jsx — Task 7: show/hide content with useState
import { useState } from 'react'

export default function ToggleCard({ title = 'Toggle Card', content = 'This content is toggled!' }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200">{title}</h3>
        <button
          onClick={() => setIsVisible((v) => !v)}
          className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all ${
            isVisible
              ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-300'
              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300'
          }`}
        >
          {isVisible ? 'Hide ▲' : 'Show ▼'}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-1 pb-2 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
          {content}
        </div>
      </div>
    </div>
  )
}
