import CheckBox from '@components/CheckBox'
import DropDown from '@components/DropDown'
import RadioButton from '@components/RadioButton'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const agesProps = {
    label: translate['연령대 그룹'],
    name: 'ages',
    values: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
  }

  const continentProps = {
    label: translate['대륙'],
    name: 'continent',
    values: [
      '괌,사이판,하와이',
      '동남아시아',
      '동남아프리카',
      '대만',
      '북미',
      '북아프리카,중동',
      '인도,주변국',
      '유럽',
      '일본',
      '중국',
      '중남미',
      '중앙아시아',
      '코카서스',
      '호주,뉴질랜드',
    ],
    placeholder: '대륙을 선택해주세요',
  }

  const genderGroupProps = {
    label: translate['그룹 유형'],
    name: 'genderGroup',
    values: ['여자끼리', '남자끼리', '상관 없음'],
  }

  const companionProps = {
    label: translate['동행자의 유형'],
    name: 'companion',
    values: [
      '나홀로 참가',
      '친구나 동료',
      '연인이나 부부',
      '자녀를 동반하는 가족',
      '상관 없음',
    ],
  }

  const religionProps = {
    label: translate['종교적 성향의 그룹'],
    name: 'religion',
    values: ['하나님과 함께하는 여행', '부처님의 발자취를 찾아', '상관 없음'],
  }

  const themeProps = {
    label: translate['여행의 테마'],
    name: 'theme',
    values: [
      '문화탐방',
      '골프여행',
      '리조트 휴양 및 힐링',
      '오지탐험',
      '트레킹여행',
      '봉사활동',
      '성지순례',
      '상관 없음',
    ],
  }

  return (
    <div className='addproduct-input-list category-list'>
      <DropDown {...continentProps} />
      <CheckBox {...agesProps} />
      <RadioButton {...genderGroupProps} />
      <RadioButton {...companionProps} />
      <RadioButton {...religionProps} />
      <RadioButton {...themeProps} />
    </div>
  )
}

export default Category
