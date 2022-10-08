import CheckBox from '@components/CheckBox'
import DropDown from '@components/DropDown'
import style from './Category.module.scss'

const agesProps = {
  label: '연령대 그룹',
  name: 'ages',
  values: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
}

const continentProps = {
  label: '대륙',
  name: 'continent',
  values: [
    '괌/사이판/하와이',
    '동남아시아',
    '동남아프리카',
    '대만',
    '북미',
    '북아프리카/중동',
    '인도/주변국',
    '유럽',
    '일본',
    '중국',
    '중남미',
    '코카서스',
    '호주/뉴질랜드',
  ],
  placeholder: '대륙을 선택해주세요',
}

const Category = () => {
  return (
    <>
      <DropDown {...continentProps} />
      <CheckBox {...agesProps} />
    </>
  )
}

export default Category
