import './navbar.css'

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


    <header className='h-[100px] w-[100%] border flex '>
        <div className="h1 w-[15%] border h-[100%] flex justify-center items-center ml-[1.5%]">
            <img src="https://html.rrdevs.net/roiser/assets/img/logo/logo-1.png" alt="logo" />
        </div>
        <div className="h2 w-[34%] border h-[100%] flex justify-center items-center relative ml-[5%]">
            <select name="" id="">
                <option value="">All Categoris <i class="fa-solid fa-angle-down"></i></option>
                <option value="">Fashion </option>
                <option value="">Organic</option>
                <option value="">Furniture</option>
            </select>
            <input type="search" name="" id="" placeholder='Search here... ' className='border h-[40px] ml-[4px] w-[65%] pl-[10px]  ' />
            <button className='h-[30px] w-[100px] absolute  bg-[#E53E3E] rounded-[3px] text-sm font-normal text-white right-[6.5%] '>Search Here</button>
        </div>
        <div className="h3 w-[38%] border h-[100%] flex items-center ml-[5%]">
            <div className="hh1 border-r-2 h-[60%] w-[50%] relative ml-[10%]">
            <div className="round h-[50px] w-[50px] rounded-[50%] bg-[#F6F6F7] absolute  right-[9%] top-[6%] flex items-center justify-center">
           <a href=""> <i class="fa-solid fa-phone"></i></a>
            </div>

            </div>
            <div className="hh2  border-r-2 h-[60%] w-[20%] flex justify-center items-center">
            <div className="round h-[50px] w-[50px] rounded-[50%] bg-[#F6F6F7] flex items-center justify-center">
            <a href=""><i class="fa-solid fa-heart"></i></a>
            </div>
            </div>
            <div className="hh3 flex justify-center items-center  h-[60%] w-[20%]">
                <div className="round h-[50px] w-[50px] rounded-[50%] bg-[#F6F6F7] flex items-center justify-center">
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </div>
    </header>


   </> )
}

export default Navbar