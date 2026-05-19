// TeamDirectory.jsx — Task 10: parent component, manages members + search state
import { useState } from 'react'
import SearchBar from './SearchBar'
import MemberList from './MemberList'
import AddMemberForm from './AddMemberForm'

const INITIAL_MEMBERS = [
  { id: 1, name: 'Alice Mutoni',    role: 'Lead Engineer',      department: 'Engineering' },
  { id: 2, name: 'Bob Habimana',   role: 'UI/UX Designer',     department: 'Design' },
  { id: 3, name: 'Clara Uwase',    role: 'Product Manager',    department: 'Product' },
  { id: 4, name: 'David Niyonzima', role: 'Backend Developer', department: 'Engineering' },
  { id: 5, name: 'Eva Mukamana',   role: 'Marketing Lead',     department: 'Marketing' },
  { id: 6, name: 'Frank Bizimana', role: 'DevOps Engineer',    department: 'Engineering' },
]

export default function TeamDirectory() {
  const [members, setMembers] = useState(INITIAL_MEMBERS)
  const [query, setQuery] = useState('')

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.role.toLowerCase().includes(query.toLowerCase())
  )

  const handleAdd = (newMember) => {
    setMembers((prev) => [...prev, newMember])
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <SearchBar query={query} onQueryChange={setQuery} />
        </div>
        <span className="text-xs text-slate-400 self-center font-mono whitespace-nowrap">
          {filtered.length} / {members.length} members
        </span>
      </div>
      <MemberList members={filtered} />
      <AddMemberForm onAdd={handleAdd} />
    </div>
  )
}
