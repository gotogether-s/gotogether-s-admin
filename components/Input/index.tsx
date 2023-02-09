import { InputAdornment, TextField } from '@mui/material'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { optionUpdate, update } from '@store/addProductSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Input = props => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const { label, name, placeholder, price, optionDtoList, optionIndex } = props

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const updateAddProductStateFromInput = e => {
    const { name, value } = e.target
    setValue(value)
    if (price) {
      const unformattedPrice = parseInt(value.replaceAll(',', ''))
      setValue(
        unformattedPrice
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
      optionDtoList
        ? dispatch(
            optionUpdate({
              name,
              value: unformattedPrice,
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
            <InputAdornment position='end'>{translate['원']}</InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default Input
