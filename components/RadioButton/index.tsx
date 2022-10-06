import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import style from './RadioButton.module.scss'

const RadioButton = props => {
  const { label, radioButtonLists } = props

  return (
    <>
      <div className={style['label']}>{label}</div>
      <RadioGroup row>
        {radioButtonLists.map((radioButtonList, index) => (
          <FormControlLabel
            key={index}
            value={radioButtonList}
            label={radioButtonList}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </>
  )
}

export default RadioButton
