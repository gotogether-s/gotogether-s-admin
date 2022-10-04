import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update } from '@store/addProductSlice'
import style from './Input.module.scss'

const Input = props => {
  const { label, name, placeholder } = props

  const dispatch = useDispatch()

  const updateAddProductState = e => {
    const { name, value } = e.target
    dispatch(update({ name, value }))
  }

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <TextField
        sx={{ width: '100%' }}
        size='small'
        name={name}
        placeholder={placeholder}
        onChange={updateAddProductState}
      />
    </div>
  )
}

export default Input
