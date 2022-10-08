import CheckBox from '@components/CheckBox'
import Input from '@components/Input'
import style from './Info.module.scss'

const thumbnailProps = {
  label: '썸네일',
  name: 'thumbnail',
  placeholder: '이미지 url을 입력해주세요',
}

const productNameProps = {
  label: '여행 상품 제목',
  name: 'productName',
  placeholder: '제목을 입력하세요',
}

const basicPriceProps = {
  label: '가격',
  name: 'basicPrice',
  placeholder: '숫자만 입력하세요',
  price: true,
}

const basicPriceInquiryProps = {
  label: null,
  name: 'basicPrice',
  values: ['가격문의'],
}

const Info = () => {
  return (
    <>
      <Input {...thumbnailProps} />
      <Input {...productNameProps} />
      <div className={style['price-wrapper']}>
        <Input {...basicPriceProps} />
        <div className={style['price-inquiry']}>
          <CheckBox {...basicPriceInquiryProps} />
        </div>
      </div>
    </>
  )
}

export default Info
