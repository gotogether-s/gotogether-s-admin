import { TextField, InputAdornment } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { update, optionUpdate } from '@store/addProductSlice'
import { useState } from 'react'
import style from './Input.module.scss'

const Input = props => {
  const { label, name, placeholder, price, optionDtoList, optionIndex } = props

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const updateAddProductStateFromInput = e => {
    const { name, value } = e.target
    setValue(value)
    if (price) {
      if (isNaN(value)) {
        setValue('')
        optionDtoList
          ? dispatch(optionUpdate({ name, value: '', optionIndex }))
          : dispatch(update({ name, value: '' }))
        return
      }
      const unformattedPrice = value.replaceAll(',', '')
      setValue(
        Number(unformattedPrice)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
      optionDtoList
        ? dispatch(
            optionUpdate({
              name,
              value: parseInt(unformattedPrice),
              optionIndex,
            })
          )
        : dispatch(update({ name, value: unformattedPrice }))
    } else if (optionDtoList) {
      dispatch(optionUpdate({ name, value, optionIndex }))
    } else {
      dispatch(update({ name, value }))
    }
  }

  const getPriceInquiryStatus = () => {
    if (name !== 'basicPrice') return false
    const basicPrice = useSelector(state => {
      return state.addProduct.basicPrice
    })
    return basicPrice === 0 ? true : false
  }

  return (
    <div>
      <div className='label'>{label}</div>
      <TextField
        sx={{ width: '100%' }}
        size='small'
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={getPriceInquiryStatus()}
        onChange={updateAddProductStateFromInput}
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
