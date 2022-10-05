import AddIcon from '@mui/icons-material/Add'
import { Container, Box } from '@mui/material'
import Info from './Info'
import style from './AddProduct.module.scss'

const AddProduct = () => {
  return (
    <Box sx={{ padding: '2rem 5rem' }}>
      <h1 className={style['page-title']}>상품추가</h1>
      <Container maxWidth='md'>
        <section className={style['section']}>
          <h2 className={style['section-title']}>여행정보 (상단)</h2>
          <Info />
        </section>
        <section className={style['section']}>
          <div className={style['flex-wrapper']}>
            <h2 className={style['section-title']}>여행옵션</h2>
            <div className={style['add-option']}>
              <AddIcon />
              <span>여행옵션 추가하기</span>
            </div>
          </div>
        </section>
      </Container>
    </Box>
  )
}

export default AddProduct
