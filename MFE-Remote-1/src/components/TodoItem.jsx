import React from 'react'

function TodoItem({item,index,onDelete,onUpdate}) {
  return (
    <>
    <div>
     <p style={{textDecoration:(item.isCompleted?"line-through":"none")}}>{item.task}</p>
     <button onClick={()=>onUpdate(index)}>Ok</button>
     <button onClick={()=>onDelete(index)}>x</button> 
    </div>
    </>
  )
}

export default TodoItem
