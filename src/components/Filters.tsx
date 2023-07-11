import { type TODO_FILTERS, FILTER_BUTTONS, type FilterKeys } from '../consts'

interface Props {
  onFileterChange: (filter: FilterKeys) => void
  filterSelected: FilterKeys
}
export const Filters: React.FC<Props> = ({
  filterSelected,
  onFileterChange
}: Props) => {
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = filterSelected === key
        const classname = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={classname}
              onClick={(event) => {
                event.preventDefault()
                onFileterChange(key as FilterKeys)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
