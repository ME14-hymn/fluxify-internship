// Avatar.jsx — Sub-component for ProfileCard
export default function Avatar({ src, name }) {
  return (
    <div className="flex-shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 dark:border-indigo-800"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold border-2 border-indigo-200 dark:border-indigo-800">
          {name?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
}
