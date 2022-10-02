import { Container } from '@mui/system'
import style from './Layout.module.scss'

const Layout = ({ children }: any) => {
  return (
    <>
      <Container maxWidth={false}>
        <div>{children}</div>
      </Container>
    </>
  )
}

export default Layout
