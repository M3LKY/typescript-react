import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'
interface Props {
  inAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ inAddTodo }: Props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <CreateTodo saveTodo={inAddTodo} />
    </header>
  )
}
