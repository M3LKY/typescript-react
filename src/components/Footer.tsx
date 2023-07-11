import { Filters } from './Filters'
import { type FilterKeys } from '../consts'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterKeys
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterKeys) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas Pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFileterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className={'clear-completed'} onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
