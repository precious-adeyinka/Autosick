import {createSlice} from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        data: null
    },
    reducers: {
        AUTH_USER (state, action) {
            state.isLoggedIn = true
            state.data = action.payload
        },
        LOGOUT (state, action) {
            state.isLoggedIn = false
            state.data = null
        }
    }
})

export default userReducer.reducer