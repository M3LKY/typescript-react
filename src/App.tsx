import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Td, type TodoTitle } from './types'
import { TODO_FILTERS, type FilterKeys } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
const mocktodos = [
  {
    id: '1',
    title: 'Learn typescript',
    completed: true
  },
  {
    id: '2',
    title: 'Learn React',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocktodos)
  const [filterSelected, setFilterSelected] = useState<FilterKeys>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<Td, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterKeys): void => {
    setFilterSelected(filter)
  }
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filterTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleRenameTodo = ({ id, title }: { id: string, title: string }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header inAddTodo={handleAddTodo} />
      <Todos
        onCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filterTodos}
        onRenameTodo={handleRenameTodo}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
