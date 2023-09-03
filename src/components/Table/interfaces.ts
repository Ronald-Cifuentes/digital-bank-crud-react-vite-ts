export interface Row {
  user: string
  birthday: string
  gender: string
}

export type TableProps = Partial<{
  dataTestId: string
  rows: Row[]
  deleteRow: (item: number) => void
  editRow: (item: number) => void
}>
