import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logStatus: false
    },
    reducers: {
        login: (state) => {
            state.logStatus = true
        }
    }
})

export default authSlice.reducer

export const { login } = authSlice.actions