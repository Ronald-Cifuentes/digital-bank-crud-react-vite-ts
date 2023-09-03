import { FC, useState } from 'react'
import { AppProps } from './interfaces'
import { AppContainer, Btn } from './App.styled'

import 'swiper/swiper-bundle.css'
import Table from '../Table'
import Modal from '../Modal'
import { Row } from '../Table/interfaces'

const initRows: Row[] = [
  {
    user: 'Andres',
    birthday: '1990-10-02',
    gender: 'male',
  },
  {
    user: 'Yohana',
    birthday: '1990-10-02',
    gender: 'female',
  },
  {
    user: 'Nikita',
    birthday: '1990-10-02',
    gender: 'not-defined',
  },
]

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [rows, setRows] = useState(initRows)
  const [rowToEdit, setRowToEdit] = useState<number | null>(null)

  const handleDeleteRow = (targetIndex: number) => {
    setRows(rows.filter((_, idx: number) => idx !== targetIndex))
  }

  const handleEditRow = (idx: number) => {
    setRowToEdit(idx)

    setModalOpen(true)
  }

  const handleSubmit = (newRow: Row) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow: Row, idx: number) => {
            if (idx !== rowToEdit) return currRow

            return newRow
          })
        )
  }

  return (
    <AppContainer data-testid={dataTestId}>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <Btn onClick={() => setModalOpen(true)}>Add</Btn>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false)
            setRowToEdit(null)
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </AppContainer>
  )
}

export default App
