// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import video from '../assets/video.mp4';
import { Link } from 'react-router';
import React from 'react';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


function Navbarcode() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className='h-[30px] w-full bg-black text-white text-center pt-2 text-xs tracking-wide'><p>USE CODE : TREAT10 AND  ENJOY 10% OFF ON ALL ORDERS 🙌</p></div>
      <nav className='h-[500px] w-full flex justify-evenly bg-black'>
        <video autoPlay muted loop className='h-full w-full'>
          <source src={video} type="video/mp4" />

        </video>
        <div className='main h-[80px] w-full flex justify-evenly group'>
          <div className="logo h-full w-[15%]  flex justify-center items-center "><img src="https://www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=2749" alt="" className='h-[60%] group-hover:hidden' />
          <img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png?v=1734589067&width=280 " alt="" className='h-[60%] hidden group-hover:block' />
          </div>
          <div className="nav h-full w-[50%] flex justify-evenly items-center text-xs font-[jost]">
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
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            {/* <Link to={"/login"}><span><i className="fa-regular fa-user"></i>
            </span></Link> */}
              <button  onClick={() => setModalShow(true)}>
              <i className="fa-regular fa-user"></i> </button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>

            <Link to={"/cart"}><span><i className="fa-solid fa-bag-shopping"></i></span></Link>
          </div>
        </div>
      </nav>

     

    </>
  );
}

export default Navbarcode;