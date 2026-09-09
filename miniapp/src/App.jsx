import { useState } from 'react'
import Header from './components/Header'
import FocusModeCard from './components/FocusModeCard'
import useTheme from './context/useTheme'

const focusModes = [
  {
    id: 'study',
    emoji: '📚',
    name: 'Study',
    description: 'Un espace calme pour apprendre, relire et avancer.',
    accent:
      'border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#5B21B6] dark:border-[#A78BFA] dark:bg-[#A78BFA]/15 dark:text-[#DDD6FE]',
    title: 'Ready to focus?',
    text: 'Take a moment to learn and make progress.',
  },
  {
    id: 'creative',
    emoji: '🎨',
    name: 'Creative',
    description: 'Un mode ouvert pour dessiner, ecrire et imaginer.',
    accent:
      'border-[#EC4899] bg-[#EC4899]/10 text-[#BE185D] dark:border-[#F472B6] dark:bg-[#F472B6]/15 dark:text-[#FBCFE8]',
    title: 'Let your ideas flow.',
    text: 'Create, experiment and imagine.',
  },
  {
    id: 'chill',
    emoji: '🌿',
    name: 'Chill',
    description: 'Une ambiance douce pour souffler et ralentir.',
    accent:
      'border-[#22C55E] bg-[#22C55E]/10 text-[#15803D] dark:border-[#4ADE80] dark:bg-[#4ADE80]/15 dark:text-[#BBF7D0]',
    title: 'Time to slow down.',
    text: 'Relax and take a little break.',
  },
]

function App() {
  const { theme } = useTheme()
  const [selectedModeId, setSelectedModeId] = useState('study')
  const selectedMode = focusModes.find((mode) => mode.id === selectedModeId)

  return (
    <main className={theme}>
      <div className="min-h-screen bg-[#F5F3FF] px-5 py-10 transition-colors duration-500 dark:bg-[#17121F] sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <Header />

          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusModes.map((mode) => (
              <FocusModeCard
                key={mode.id}
                emoji={mode.emoji}
                name={mode.name}
                description={mode.description}
                isSelected={selectedModeId === mode.id}
                onSelect={() => setSelectedModeId(mode.id)}
              />
            ))}
          </section>

          <section
            className={`mt-6 rounded-2xl border p-5 shadow-[0_18px_45px_rgba(139,92,246,0.10)] transition-colors duration-300 ${selectedMode.accent}`}
          >
            <h2 className="text-lg font-semibold">{selectedMode.title}</h2>
            <p className="mt-2 text-sm leading-6 opacity-80">{selectedMode.text}</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
