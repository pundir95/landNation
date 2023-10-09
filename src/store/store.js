import { configureStore } from '@reduxjs/toolkit'
import homeDataSlice from './slices/homeDataSlice'


const combinedReducer = {
  homeData : homeDataSlice
}

export default configureStore({
    reducer: combinedReducer
})