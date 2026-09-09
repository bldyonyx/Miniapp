import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="flex flex-col gap-5 border-b border-violet-200/70 pb-7 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between dark:border-violet-900/60">
      <div>
        <h1 className="text-3xl font-bold text-[#29233B] transition-colors duration-500 dark:text-[#F5F0FA]">
          Focus Mode
        </h1>
        <p className="mt-2 text-sm text-[#6D647C] transition-colors duration-500 dark:text-[#B8AFC5]">
          Une petite application React avec modes et theme.
        </p>
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header
