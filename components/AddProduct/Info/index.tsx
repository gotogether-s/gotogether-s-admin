import Input from '@components/Input'
import style from './Info.module.scss'

const thumbnailProps = {
  label: '썸네일',
  name: 'thumbnail',
  placeholder: '이미지 url을 입력해주세요',
}

const Info = () => {
  return (
    <>
      <h2 className={style['section-title']}>여행정보 (상단)</h2>
      <Input {...thumbnailProps} />
    </>
  )
}

export default Info
