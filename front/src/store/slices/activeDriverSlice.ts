import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    iddriver: 0
}
const activeDriverSlice = createSlice({
    name: 'activeDriver',
    initialState,
    reducers: {
        setActiveDriver(state, action) {
            state.iddriver = action.payload.iddriver
        },
        removeAciveDriver(state) {
            state.iddriver = 0
        }
    }
})

export const { setActiveDriver, removeAciveDriver } = activeDriverSlice.actions
export default activeDriverSlice.reducer
