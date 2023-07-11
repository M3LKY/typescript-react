import { type Td, type TodoId } from '../types'
import { useState } from 'react'

interface Props extends Td {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id, completed }: Pick<Td, 'id' | 'completed'>) => void
  onRenameTodo: ({ id, title }: Pick<Td, 'id' | 'title'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onCompletedTodo,
  onRenameTodo
}: Props) => {
  const [edit, setEdit] = useState(false)
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onCompletedTodo({ id, completed: event.target.checked })
  }
  const handleReanmeTodo = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onRenameTodo({ id, title: event.target.value })
  }
  const handleSubmitRenameTodo = (
    event: React.FocusEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()
    setEdit(false)
  }
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      {!edit && (
        <label
          onDoubleClick={() => {
            setEdit(true)
          }}
        >
          {title}
        </label>
      )}
      {edit && (
        <form onSubmit={handleSubmitRenameTodo}>
          <input
            className="new-todo"
            type="text"
            value={title}
            onChange={handleReanmeTodo}
          />
        </form>
      )}

      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
