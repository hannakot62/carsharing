import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idusers: 0,
    login: '',
    role: -1,
    full_name: '',
    experience: -1
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.idusers = action.payload.idusers
            state.login = action.payload.login
            state.role = action.payload.role
            state.full_name = action.payload.full_name
            state.experience = action.payload.experience
        },
        removeUser(state) {
            state.idusers = 0
            state.login = ''
            state.role = -1
            state.full_name = ''
            state.experience = -1
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
