import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useDispatch } from 'react-redux'
import { optionUpdate } from '@store/addProductSlice'
import { useState } from 'react'
import style from './RadioButton.module.scss'

const RadioButton = props => {
  const { label, name, optionIndex, values } = props

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const updateAddProductStateFromRadio = e => {
    const { name, value } = e.target
    setValue(value)
    if (value === '필수옵션') {
      dispatch(optionUpdate({ name, value: true, optionIndex }))
    } else if (value === '선택옵션') {
      dispatch(optionUpdate({ name, value: false, optionIndex }))
    } else {
      dispatch(optionUpdate({ name, value, optionIndex }))
    }
  }

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <RadioGroup
        row
        name={name}
        value={value}
        onChange={updateAddProductStateFromRadio}>
        {values.map((value, index) => (
          <FormControlLabel
            key={index}
            value={value}
            label={value}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </div>
  )
}

export default RadioButton
