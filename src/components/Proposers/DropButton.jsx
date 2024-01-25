import React, { useState } from 'react'
import {TiArrowSortedDown } from "react-icons/ti"
import getItem from "../../../hooks/useAuth"

function DropButton() {
  const [Clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!Clicked)
  const Token = getItem()
  console.log(Token)
  return (
    <div className='relative transition-all duration-300 ease-in-out' onMouseLeave={handleClicked}>
     <p className='flex' onClick={handleClicked} >Create Proposal <span className='font-bold relative'><TiArrowSortedDown className='absolute bottom-[20%]' /></span></p>
     <ul className={`${Clicked ? 'block': 'hidden' }`}>
      <li>SASS</li>
      <li>SONAS</li>
     </ul>
    </div>
  )
}

export default DropButton