import { type listTodos, type TodoId, type Td } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id, completed }: Pick<Td, 'id' | 'completed'>) => void
  onRenameTodo: ({ id, title }: { id: string, title: string }) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onCompletedTodo,
  onRenameTodo
}: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onCompletedTodo={onCompletedTodo}
            onRemoveTodo={onRemoveTodo}
            onRenameTodo={(newTitle: { id: string, title: string }) => {
              onRenameTodo({ id: todo.id, title: newTitle.title })
            }}
          />
        </li>
      ))}
    </ul>
  )
}
