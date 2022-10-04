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

const Info = () => {
  return (
    <>
      <h2 className={style['section-title']}>여행정보 (상단)</h2>
      <Input {...thumbnailProps} />
      <Input {...productNameProps} />
    </>
  )
}

export default Info
