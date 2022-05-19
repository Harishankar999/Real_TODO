import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid';
import './commonstyle.css'

const Todo = () => {
  const [data, setData] = useState([]);
  const [showAll,setShowAll] = useState("")
  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };
    setData([...data,payload]);
    
  };
  const handleDelete = (id) => {
    let newTodos = data.filter((item)=> item.id !==id);
    setData(newTodos);
  }

  const handleToggle = (id) =>{
    const updateTodo = data.map((item) => item.id === id ? { ...item, status: !item.status } : item );
    setData(updateTodo)
  }
  return (
    <div >
        <TodoInput onClick={handleAdd} />
          {data.filter((item)=>(showAll ? true: !item.status)).map((item) => ( 
          <TodoList handleDelete = {handleDelete} handleToggle={handleToggle} key={item.id} {...item} />
          ))}
          <button className='showbtn' onClick={()=>setShowAll(!showAll)} >{ showAll ? "SHOW INCOMPLTED TASKS":"SHOW ALL TASK"}</button>
    </div>
  )
}

export default Todo