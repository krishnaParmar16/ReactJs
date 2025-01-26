import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbarcode() {
  return (
    <div className='flex justify-between h-[50px] w=[100%]  items-center shadow-lg'>
        <div className="logo text-[26px] ml-[20px]">
        <NavLink to="/"> Logo</NavLink>
        </div>
        <div className='mr-[20px] w-[30%]  flex justify-evenly'>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Form">Form</NavLink>
        <NavLink to="/Product">Product</NavLink>
       </div>
    </div>
  )
}

export default Navbarcode