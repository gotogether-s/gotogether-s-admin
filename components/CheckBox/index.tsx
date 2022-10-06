import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import style from './CheckBox.module.scss'

const CheckBox = props => {
  const { label, valueLists } = props

  return (
    <>
      <div className={style['label']}>{label}</div>
      <FormGroup row>
        {valueLists.map((valueList, index) => (
          <FormControlLabel
            key={index}
            value={valueList}
            label={valueList}
            control={<Checkbox />}
          />
        ))}
      </FormGroup>
    </>
  )
}

export default CheckBox
