import React from 'react'
import { Link } from 'react-router';

function NavbarSec() {
  return (
    <div className='sec-main h-[80px] w-full flex justify-evenly shadow-md'>
          <div className="logo h-full w-[15%]  flex justify-center items-center ">
          <Link to={"/"}><img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png?v=1734589067&width=280 " alt="" className='h-[60%] ' /></Link>
          </div>
          <div className="nav h-full w-[50%] flex justify-evenly items-center text-xs">
            <Link to={"/news"}><span>NEW</span> </Link>
            <Link to={"/lips"}><span>LIPS</span></Link>
            <Link to={"/eyes"}><span>EYES</span></Link>
            <Link to={"/face"}><span>FACE</span></Link>
            <Link to={"/nails"}><span>NAILS</span></Link>
            <Link to={"/skin"}><span>SKIN</span></Link>
            <span>OFFERS</span>
            <span>GIFTING</span>
            <span>SUGAR POP</span>
            <span>SUGAR PLAY</span>

          </div>
          <div className='h-full w-[20%] flex justify-evenly items-center'>
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <Link to={"/login"}><span><i class="fa-regular fa-user"></i>
            </span></Link>
            
            <Link to={"/cart"}><span><i class="fa-solid fa-bag-shopping"></i></span></Link>
          </div>
        </div>
  )
}

export default NavbarSec