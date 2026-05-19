// CartSummary.jsx — Task 7: displays total cart count
export default function CartSummary({ count }) {
  return (
    <div className="card px-5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🛒</span>
        <span className="font-semibold text-slate-700 dark:text-slate-200">Cart Summary</span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            count > 0
              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
              : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      </div>
    </div>
  )
}
