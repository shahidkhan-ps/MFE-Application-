import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"

const initialState={
    todos:[]
}

const userSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload]
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((_,index)=>(index!=action.payload))
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo,index)=>
                (index===action.payload)?{...todo,isCompleted:!todo.isCompleted}:todo
            )
        }
    }
})

export const {addTodo,deleteTodo,updateTodo}=userSlice.actions

export default userSlice.reducer