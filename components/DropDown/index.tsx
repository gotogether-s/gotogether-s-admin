import { Select, MenuItem, OutlinedInput } from '@mui/material'
import style from './DropDown.module.scss'

const DropDown = props => {
  const { label, name, values, placeholder } = props

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <Select
        sx={{ width: '100%' }}
        size='small'>
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
