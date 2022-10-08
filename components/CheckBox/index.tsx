import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update, ageUpdate } from '@store/addProductSlice'
import { useState } from 'react'
import style from './CheckBox.module.scss'

const CheckBox = props => {
  const { label, name, values } = props

  const dispatch = useDispatch()

  const [isChecked, setIsChecked] = useState(() => values.map(l => false))

  const updateAddProductStateFromCheckBox = (e, value, valueIndex) => {
    const { name, checked } = e.target
    const targetChecked = checked

    setIsChecked(isChecked => {
      return isChecked.map((isCheckedList, isCheckedIndex) => {
        if (isCheckedIndex === valueIndex) {
          if (name === 'basicPrice') {
            targetChecked
              ? dispatch(update({ name, value }))
              : dispatch(update({ name, value: '' }))
          } else {
            dispatch(ageUpdate({ name, value, targetChecked }))
          }
          return targetChecked
        } else {
          return isCheckedList
        }
      })
    })
  }

  return (
    <div className={style['input-wrapper']}>
      <div className={style['label']}>{label}</div>
      <FormGroup row>
        {values.map((value, valueIndex) => (
          <FormControlLabel
            key={valueIndex}
            label={value}
            control={
              <Checkbox
                name={name}
                value={value}
                checked={isChecked[valueIndex]}
                onChange={e =>
                  updateAddProductStateFromCheckBox(e, value, valueIndex)
                }
              />
            }
          />
        ))}
      </FormGroup>
    </div>
  )
}

export default CheckBox
