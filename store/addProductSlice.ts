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
      const { name, value } = action.payload
      const initialStateKey = Object.keys(state).find(
        stateKey => stateKey === name
      )
      if (state[initialStateKey] === '') {
        state[initialStateKey] = value
      } else {
        state[initialStateKey] = state[initialStateKey].concat(',', value)
      }
    },
  },
})

export default addProductSlice

export const { update, optionUpdate, ageUpdate } = addProductSlice.actions
