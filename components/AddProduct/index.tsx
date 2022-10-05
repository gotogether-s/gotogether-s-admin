import { Container, Box } from '@mui/material'
import Info from './Info'
import style from './AddProduct.module.scss'

const AddProduct = () => {
  return (
    <Box sx={{ padding: '2rem 5rem' }}>
      <h1 className={style['page-title']}>상품추가</h1>
      <Container maxWidth='md'>
        <h2 className={style['section-title']}>여행정보 (상단)</h2>
        <Info />
      </Container>
    </Box>
  )
}

export default AddProduct
