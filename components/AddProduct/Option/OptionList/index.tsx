import Input from '@components/Input'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { useRouter } from 'next/router'
import style from './OptionList.module.scss'

const OptionList = ({ optionIndex }: { optionIndex: number }) => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const optionDtoListValueProps = {
    label: translate['항목'],
    name: 'value',
    placeholder: translate['항목을 입력하세요'],
    optionDtoList: true,
    optionIndex: optionIndex,
  }

  const optionDtoListAdditionalProps = {
    label: translate['추가금액 (선택사항)'],
    name: 'additional',
    placeholder: translate['숫자만 입력하세요'],
    price: true,
    optionDtoList: true,
    optionIndex: optionIndex,
  }

  return (
    <div className={style['flex-wrapper']}>
      <Input {...optionDtoListValueProps} />
      <Input {...optionDtoListAdditionalProps} />
    </div>
  )
}

export default OptionList
