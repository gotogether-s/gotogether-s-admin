import CheckBox from '@components/CheckBox'
import Input from '@components/Input'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { useRouter } from 'next/router'
import style from './Info.module.scss'

const Info = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const thumbnailProps = {
    label: translate['썸네일'],
    name: 'thumbnail',
    placeholder: translate['이미지 url을 입력해주세요'],
  }

  const productNameProps = {
    label: translate['여행 상품 제목'],
    name: 'productName',
    placeholder: translate['제목을 입력하세요'],
  }

  const countryProps = {
    label: translate['국가/도시'],
    name: 'country',
    placeholder: translate['국가 또는 도시를 입력하세요'],
  }

  const basicPriceProps = {
    label: translate['가격'],
    name: 'basicPrice',
    placeholder: translate['숫자만 입력하세요'],
    price: true,
  }

  const basicPriceInquiryProps = {
    label: null,
    name: 'basicPrice',
    values: ['가격문의'],
  }

  return (
    <div className='addproduct-input-list'>
      <Input {...thumbnailProps} />
      <Input {...productNameProps} />
      <Input {...countryProps} />
      <div className={style['price-wrapper']}>
        <Input {...basicPriceProps} />
        <div className={style['price-inquiry']}>
          <CheckBox {...basicPriceInquiryProps} />
        </div>
      </div>
    </div>
  )
}

export default Info
