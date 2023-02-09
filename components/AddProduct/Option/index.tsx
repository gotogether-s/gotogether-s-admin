import Input from '@components/Input'
import RadioButton from '@components/RadioButton'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './Option.module.scss'
import OptionList from './OptionList'

const Option = ({ optionIndex }) => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const optionDtoListNameProps = {
    label: translate['옵션 이름'],
    name: 'name',
    placeholder: translate['옵션 이름을 입력하세요'],
    optionDtoList: true,
    optionIndex: optionIndex,
  }

  const optionDtoListRequiredProps = {
    label: null,
    name: 'required',
    values: ['필수옵션', '선택옵션'],
    optionDtoList: true,
    optionIndex: optionIndex,
  }

  const [optionLists, setOptionLists] = useState([<OptionList />])

  const AddOptionList = () => {
    setOptionLists([...optionLists, <OptionList />])
  }

  const deleteOptionList = optionListIndex => {
    setOptionLists(
      optionLists.filter((optionList, index) => index !== optionListIndex)
    )
  }

  return (
    <div
      className='addproduct-input-list'
      style={{ marginTop: optionIndex && '3rem' }}>
      <div className={style['section-subtitle-wrapper']}>
        <h3>
          {translate['여행옵션']} {optionIndex + 1}
        </h3>
        <RadioButton {...optionDtoListRequiredProps} />
      </div>
      <Input {...optionDtoListNameProps} />
      {optionLists.map((optionList, optionListIndex) => {
        return (
          <div
            key={optionListIndex}
            className={style['option-list']}>
            <OptionList optionIndex={optionIndex} />
            <CloseIcon
              className={style['delete']}
              onClick={() => deleteOptionList(optionListIndex)}
            />
          </div>
        )
      })}
      <div
        className={style['add-option']}
        onClick={AddOptionList}>
        <AddIcon />
        <span>{translate['항목 추가하기']}</span>
      </div>
    </div>
  )
}

export default Option
