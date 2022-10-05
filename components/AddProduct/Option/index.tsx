import AddIcon from '@mui/icons-material/Add'
import Input from '@components/Input'
import style from './Option.module.scss'

const Option = ({ index }) => {
  const optionDtoListNameProps = {
    label: '옵션 이름',
    name: 'optionDtoList',
    subName: 'name',
    placeholder: '옵션 이름을 입력하세요',
    optionNumber: index,
  }

  const optionDtoListValueProps = {
    label: '항목',
    name: 'optionDtoList',
    subName: 'value',
    placeholder: '항목을 입력하세요',
    optionNumber: index,
  }

  const optionDtoListAdditionalProps = {
    label: '추가금액 (선택사항)',
    name: 'optionDtoList',
    subName: 'additional',
    placeholder: '숫자만 입력하세요',
    price: true,
    optionNumber: index,
  }

  const AddOption = () => {
    // Add new option here...
  }

  return (
    <div style={{ marginTop: index && '3rem' }}>
      <h3 className={style['section-subtitle']}>여행옵션 {index + 1}</h3>
      <Input {...optionDtoListNameProps} />
      <div className={style['flex-wrapper']}>
        <Input {...optionDtoListValueProps} />
        <Input {...optionDtoListAdditionalProps} />
      </div>
      <div
        className={style['add-option']}
        onClick={AddOption}>
        <AddIcon />
        <span>항목 추가하기</span>
      </div>
    </div>
  )
}

export default Option
