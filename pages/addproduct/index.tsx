import axios from 'axios'
import AddIcon from '@mui/icons-material/Add'
import { Container, Box, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Info from '@components/AddProduct/Info'
import Option from '@components/AddProduct/Option'
import Summary from '@components/AddProduct/Summary'
import Detail from '@components/AddProduct/Detail'
import Category from '@components/AddProduct/Category'
import style from './AddProduct.module.scss'

const AddProduct = () => {
  const [options, setOptions] = useState([<Option />])

  const AddOption = () => {
    setOptions([...options, <Option />])
  }

  const [addProductResponseMessage, setAddProductResponseMessage] = useState('')

  const addProduct = useSelector(state => {
    return state.addProduct
  })
  console.log(addProduct)

  const validateAddProduct = () => {
    const AddProductListsArray = Object.values(addProduct)

    const emptyStringValidation = AddProductListsArray.includes('')
    const nullValidation = AddProductListsArray.includes(null)
    const requiredInputIsEmpty = emptyStringValidation || nullValidation

    requiredInputIsEmpty &&
      setAddProductResponseMessage(
        '여행옵션을 제외한 모든 정보를 필수적으로 입력해주세요!'
      )
    return requiredInputIsEmpty
  }

  const router = useRouter()

  const requestAddProduct = async () => {
    if (validateAddProduct()) return
    try {
      const accessToken = localStorage.getItem('accessToken')
      console.log('accessToken:', accessToken)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/products`,
        addProduct,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      console.log('res: ', res)
      if (res.data.statusCode === 200) {
        setAddProductResponseMessage('상품등록을 완료했습니다!')
        router.reload()
      } else if (res.data.statusCode === 400) {
        setAddProductResponseMessage('상품등록을 실패했습니다!')
      }
    } catch (e) {
      console.log('e: ', e)
      setAddProductResponseMessage('상품등록 요청에 실패했습니다!')
    }
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
          {options.map((option, optionIndex) => {
            return (
              <Option
                key={optionIndex}
                optionIndex={optionIndex}
              />
            )
          })}
        </section>
        <section className={style['section']}>
          <h2 className={style['section-title']}>여행 상세정보 요약본</h2>
          <Summary />
        </section>
        <section className={style['section']}>
          <div className={style['detail-title-wrapper']}>
            <h2 className={style['section-title']}>여행 상세정보</h2>
            <span>(이미지, 포함 및 불포함 사항, 상세일정)</span>
          </div>
          <Detail />
        </section>
        <section className={style['section']}>
          <h2 className={style['section-title']}>여행 상품 카테고리</h2>
          <Category />
        </section>
        <div className={style['button-wrapper']}>
          <Button
            variant='contained'
            onClick={requestAddProduct}>
            새 상품 등록하기
          </Button>
        </div>
        <p
          className={
            addProductResponseMessage !== '상품등록을 완료했습니다!'
              ? style['error-message']
              : style['success-message']
          }
          style={{
            visibility: addProductResponseMessage !== '' ? 'visible' : 'hidden',
          }}>
          {addProductResponseMessage}
        </p>
      </Container>
    </Box>
  )
}

export default AddProduct
