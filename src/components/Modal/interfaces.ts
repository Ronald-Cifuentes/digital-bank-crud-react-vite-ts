import { Row } from '../Table/interfaces'

export interface ModalProps {
  dataTestId?: string
  closeModal: () => void
  onSubmit: (newRow: Row) => void
  defaultValue: false | Row
}
