import Input from '@components/Input'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { useRouter } from 'next/router'

const Summary = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const regionProps = {
    label: translate['지역'],
    name: 'region',
    placeholder: translate['지역을 입력해주세요'],
  }

  const pointsProps = {
    label: translate['특징'],
    name: 'points',
    placeholder: translate['특징을 입력하세요'],
  }

  const airportProps = {
    label: translate['항공'],
    name: 'airport',
    placeholder: translate['항공을 입력하세요'],
  }

  return (
    <div className='addproduct-input-list'>
      <Input {...regionProps} />
      <Input {...pointsProps} />
      <Input {...airportProps} />
    </div>
  )
}

export default Summary
