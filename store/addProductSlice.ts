import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  thumbnail: '',
  productName: '',
  basicPrice: '',
  ages: '',
  genderGroup: '',
  companion: '',
  religion: '',
  theme: '',
  continent: '',
  country: '',
  region: '',
  points: '',
  airport: '',
  info: '',
  optionDtoList: [
    {
      name: '',
      value: '',
      additional: 0,
      required: '',
    },
  ],
}

const addProductSlice = createSlice({
  name: 'addProductSlice',
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      const { name, value } = action.payload
      const initialStateKey = Object.keys(state).find(
        stateKey => stateKey === name
      )
      state[initialStateKey] = value
    },
    optionUpdate: (state, action) => {
      const { name, value, optionNumber } = action.payload
      const option = state.optionDtoList[optionNumber]
      if (option) {
        console.log(true)
        option[`${name}`] = value
      } else {
        console.log(false)
        const newOption = {
          name: '',
          value: '',
          additional: 0,
          required: '',
        }
        state.optionDtoList.push(newOption)
        state.optionDtoList[optionNumber][`${name}`] = value
      }
    },
  },
})

export default addProductSlice

export const { update, optionUpdate } = addProductSlice.actions
