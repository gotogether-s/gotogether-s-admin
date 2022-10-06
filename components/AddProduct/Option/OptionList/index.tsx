import Input from '@components/Input'
import style from './OptionList.module.scss'

const OptionList = optionIndex => {
  const optionDtoListValueProps = {
    label: '항목',
    name: 'optionDtoList',
    subName: 'value',
    placeholder: '항목을 입력하세요',
    optionNumber: optionIndex,
  }

  const optionDtoListAdditionalProps = {
    label: '추가금액 (선택사항)',
    name: 'optionDtoList',
    subName: 'additional',
    placeholder: '숫자만 입력하세요',
    price: true,
    optionNumber: optionIndex,
  }

  return (
    <div className={style['flex-wrapper']}>
      <Input {...optionDtoListValueProps} />
      <Input {...optionDtoListAdditionalProps} />
    </div>
  )
}

export default OptionList
