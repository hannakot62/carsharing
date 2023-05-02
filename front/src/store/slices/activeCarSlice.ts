import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idcar: ''
}
const activeCarSlice = createSlice({
    name: 'activeCar',
    initialState,
    reducers: {
        setActiveCar(state, action) {
            state.idcar = action.payload.idcar
        },
        removeAciveCar(state) {
            state.idcar = ''
        }
    }
})

export const { setActiveCar, removeAciveCar } = activeCarSlice.actions
export default activeCarSlice.reducer
