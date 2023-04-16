import { configureStore } from '@reduxjs/toolkit'
import codesReducer from './slices/codesSlice'

export default configureStore({
  reducer: {
    codes: codesReducer,
  },
})
