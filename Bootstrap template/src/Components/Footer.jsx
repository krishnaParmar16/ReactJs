import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='f1 bg-dark mt-5'>
        <div className="f2 d-flex justify-content-evenly align-items-center">
            <div className="ff1">
                <h5>CONTACT</h5>
                <p className='mt-4'>info@mysite.com</p>
                <p>
                123-456-7890</p>
                <p>
                500 Terry Francine St.SA, CA 9415</p>
            </div>
            <div className="ff1">
                <h5>LEGAL</h5>
                <p className='mt-4'>
                Terms & Conditions</p>
                <p>
                Privacy Policy</p>
                <p>
                Shipping Policy</p>
                <p>
                Refund Policy</p>
                <p>
                Accessibility Statement</p>
            </div>
            <div className="ff1">
                <h5>SHOP</h5>
                <p className='mt-4'>
                All Products</p>
                <p>
                Best Sellers</p>
                <p>
                Performance Series</p>
                <p>
                Limited Edition</p>
                <p>
                    Kids Collection
                </p>

            </div>
        </div>
    </div>
  )
}

export default Footer