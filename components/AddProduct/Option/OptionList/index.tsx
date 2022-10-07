import Input from '@components/Input'
import style from './OptionList.module.scss'

const OptionList = ({ optionIndex }: { optionIndex: number }) => {
  const optionDtoListValueProps = {
    label: '항목',
    name: 'value',
    placeholder: '항목을 입력하세요',
    optionDtoList: true,
    optionIndex: optionIndex,
  }

  const optionDtoListAdditionalProps = {
    label: '추가금액 (선택사항)',
    name: 'additional',
    placeholder: '숫자만 입력하세요',
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
