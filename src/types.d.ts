export interface Td {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Td, 'id'>
export type TodoTitle = Pick<Td, 'title'>
export type TodoCompleted = Pick<Td, 'completed'>
export type listTodos = Td[]
