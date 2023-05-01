import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import selectedCarReducer from './slices/selectedCarSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        selectedCar: selectedCarReducer
    }
})
