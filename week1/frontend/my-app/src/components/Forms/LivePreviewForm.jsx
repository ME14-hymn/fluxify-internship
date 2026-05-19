// LivePreviewForm.jsx — Task 9: live preview updates on every keystroke
import { useState } from 'react'

const INITIAL = { name: '', jobTitle: '', bio: '' }

export default function LivePreviewForm() {
  const [fields, setFields] = useState(INITIAL)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Form side */}
      <div className="card p-5 space-y-4">
        <h3 className="font-semibold text-slate-800 dark:text-white">Live Preview Form</h3>
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Name</label>
          <input name="name" value={fields.name} onChange={handleChange} placeholder="Your name" className="input-field" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Job Title</label>
          <input name="jobTitle" value={fields.jobTitle} onChange={handleChange} placeholder="e.g. Frontend Developer" className="input-field" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Bio</label>
          <textarea name="bio" value={fields.bio} onChange={handleChange} placeholder="A short bio…" rows={3} className="input-field resize-none" />
        </div>
      </div>

      {/* Preview side */}
      <div className="card p-5 flex flex-col justify-center items-center text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
          {fields.name?.charAt(0).toUpperCase() || '?'}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-lg">
            {fields.name || <span className="text-slate-400">Your Name</span>}
          </h4>
          <p className="text-sm text-indigo-500 font-medium">
            {fields.jobTitle || <span className="text-slate-400">Job Title</span>}
          </p>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
          {fields.bio || <span className="italic text-slate-300 dark:text-slate-600">Your bio will appear here…</span>}
        </p>
      </div>
    </div>
  )
}
