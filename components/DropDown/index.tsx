import { Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update } from '@store/addProductSlice'
import { useState } from 'react'
import style from './DropDown.module.scss'

const DropDown = props => {
  const { label, name, values, placeholder } = props

  const dispatch = useDispatch()

  const [selected, setSelected] = useState('')

  const updateAddProductStateFromDropDown = e => {
    const { name, value } = e.target
    setSelected(value)
    dispatch(update({ name, value }))
  }

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
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
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default DropDown
