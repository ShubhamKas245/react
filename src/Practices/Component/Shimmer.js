import React from 'react'

const Shimmer = () => {
  return (
    <div className=' text-center p-20 flex flex-wrap'>
      {Array(10).fill("").map((e,i)=>(<div key={i} className='w-[200px] h-[200px] m-[20px] bg-gray-300'></div>))}
    </div>
  )
}

export default Shimmer