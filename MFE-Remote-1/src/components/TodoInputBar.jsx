import React, { useEffect, useState } from 'react'
import TodoDisplayBoard from './TodoDisplayBoard.jsx';
import {useDispatch} from "react-redux"
import { addTodo, deleteTodo, updateTodo } from '../slices/todoSlice.js';

function TodoInputBar() {
    const dispatch=useDispatch()
    const initialState={
        task:"",
        isCompleted:false
    }
    const [item,setItem]=useState(initialState);

    const handleClick=()=>{
        dispatch(addTodo(item))
        setItem(initialState)
    }

    const handleUpdate=(index)=>{
        dispatch(updateTodo(index))
    }
    const handleDelete=(index)=>{
        dispatch(deleteTodo(index))
    }

  return (
    <>
        <input value={item.task} onChange={(e)=>setItem({...item,task:e.target.value})} placeholder='Enter the task..'/>
        <button onClick={handleClick}>Add</button>
        <TodoDisplayBoard onUpdate={handleUpdate} onDelete={handleDelete}/>
    </>
  )
}

export default TodoInputBar
