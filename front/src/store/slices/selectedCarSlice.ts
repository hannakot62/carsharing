import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idcar: '',
    model: '',
    location: '',
    experience_start: -1,
    price_per_minute: -1,
    available: false
}
const selectedCarSlice = createSlice({
    name: 'selectedCar',
    initialState,
    reducers: {
        setSelectedCar(state, action) {
            state.idcar = action.payload.idcar
            state.model = action.payload.model
            state.location = action.payload.location
            state.experience_start = action.payload.experience_start
            state.price_per_minute = action.payload.price_per_minute
            state.available = action.payload.available
        },
        removeSelectedCar(state) {
            state.idcar = ''
            state.model = ''
            state.location = ''
            state.experience_start = -1
            state.price_per_minute = -1
            state.available = false
        },
        bookSelectedCar(state) {
            state.available = false
        },
        unbookSelectedCar(state) {
            state.available = true
        }
    }
})

export const {
    setSelectedCar,
    removeSelectedCar,
    bookSelectedCar,
    unbookSelectedCar
} = selectedCarSlice.actions
export default selectedCarSlice.reducer
