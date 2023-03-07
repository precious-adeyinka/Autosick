import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user'

const globalStore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default globalStore