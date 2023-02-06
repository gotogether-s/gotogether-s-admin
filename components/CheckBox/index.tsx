import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { ageUpdate, update } from '@store/addProductSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const CheckBox = props => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

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
              ? dispatch(update({ name, value: 0 }))
              : dispatch(update({ name, value: null }))
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
    <div>
      <div className='label'>{label}</div>
      <FormGroup row>
        {values.map((value, valueIndex) => (
          <FormControlLabel
            key={valueIndex}
            label={translate[value]}
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
