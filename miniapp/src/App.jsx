import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FocusModeCard from './components/FocusModeCard'
import useTheme from './context/useTheme'
import focusModes from './data/focusModes'
import ModePage from './pages/ModePage'

function HomePage() {
  const { theme } = useTheme()
  const [selectedModeId, setSelectedModeId] = useState('study')
  const selectedMode = focusModes.find((mode) => mode.id === selectedModeId)

  return (
    <main className={theme}>
      <div className={`min-h-screen px-5 py-10 transition-colors duration-500 sm:px-6 sm:py-12 ${selectedMode.homeTheme}`}>
        <div className="mx-auto max-w-3xl">
          <Header toggleClassName={selectedMode.toggle} />

          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusModes.map((mode) => (
              <FocusModeCard
                key={mode.id}
                emoji={mode.icon}
                name={mode.name}
                description={mode.description}
                isSelected={selectedModeId === mode.id}
                onSelect={() => setSelectedModeId(mode.id)}
                className={mode.card}
                selectedClassName={mode.selectedCard}
                idleClassName={mode.idleCard}
              />
            ))}
          </section>

          <Link
            to={selectedMode.path}
            className={`mt-6 block rounded-2xl border p-5 shadow-[0_18px_45px_rgba(139,92,246,0.10)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-current/30 focus:ring-offset-2 focus:ring-offset-[#F5F3FF] dark:focus:ring-offset-[#17121F] ${selectedMode.accent}`}
          >
            <h2 className="text-lg font-semibold">{selectedMode.summaryTitle}</h2>
            <p className="mt-2 text-sm leading-6 opacity-80">{selectedMode.summaryText}</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study" element={<ModePage modeId="study" />} />
      <Route path="/creative" element={<ModePage modeId="creative" />} />
      <Route path="/chill" element={<ModePage modeId="chill" />} />
    </Routes>
  )
}

export default App
