import { TextField } from '@mui/material'
import style from './Input.module.scss'

const Input = props => {
  const { label, name, placeholder } = props
  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <TextField
        sx={{ width: '100%' }}
        size='small'
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
