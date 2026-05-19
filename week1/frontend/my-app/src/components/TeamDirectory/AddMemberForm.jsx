// AddMemberForm.jsx — Task 10: adds new team member, updates list without refresh
import { useState } from 'react'

const EMPTY = { name: '', role: '', department: '' }

export default function AddMemberForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.role.trim()) newErrors.role = 'Role is required.'
    if (!form.department.trim()) newErrors.department = 'Department is required.'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    onAdd({ ...form, id: Date.now() })
    setForm(EMPTY)
  }

  return (
    <div className="card p-5">
      <h4 className="font-semibold text-slate-800 dark:text-white mb-4 text-sm">Add New Member</h4>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
        <div className="flex-1">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="input-field" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="flex-1">
          <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="input-field" />
          {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role}</p>}
        </div>
        <div className="flex-1">
          <input name="department" value={form.department} onChange={handleChange} placeholder="Department" className="input-field" />
          {errors.department && <p className="text-xs text-red-500 mt-1">{errors.department}</p>}
        </div>
        <button type="submit" className="btn-primary whitespace-nowrap">+ Add Member</button>
      </form>
    </div>
  )
}
