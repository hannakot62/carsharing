import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import selectedCarReducer from './slices/selectedCarSlice'
import startTimeReducer from './slices/startTimeSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        selectedCar: selectedCarReducer,
        start_time: startTimeReducer
    }
})
