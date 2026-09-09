import useToggle from '../hooks/useToggle'

function TaskCard({ title, description }) {
  const [isDone, toggleDone] = useToggle(false)

  return (
    <article className="rounded-2xl border border-violet-200/60 bg-white p-6 shadow-[0_18px_45px_rgba(139,92,246,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/80 hover:shadow-[0_22px_55px_rgba(139,92,246,0.16)] dark:border-violet-900/50 dark:bg-[#241B30] dark:shadow-[0_18px_45px_rgba(0,0,0,0.22)] dark:hover:border-violet-700/60 dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.30)]">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={isDone}
          onChange={toggleDone}
          className="mt-1 h-5 w-5 accent-[#8B5CF6] transition duration-300 dark:accent-[#C084FC]"
        />
        <div className="flex-1">
          <h2
            className={`text-lg font-semibold transition-colors duration-300 ${
              isDone
                ? 'text-[#9B91AA] line-through dark:text-[#7F748F]'
                : 'text-[#29233B] dark:text-[#F5F0FA]'
            }`}
          >
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6D647C] transition-colors duration-500 dark:text-[#B8AFC5]">
            {description}
          </p>
          <p className="mt-4 text-sm font-medium text-[#8B5CF6] transition-colors duration-500 dark:text-[#C084FC]">
            {isDone ? 'Terminee' : 'A faire'}
          </p>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
