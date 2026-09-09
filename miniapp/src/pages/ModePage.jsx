import { Link, Navigate } from 'react-router-dom'
import Timer from '../components/Timer'
import ThemeToggle from '../components/ThemeToggle'
import { getFocusMode } from '../data/focusModes'
import useTheme from '../context/useTheme'

function ModePage({ modeId }) {
  const { theme } = useTheme()
  const mode = getFocusMode(modeId)

  if (!mode) {
    return <Navigate to="/" replace />
  }

  return (
    <main className={theme}>
      <div className={`min-h-screen px-5 py-10 transition-colors duration-500 sm:px-6 sm:py-12 ${mode.pageTheme}`}>
        <div className="mx-auto max-w-2xl">
          <header className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-lg border border-current/20 px-3 py-2 text-sm font-semibold text-[#29233B] transition hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-current/30 dark:text-[#F5F0FA] dark:hover:bg-white/10"
            >
              Back
            </Link>
            <ThemeToggle className={mode.toggle} />
          </header>

          <section className={`mt-8 rounded-2xl border p-6 text-[#29233B] shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur dark:text-[#F5F0FA] ${mode.panel}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#554B63] dark:text-[#E9D5FF]">
              {mode.icon} {mode.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-[#29233B] dark:text-[#F5F0FA]">
              {mode.title} {mode.icon}
            </h1>
            <p className="mt-4 text-base leading-7 text-[#554B63] dark:text-[#D8D0E2]">
              {mode.pageText}
            </p>

            <Timer buttonClassName={mode.button} />
          </section>
        </div>
      </div>
    </main>
  )
}

export default ModePage
