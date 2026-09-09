import { useEffect, useState } from 'react'

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function Timer({ buttonClassName }) {
  const [minutes, setMinutes] = useState(25)
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return undefined
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((currentSeconds) => {
        if (currentSeconds <= 1) {
          setIsRunning(false)
          return 0
        }

        return currentSeconds - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  function handleMinutesChange(event) {
    const nextMinutes = Number(event.target.value)
    setMinutes(nextMinutes)
    setSecondsLeft(Math.max(0, nextMinutes) * 60)
    setIsRunning(false)
  }

  function startTimer() {
    if (secondsLeft > 0) {
      setIsRunning(true)
    }
  }

  function resetTimer() {
    setIsRunning(false)
    setSecondsLeft(Math.max(0, minutes) * 60)
  }

  return (
    <section className="mt-8 border-t border-[#29233B]/15 pt-6 text-[#29233B] dark:border-white/20 dark:text-[#F5F0FA]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <label className="text-sm font-medium text-[#554B63] dark:text-[#E9D5FF]">
          Minutes
          <input
            type="number"
            min="1"
            value={minutes}
            onChange={handleMinutesChange}
            className="mt-2 block w-32 rounded-lg border border-[#29233B]/20 bg-white/80 px-3 py-2 text-base text-[#29233B] outline-none transition focus:ring-2 focus:ring-current/30 dark:border-white/25 dark:bg-white/10 dark:text-[#F5F0FA]"
          />
        </label>

        <p className="text-5xl font-bold tabular-nums text-[#29233B] dark:text-[#F5F0FA]">
          {formatTime(secondsLeft)}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={startTimer}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#17121F] ${buttonClassName}`}
        >
          Start
        </button>
        <button
          type="button"
          onClick={() => setIsRunning(false)}
          className="rounded-lg border border-[#29233B]/20 px-4 py-2 text-sm font-semibold text-[#29233B] transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current/30 focus:ring-offset-2 focus:ring-offset-white dark:border-white/25 dark:text-[#F5F0FA] dark:hover:bg-white/10 dark:focus:ring-offset-[#17121F]"
        >
          Pause
        </button>
        <button
          type="button"
          onClick={resetTimer}
          className="rounded-lg border border-[#29233B]/20 px-4 py-2 text-sm font-semibold text-[#29233B] transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current/30 focus:ring-offset-2 focus:ring-offset-white dark:border-white/25 dark:text-[#F5F0FA] dark:hover:bg-white/10 dark:focus:ring-offset-[#17121F]"
        >
          Reset
        </button>
      </div>
    </section>
  )
}

export default Timer
