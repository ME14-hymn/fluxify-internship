// ProfileCard.jsx — Task 6: Component with sub-components
import Avatar from './Avatar'
import Badge from './Badge'
import Bio from './Bio'

export default function ProfileCard({ name, role, bio, avatar }) {
  return (
    <div className="card p-5 flex gap-4 hover:shadow-md transition-shadow">
      <Avatar src={avatar} name={name} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-slate-900 dark:text-white text-base truncate">{name}</h3>
          <Badge role={role} />
        </div>
        <Bio bio={bio} />
      </div>
    </div>
  )
}
