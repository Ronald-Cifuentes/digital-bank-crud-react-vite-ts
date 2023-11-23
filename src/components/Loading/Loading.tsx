import { FC } from 'react'
import { LoadingContainer } from './Loading.styled'
import { LoadingProps } from './interfaces'
import { GridLoader } from 'react-spinners'

const Loading: FC<LoadingProps> = ({ dataTestId = 'loading' }) => {
  return (
    <LoadingContainer data-testid={dataTestId}>
      <GridLoader color='#36d7b7' />
    </LoadingContainer>
  )
}

export default Loading
