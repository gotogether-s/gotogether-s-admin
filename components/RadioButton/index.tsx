import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { optionUpdate, update } from '@store/addProductSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const RadioButton = props => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const { label, name, optionDtoList, optionIndex, values } = props

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const updateAddProductStateFromRadio = e => {
    const { name, value } = e.target
    setValue(value)

    if (optionDtoList) {
      value === '필수옵션'
        ? dispatch(optionUpdate({ name, value: true, optionIndex }))
        : dispatch(optionUpdate({ name, value: false, optionIndex }))
    } else {
      dispatch(update({ name, value }))
    }
  }

  return (
    <div>
      <div className='label'>{label}</div>
      <RadioGroup
        row
        name={name}
        value={value}
        onChange={updateAddProductStateFromRadio}>
        {values.map((value, index) => (
          <FormControlLabel
            key={index}
            value={value}
            label={translate[value]}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </div>
  )
}

export default RadioButton
