import React from 'react'
function Card(props) {
    const Value = props.Value
    
    const State = props.State
  return (
    <div className='bg-[#F5F5F5] hover:scale-110 hover:cursor-pointer ease-in-out transition-all durration-500 rounded-md w-fit p-4 text-center max-w-[200px] md:max-w-[300px] my-5'>
        <p className='text-[#1763D6] font-semibold'>{State} Proposals</p>
        <p className='font-bold flex text-sm ml-[50%] mt-4'>{Value} <span className='mx-auto'> {">"}</span></p>
    </div>
  )
}

export default Card