// Counter.jsx — Task 7: useState, no negative values
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => Math.max(0, c - 1))
  const reset = () => setCount(0)

  return (
    <div className="card p-6 text-center space-y-4">
      <h3 className="font-semibold text-slate-700 dark:text-slate-200">Counter</h3>
      <div className="text-5xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
        {count}
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold text-xl hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          −
        </button>
        <button
          onClick={reset}
          className="px-3 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-bold text-xl hover:bg-indigo-700 transition"
        >
          +
        </button>
      </div>
    </div>
  )
}
