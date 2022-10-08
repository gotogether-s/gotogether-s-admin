import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ages: '',
  airport: '',
  basicPrice: '',
  companion: '',
  continent: '',
  country: '',
  genderGroup: '',
  info: '',
  optionDtoList: [
    {
      name: '',
      value: '',
      additional: 0,
      required: '',
    },
  ],
  points: '',
  productName: '',
  region: '',
  religion: '',
  theme: '',
  thumbnail: '',
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
      const { name, value, optionIndex } = action.payload
      const option = state.optionDtoList[optionIndex]
      if (option) {
        option[`${name}`] = value
      } else {
        const newOption = {
          name: '',
          value: '',
          additional: 0,
          required: '',
        }
        state.optionDtoList.push(newOption)
        state.optionDtoList[optionIndex][`${name}`] = value
      }
    },
    ageUpdate: (state, action) => {
      const { name, value, targetChecked } = action.payload
      const initialStateKey = Object.keys(state).find(
        stateKey => stateKey === name
      )
      if (targetChecked) {
        if (state[initialStateKey] === '') {
          state[initialStateKey] = value
        } else {
          state[initialStateKey] = state[initialStateKey].concat(',', value)
        }
      } else {
        const agesArray = state[initialStateKey].split(',')
        const agesArrayIndex = agesArray.indexOf(value)
        agesArray.splice(agesArrayIndex, 1)
        state[initialStateKey] = agesArray.join()
      }
    },
  },
})

export default addProductSlice

export const { update, optionUpdate, ageUpdate } = addProductSlice.actions
