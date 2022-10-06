import { TextField, InputAdornment } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update } from '@store/addProductSlice'
import { useState } from 'react'
import style from './Input.module.scss'

const Input = props => {
  const { label, name, placeholder, price, optionDtoList, optionIndex } = props

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const updateAddProductState = (e, price) => {
    const { name, value } = e.target
    setValue(value)
    if (optionDtoList) {
      // Update optionDtoList Data here...
    } else if (price) {
      const unformattedPrice = value.replaceAll(',', '')
      setValue(
        Number(unformattedPrice)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
      dispatch(update({ name, value: unformattedPrice }))
    } else {
      dispatch(update({ name, value }))
    }
  }

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <TextField
        sx={{ width: '100%' }}
        size='small'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={() => updateAddProductState(event, price)}
        InputProps={{
          endAdornment: price && (
            <InputAdornment position='end'>원</InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default Input
