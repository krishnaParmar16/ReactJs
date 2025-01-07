import './component.css'

function Navbar()
{
   return (
   <>
    <nav className=' w-[100%] bg-[#E53E3E] h-[60px] flex justify-between'>
    <div className="n1  w-[30%] h-[100%]">
    <ul className='h-[100%] w-[100%] flex justify-evenly items-center'>
        <li className='text-sm font-normal text-white'><a href="">About</a></li>
        <li className='text-sm font-normal text-white'><a href="">My Account</a></li>
        <li className='text-sm font-normal text-white'><a href="">Wishlist</a></li>
        <li className='text-sm font-normal text-white'><a href="">Checkout</a></li>
    </ul>
    </div>
    <div className="n2  w-[30%] flex justify-center items-center h-[100%]">
        <p className='text-base font-normal text-white'>Free shipping for all orders of 150$</p>
    </div>
    <div className="n3  w-[30%] h-[100%] ">
    <ul className='h-[100%] w-[100%] flex justify-evenly items-center'>
    <li  className='text-sm font-normal text-white'><a href="">Store Location</a></li>
    <li  className='text-sm font-normal text-white'><select name="" id="" className='bg-[transparent] cursor-[pointer] '>
        <option value="">Language</option>
        <option value="">English</option>
        <option value="">Hindi</option>
        <option value="">Bangla</option>
        </select></li>
    <li  className='text-sm font-normal text-white'>
        <select name="" id="" className='bg-[transparent] cursor-[pointer] '>
            <option value="">Currency</option>
            <option value="">Doller</option>
            <option value="">Rupee</option>
            <option value="">Taka</option>
        </select>
    </li>  
    </ul>  
    </div>
    </nav>


    <header className='h-[100px] w-[100%] flex '>
        <div className="h1 w-[15%] h-[100%] flex justify-center items-center ml-[1.5%]">
            <img src="https://html.rrdevs.net/roiser/assets/img/logo/logo-1.png" alt="logo" />
        </div>
        <div className="h2 w-[34%]  h-[100%] flex justify-center items-center relative ml-[5%]">
            <select name="" id="">
                <option value="">All Categoris <i class="fa-solid fa-angle-down"></i></option>
                <option value="">Fashion </option>
                <option value="">Organic</option>
                <option value="">Furniture</option>
            </select>
            <input type="search" name="" id="" placeholder='Search here... ' className='border h-[40px] ml-[4px] w-[65%] pl-[10px]  ' />
            <button className='h-[30px] w-[100px] absolute  bg-[#E53E3E] rounded-[3px] text-sm font-normal text-white right-[6.5%] '>Search Here</button>
        </div>
        <div className="h3 w-[38%]  h-[100%] flex items-center ml-[5%]">
            <div className="hh1 border-r-2 h-[60%] w-[50%] relative ml-[10%]">
            <p className='text-[#74787C] text-right me-[34%] mt-[5px] text-[14px]'>Call Us Now:</p>
            <h3 className='text-lg font-bold text-right me-[34%]'>+(258) 2159-2159</h3>
            <div className="hh4
             round h-[50px] w-[50px] rounded-[50%]  absolute  right-[9%] top-[6%] flex items-center justify-center">
           <a href=""> <i class="fa-solid fa-phone"></i></a>
            </div>

            </div>
            <div className="hh2  border-r-2 h-[60%] w-[20%] flex justify-center items-center">
            <div className="hh4
             round h-[50px] w-[50px] rounded-[50%]  flex items-center justify-center">
            <a href=""><i class="fa-solid fa-heart"></i></a>
            </div>
            </div>
            <div className="hh3 flex justify-center items-center  h-[60%] w-[20%]">
                <div className="hh4
                 round h-[50px] w-[50px] rounded-[50%]  flex items-center justify-center">
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </div>
    </header>

    <div className="h-div z-[10] h-[50px] w-[98%] ml-[1%] absolute top-[150px]  rounded-[5px] flex">
        <div className="inner1 h-[100%] w-[72%] bg-[black] rounded-s-[5px]">
            <ul className='flex text-[white] items-center h-[100%]'>
                <li className='ml-[30px] font-normal'><a href="">HOME</a></li>
                <li className='ml-[30px] font-normal'><a href="">SHOP</a></li>
                <li className='ml-[30px] font-normal'><a href="">WOMEN</a></li>
                <li className='ml-[30px] font-normal'><a href="">MEN</a></li>
                <li className='ml-[30px] font-normal'><a href="">PAGES</a></li>
                <li className='ml-[30px] font-normal'><a href="">BLOG</a></li>
                <li className='ml-[30px] font-normal'><a href="">CONTECT</a></li>
            </ul>
        </div>
        <div className="inner2 bg-[#E53E3E] rounded-e-[5px] h-[100%] w-[28%] flex justify-evenly items-center">
            <p className='text-[white] font-semibold text-[16px]'>Get 30% Discount Now </p>
            <h2 className='h-[60%] ps-[20px] rounded-[20px] pe-[20px]  bg-[white] text-[#E53E3E] font-semibold pt-[2px]'>SALE</h2>
        </div>
    </div>

   </> )
}

export default Navbar