import React from 'react'
import { Link } from 'react-router-dom'

function Navbarcode() {
  return (
    <div className='flex justify-between h-[50px] w=[100%]  items-center shadow-lg'>
        <div className="logo text-[26px] ml-[20px]">
        <Link to="/"> Logo</Link>
        </div>
        <div className='mr-[20px] w-[30%]  flex justify-evenly'>
        <Link to="/Men">Men</Link>
        <Link to="/Women">Women</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
       </div>
    </div>
  )
}

export default Navbarcode