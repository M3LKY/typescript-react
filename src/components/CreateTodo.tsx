import { type TodoTitle } from '../types'
import { useState } from 'react'
interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }: Props) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}
