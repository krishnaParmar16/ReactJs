import React from 'react'
import "./NavbarCode.css"

function NavbarCode() {
  return (
    <div className='main bg-light d-flex justify-content-between '>
        <div className="logo d-flex justify-content-center align-items-center "><h3>Ryst.</h3></div>
        <div className="nav position-relative d-flex justify-content-center align-items-center">
            <i className='fa fa-solid fa-magnifying-glass position-absolute search' ></i>
            <input type="search" name="" placeholder='Search' className='ps-5 me-3' id="" />
            <i className='fa fa-solid fa-heart ii1 ms-3 ' ></i>
            <i className='fa fa-solid fa-cart-shopping  ii1 ms-3 me-3' ></i>
            <button className='btn1 ms-3'>LOG IN</button>
            <button className='btn2 ms-3'>MENU</button>
        </div>
    </div>
  )
}

export default NavbarCode