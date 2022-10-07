import { configureStore } from '@reduxjs/toolkit'
import addProductSlice from './addProductSlice'

const store = configureStore({
  reducer: {
    addProduct: addProductSlice.reducer,
  },
})

export default store
