// App.jsx — Main app: Tasks 6–10 combined
import { useState, useEffect } from 'react'

// Layout
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'

// Task 6
import ProfileCard from './components/ProfileCard/ProfileCard'
import ItemList from './components/ItemList'

// Task 7
import Counter from './components/Counter'
import ToggleCard from './components/ToggleCard'
import ColorPicker from './components/ColorPicker'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

// Task 9
import RegistrationForm from './components/Forms/RegistrationForm'
import LivePreviewForm from './components/Forms/LivePreviewForm'

// Task 10
import TeamDirectory from './components/TeamDirectory/TeamDirectory'

// ─── Data ────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    id: 1,
    name: 'Alice Mutoni',
    role: 'Engineering',
    bio: 'Full-stack developer passionate about clean APIs and fast UIs.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Bob Habimana',
    role: 'Design',
    bio: 'Crafting pixel-perfect interfaces with a love for motion design.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Clara Uwase',
    role: 'Product',
    bio: 'Bridging user needs and business goals through sharp product thinking.',
    avatar: null,
  },
]

const LIST_ITEMS = [
  { id: 1, label: 'Build ProfileCard component' },
  { id: 2, label: 'Add Tailwind dark mode' },
  { id: 3, label: 'Lift state to parent' },
]

// ─── Section Wrapper ─────────────────────────────────────────────────────────

function Section({ title, description, children }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function ProfilesSection() {
  return (
    <Section
      title="👤 Profiles"
      description="Task 6 — ProfileCard with Avatar, Badge, Bio sub-components + ItemList with empty state"
    >
      <div className="grid sm:grid-cols-1 gap-3">
        {PROFILES.map((p) => (
          <ProfileCard key={p.id} {...p} />
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
          Item List (with items)
        </h3>
        <ItemList items={LIST_ITEMS} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
          Item List (empty state)
        </h3>
        <ItemList items={[]} />
      </div>
    </Section>
  )
}

function StateSection() {
  return (
    <Section
      title="🧩 State Management"
      description="Task 7 — Counter (no negatives), ToggleCard, ColorPicker, ShoppingCart with lifted state"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <Counter />
        <ToggleCard
          title="What is React?"
          content="React is a JavaScript library for building user interfaces using reusable components and a virtual DOM."
        />
        <ColorPicker />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
          Shopping Cart (shared state)
        </h3>
        <ShoppingCart />
      </div>
    </Section>
  )
}

function StylingSection() {
  return (
    <Section
      title="🎨 Styling & Layout"
      description="Task 8 — Responsive 3-column card grid, sidebar (hidden on mobile), dark mode toggle"
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">
        The sidebar on the left is <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded text-xs">hidden md:flex</span> — resize the window to see it disappear on mobile.
        The dark mode toggle in the header persists your choice in <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded text-xs">localStorage</span>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Responsive Grid', 'Tailwind Dark Mode', 'Sidebar Layout'].map((label, i) => (
          <div key={i} className="card p-5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-lg">
              {['📐', '🌙', '📋'][i]}
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{label}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Implemented with Tailwind CSS responsive breakpoints and utility classes.
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function FormsSection() {
  return (
    <Section
      title="📝 Forms"
      description="Task 9 — Registration form with validation + live preview form updating on keystroke"
    >
      <RegistrationForm />
      <LivePreviewForm />
    </Section>
  )
}

function TeamSection() {
  return (
    <Section
      title="👥 Team Directory"
      description="Task 10 — Search, add members, 5 components: App, SearchBar, MemberCard, MemberList, AddMemberForm"
    >
      <TeamDirectory />
    </Section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

const SECTIONS = {
  Profiles: <ProfilesSection />,
  State: <StateSection />,
  Styling: <StylingSection />,
  Forms: <FormsSection />,
  'Team Directory': <TeamSection />,
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Task 8: persist dark mode in localStorage
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [activeSection, setActiveSection] = useState('Profiles')

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header isDark={isDark} onToggleDark={() => setIsDark((d) => !d)} />

      <div className="max-w-5xl mx-auto px-4 py-6 flex gap-6">
        {/* Task 8: sidebar hidden on mobile */}
        <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

        {/* Main content */}
        <main className="flex-1 min-w-0 space-y-8">
          {/* Mobile nav tabs */}
          <div className="flex md:hidden gap-1 overflow-x-auto pb-1">
            {Object.keys(SECTIONS).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium whitespace-nowrap transition ${
                  activeSection === key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {SECTIONS[activeSection]}
        </main>
      </div>
    </div>
  )
}
