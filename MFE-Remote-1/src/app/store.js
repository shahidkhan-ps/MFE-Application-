import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/todoSlice.js'


const store=configureStore({
    reducer:{
        todoInfo:userReducer
    }
})

export default store