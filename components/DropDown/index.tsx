import { MenuItem, Select } from '@mui/material'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { update } from '@store/addProductSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const DropDown = props => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const { label, name, values, placeholder } = props

  const dispatch = useDispatch()

  const [selected, setSelected] = useState('')

  const updateAddProductStateFromDropDown = e => {
    const { name, value } = e.target
    setSelected(value)
    dispatch(update({ name, value }))
  }

  return (
    <div>
      <div className='label'>{label}</div>
      <Select
        sx={{ width: '100%' }}
        size='small'
        name={name}
        value={selected}
        onChange={updateAddProductStateFromDropDown}>
        {values.map((value, index) => (
          <MenuItem
            key={index}
            value={value}>
            {translate[value]}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default DropDown
