// Badge.jsx — Sub-component for ProfileCard
const colorMap = {
  Engineering: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  Design: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  Marketing: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  Product: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  default: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
}

export default function Badge({ role }) {
  const colorClass = colorMap[role] || colorMap.default
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorClass}`}>
      {role}
    </span>
  )
}
