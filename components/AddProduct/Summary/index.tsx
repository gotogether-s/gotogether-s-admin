import Input from '@components/Input'
import style from './Summary.module.scss'

const regionProps = {
  label: '지역',
  name: 'region',
  placeholder: '지역을 입력해주세요',
}

const pointsProps = {
  label: '특징',
  name: 'points',
  placeholder: '특징을 입력하세요',
}

const airportProps = {
  label: '항공',
  name: 'airport',
  placeholder: '항공을 입력하세요',
}

const Summary = () => {
  return (
    <>
      <Input {...regionProps} />
      <Input {...pointsProps} />
      <Input {...airportProps} />
    </>
  )
}

export default Summary
