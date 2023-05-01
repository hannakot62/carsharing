import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    start_time: ''
}
const startTimeSlice = createSlice({
    name: 'start_time',
    initialState,
    reducers: {
        setStartTime(state, action) {
            state.start_time = action.payload
        },
        removeStartTime(state) {
            state.start_time = ''
        }
    }
})

export const { setStartTime, removeStartTime } = startTimeSlice.actions
export default startTimeSlice.reducer
