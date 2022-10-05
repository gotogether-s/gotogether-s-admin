import AddIcon from '@mui/icons-material/Add'
import { Container, Box } from '@mui/material'
import { useState } from 'react'
import Info from './Info'
import Option from './Option'
import style from './AddProduct.module.scss'

const AddProduct = () => {
  const [options, setOptions] = useState([<Option />])

  const AddOption = () => {
    setOptions([...options, <Option />])
  }

  return (
    <Box sx={{ padding: '2rem 5rem' }}>
      <h1 className={style['page-title']}>상품추가</h1>
      <Container maxWidth='md'>
        <section className={style['section']}>
          <h2 className={style['section-title']}>여행정보 (상단)</h2>
          <Info />
        </section>
        <section
          className={style['section']}
          style={{ position: 'relative' }}>
          <h2 className={style['section-title']}>여행옵션</h2>
          <div
            className={style['add-option']}
            onClick={AddOption}>
            <AddIcon />
            <span>여행옵션 추가하기</span>
          </div>
          {options.map((option, index) => {
            return (
              <div
                className={style['option-wrapper']}
                key={index}>
                <Option index={index} />
              </div>
            )
          })}
        </section>
      </Container>
    </Box>
  )
}

export default AddProduct
