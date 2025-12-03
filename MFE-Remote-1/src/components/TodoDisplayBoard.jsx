import React from 'react'
import TodoItem from './TodoItem.jsx'
import { useSelector } from 'react-redux'

function TodoDisplayBoard({onUpdate,onDelete}) {
  const items=useSelector((state)=>state.todoInfo.todos)
  return (
    <>
      {items.map((item,index)=>(
        <TodoItem onUpdate={onUpdate} onDelete={onDelete} key={index} index={index} item={item}/>
      ))}
    </>
  )
}

export default TodoDisplayBoard
