import React from 'react'
import styles from './style.module.css'
const TodoList = ({title,status,id, handleToggle,handleDelete}) => {
  return (
    <div className='todo'>
      <button className='completebtn' onClick={() => handleToggle(id)}>{ status? 'COMPLETED':'COMPLETE'} </button>
      <h3  className={status ? styles.style : ""}>{title}</h3>
      <button className='delete' onClick={()=> handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoList