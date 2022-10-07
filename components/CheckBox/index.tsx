import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update, ageUpdate } from '@store/addProductSlice'
import { useState } from 'react'
import style from './CheckBox.module.scss'

const CheckBox = props => {
  const { label, name, valueLists } = props

  const dispatch = useDispatch()

  const [valueListsCheckedStatus, setValueListsCheckedStatus] = useState(() =>
    valueLists.map(l => false)
  )

  const updateAddProductStateFromCheckBox = (e, value, valueListindex) => {
    const { name, checked } = e.target
    const targetChecked = checked

    setValueListsCheckedStatus(valueListsCheckedStatus => {
      return valueListsCheckedStatus.map(
        (valueListCheckedStatus, isCheckedIndex) => {
          if (isCheckedIndex === valueListindex) {
            if (name === 'ages') {
              dispatch(ageUpdate({ name, value, targetChecked }))
            } else {
              targetChecked
                ? dispatch(update({ name, value }))
                : dispatch(update({ name, value: '' }))
            }
            return targetChecked
          } else {
            return valueListCheckedStatus
          }
        }
      )
    })
  }

  return (
    <>
      <div className={style['label']}>{label}</div>
      <FormGroup row>
        {valueLists.map((valueList, valueListindex) => (
          <FormControlLabel
            key={valueListindex}
            label={valueList}
            control={
              <Checkbox
                name={name}
                value={valueList}
                checked={valueListsCheckedStatus[valueListindex]}
                onChange={e =>
                  updateAddProductStateFromCheckBox(
                    e,
                    valueList,
                    valueListindex
                  )
                }
              />
            }
          />
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
