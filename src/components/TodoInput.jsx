import React from 'react'
import { useState } from 'react'

const TodoInput = ({onClick}) => {
    const [title,setTitle] = useState("");

  return (
    <div>
        <input className='inputtag' type="text" placeholder='+ Add a to-do' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <br /><br />
        <button className='addbtn' onClick={() => onClick(title)}>ADD</button>
        
    </div>
    
  )
}

export default TodoInput