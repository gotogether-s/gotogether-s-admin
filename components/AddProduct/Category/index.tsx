import CheckBox from '@components/CheckBox'
import style from './Category.module.scss'

const agesProps = {
  label: '연령대 그룹',
  name: 'ages',
  values: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
}

const Category = () => {
  return (
    <>
      <CheckBox {...agesProps} />
    </>
  )
}

export default Category
