import React from 'react'
import "./section2.css"

function Section4() {
  return (
    <div className='sec2 bg-light mt-3'>
    <div className="txt  d-flex justify-content-between align-items-center">
    <h4 className='ms-3'>SHOP BY COLLECTION</h4>
   
    </div>
    <div className="product  d-flex justify-content-evenly align-items-center">
        <div className="p5  ">
            <div className="img position-relative  ">
                <button className='position-absolute btn4 '>PREFORMENCE SERIES</button>
            </div>
            
        </div>
        <div className="p6  ">
            <div className="img position-relative ">
                <button className='position-absolute btn4 '>LIMITED EDITION</button>
            </div>
           
        </div>
        <div className="p7  ">
            <div className="img position-relative ">
                <button className='position-absolute btn4 '>KIDS COLLECTION</button>
            </div>
            
        </div>
        
    </div>
</div>
  )
}

export default Section4