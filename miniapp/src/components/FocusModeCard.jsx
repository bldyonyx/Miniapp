function FocusModeCard({ emoji, name, description, isSelected, onSelect, className, selectedClassName, idleClassName }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`group rounded-2xl border p-6 text-left shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-offset-2 dark:shadow-[0_18px_45px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.30)] ${className} ${
        isSelected
          ? selectedClassName
          : idleClassName
      }`}
    >
      <span className="block text-4xl" aria-hidden="true">
        {emoji}
      </span>
      <h2 className="mt-5 text-lg font-semibold transition-colors duration-300">
        {name}
      </h2>
      <p className="mt-2 text-sm leading-6 opacity-75 transition-colors duration-500">
        {description}
      </p>
    </button>
  )
}

export default FocusModeCard
