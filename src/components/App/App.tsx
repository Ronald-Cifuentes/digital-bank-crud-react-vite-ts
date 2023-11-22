import { FC, useEffect, useRef, useState } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import { Row } from '../Table/interfaces'
import SectionHome from '../SectionHome'
import { serviceGet } from '../../services'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  const ref = useRef(0)
  const [data, setData] = useState<Row[]>([])
  useEffect(() => {
    if (!ref.current) {
      ref.current += 1
      serviceGet(String(process.env.VITE_URL_BASE), setData)
    }
  }, [])
  return (
    <AppContainer data-testid={dataTestId}>
      {data.length > 0 && <SectionHome initRows={data} />}
    </AppContainer>
  )
}

export default App
