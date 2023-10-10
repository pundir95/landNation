import { configureStore } from '@reduxjs/toolkit'
import homeDataSlice from './slices/homeDataSlice'
import authDataSlice from './slices/authDataSlice'


const combinedReducer = {
  homeData : homeDataSlice,
  authData:authDataSlice
}

export default configureStore({
    reducer: combinedReducer
})