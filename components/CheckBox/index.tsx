import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'
import style from './CheckBox.module.scss'

const CheckBox = props => {
  const { label, name, valueLists } = props

  const [valueListsCheckedStatus, setValueListsCheckedStatus] = useState(() =>
    valueLists.map(l => false)
  )

  const updateAddProductStateFromCheckBox = (e, valueList, valueListindex) => {
    const { name, checked } = e.target
    const targetChecked = checked

    setValueListsCheckedStatus(valueListsCheckedStatus => {
      return valueListsCheckedStatus.map(
        (valueListCheckedStatus, isCheckedIndex) => {
          if (isCheckedIndex === valueListindex) {
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
