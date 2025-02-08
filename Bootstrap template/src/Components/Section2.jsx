import React from 'react'
import "./Section2.css"

function Section2() {
  return (
    <div className='sec2 bg-light'>
        <div className="txt  d-flex justify-content-between align-items-center">
        <h4 className='ms-3'>
        BEST SELLERS</h4>
        <button className='btn3 me-3'>VIEW ALL</button>
        </div>
        <div className="product  d-flex justify-content-evenly align-items-center">
            <div className="p1 h-100 ">
                <div className="img"></div>
                <div className="txt1">
                    <h6 className='mt-3 ms-1'>SUSTAINABLE STRIDER</h6>
                    <p className='ms-1'>$150.00</p>
                </div>
            </div>
            <div className="p2 h-100 ">
                <div className="img"></div>
                <div className="txt1">
                    <h6 className='mt-3 ms-1'>DISTANCE ELITE
                    </h6>
                    <p className='ms-1'>$140.00</p>
                </div>
            </div>
            <div className="p3 h-100 ">
                <div className="img"></div>
                <div className="txt1">
                    <h6 className='mt-3 ms-1'>SPRINT CHAMP</h6>
                    <p className='ms-1'>$180.00</p>
                </div>
            </div>
            <div className="p4 h-100 ">
                <div className="img"></div>
                <div className="txt1">
                    <h6 className='mt-3 ms-1'>JUNIOR SPORT</h6>
                    <p className='ms-1'>$72.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2