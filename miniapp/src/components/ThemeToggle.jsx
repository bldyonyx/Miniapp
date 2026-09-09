import useTheme from '../context/useTheme'

function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme()
  const themeClasses =
    className ||
    'border-violet-300/70 bg-[#8B5CF6] text-white shadow-[0_12px_28px_rgba(139,92,246,0.26)] hover:bg-[#7C3AED] hover:shadow-[0_16px_34px_rgba(139,92,246,0.34)] focus:ring-[#8B5CF6]/40 focus:ring-offset-[#F5F3FF] dark:border-violet-500/30 dark:bg-[#C084FC] dark:text-[#17121F] dark:shadow-[0_12px_28px_rgba(192,132,252,0.18)] dark:hover:bg-[#D8B4FE] dark:focus:ring-[#C084FC]/40 dark:focus:ring-offset-[#17121F]'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${themeClasses}`}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle
