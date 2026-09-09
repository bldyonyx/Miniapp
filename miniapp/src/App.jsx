import Header from './components/Header'
import TaskCard from './components/TaskCard'
import useTheme from './context/useTheme'

const tasks = [
  {
    id: 1,
    title: 'Reviser React',
    description: 'Comprendre les composants et les props.',
  },
  {
    id: 2,
    title: 'Faire le TP',
    description: 'Utiliser un hook personnalise et le Context.',
  },
  {
    id: 3,
    title: 'Tester l\'application',
    description: 'Verifier que les boutons fonctionnent bien.',
  },
]

function App() {
  const { theme } = useTheme()

  return (
    <main className={theme}>
      <div className="min-h-screen bg-[#F5F3FF] px-5 py-10 transition-colors duration-500 dark:bg-[#17121F] sm:px-6 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <Header />

          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
              />
            ))}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
