function FocusModeCard({ emoji, name, description, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`group rounded-2xl border p-6 text-left shadow-[0_18px_45px_rgba(139,92,246,0.10)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/40 focus:ring-offset-2 focus:ring-offset-[#F5F3FF] dark:focus:ring-[#C084FC]/40 dark:focus:ring-offset-[#17121F] ${
        isSelected
          ? 'border-[#8B5CF6] bg-violet-50 ring-2 ring-[#8B5CF6]/45 shadow-[0_24px_58px_rgba(139,92,246,0.22)] dark:border-[#C084FC] dark:bg-[#322044] dark:ring-[#C084FC]/45 dark:shadow-[0_24px_58px_rgba(0,0,0,0.34)]'
          : 'border-violet-200/60 bg-white hover:border-violet-300/80 hover:shadow-[0_22px_55px_rgba(139,92,246,0.16)] dark:border-violet-900/50 dark:bg-[#241B30] dark:shadow-[0_18px_45px_rgba(0,0,0,0.22)] dark:hover:border-violet-700/60 dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.30)]'
      }`}
    >
      <span className="block text-4xl" aria-hidden="true">
        {emoji}
      </span>
      <h2 className="mt-5 text-lg font-semibold text-[#29233B] transition-colors duration-300 dark:text-[#F5F0FA]">
        {name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#6D647C] transition-colors duration-500 dark:text-[#B8AFC5]">
        {description}
      </p>
    </button>
  )
}

export default FocusModeCard
