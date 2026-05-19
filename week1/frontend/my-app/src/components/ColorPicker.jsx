// ColorPicker.jsx — Task 7: 4 color buttons change a preview box
import { useState } from 'react'

const COLORS = [
  { label: 'Indigo', value: '#6366f1' },
  { label: 'Rose',   value: '#f43f5e' },
  { label: 'Emerald', value: '#10b981' },
  { label: 'Amber',  value: '#f59e0b' },
]

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value)

  return (
    <div className="card p-5 space-y-4">
      <h3 className="font-semibold text-slate-700 dark:text-slate-200">Color Picker</h3>

      <div
        className="w-full h-20 rounded-xl transition-colors duration-300 shadow-inner"
        style={{ backgroundColor: selectedColor }}
      />

      <div className="flex gap-2 flex-wrap">
        {COLORS.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
            title={color.label}
            className={`w-9 h-9 rounded-full border-4 transition-transform hover:scale-110 ${
              selectedColor === color.value
                ? 'border-slate-800 dark:border-white scale-110'
                : 'border-transparent'
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>

      <p className="text-xs font-mono text-slate-400">{selectedColor}</p>
    </div>
  )
}
