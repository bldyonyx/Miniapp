import useToggle from '../hooks/useToggle'
import ThemeContext from './ThemeContext'

export function ThemeProvider({ children }) {
  const [isDark, toggleTheme] = useToggle(false)
  const theme = isDark ? 'dark' : 'light'

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
