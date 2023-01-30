import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [count,setCount]=useState(0 )
    
  return (
    <>
   <div>
    <h5>{count}</h5>
   <div>
   <button  className='border border-black mx-2' onClick={()=>setCount(count+1)}>+</button>
   <button className='border border-black mx-2' onClick={()=>setCount(count-1)}>-</button>
   </div>
   </div>
    </>
  )
}

export default Todo