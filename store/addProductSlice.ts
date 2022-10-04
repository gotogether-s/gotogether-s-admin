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
  },
})

export default addProductSlice

export const { update } = addProductSlice.actions
