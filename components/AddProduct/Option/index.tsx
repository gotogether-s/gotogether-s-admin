import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import Input from '@components/Input'
import OptionList from './OptionList'
import style from './Option.module.scss'

const Option = ({ optionIndex }) => {
  const optionDtoListNameProps = {
    label: '옵션 이름',
    name: 'optionDtoList',
    subName: 'name',
    placeholder: '옵션 이름을 입력하세요',
    optionNumber: optionIndex,
  }

  const [optionLists, setOptionLists] = useState([<OptionList />])

  const AddOptionList = () => {
    setOptionLists([...optionLists, <OptionList />])
  }

  return (
    <div style={{ marginTop: optionIndex && '3rem' }}>
      <h3 className={style['section-subtitle']}>여행옵션 {optionIndex + 1}</h3>
      <Input {...optionDtoListNameProps} />
      {optionLists.map((optionList, index) => {
        return (
          <OptionList
            key={index}
            optionIndex={optionIndex}
          />
        )
      })}
      <div
        className={style['add-option']}
        onClick={AddOptionList}>
        <AddIcon />
        <span>항목 추가하기</span>
      </div>
    </div>
  )
}

export default Option
