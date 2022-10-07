import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { update } from '@store/addProductSlice'
import { useState } from 'react'
import style from './CheckBox.module.scss'

const CheckBox = props => {
  const { label, name, valueLists } = props

  const dispatch = useDispatch()

  const [checkedStatus, setCheckedStatus] = useState(false)

  const updateAddProductStateFromCheckBox = e => {
    setCheckedStatus(!checkedStatus)
    if (!checkedStatus) {
      const { name, value } = e.target
      dispatch(update({ name, value }))
    }
  }

  return (
    <>
      <div className={style['label']}>{label}</div>
      <FormGroup row>
        {valueLists.map((valueList, index) => (
          <FormControlLabel
            key={index}
            value={valueList}
            label={valueList}
            control={
              <Checkbox
                name={name}
                onChange={updateAddProductStateFromCheckBox}
                checked={checkedStatus}
              />
            }
          />
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
