import i1 from "./images/i1.png"
import i2 from "./images/i2.png"
import i3 from "./images/i3.png"
import "./component.css"

function Main()
{
    return (
        <>
        <div className="main h-[700px] w-[100%] bg-[#F8F3EE]  relative">
        <img src={i1} alt=""  className="absolute bottom-[0] z-[1]"/>
        <img src={i2} alt=""  className="absolute top-[0] "/>
        <img src={i3} alt="" className="absolute h-[93%] w-[80%] bottom-[0] left-[-10%] z-[1]"/>

        <div className="content h-[55%] w-[26%]  absolute right-[8%] bottom-[20%] z-[2]">
        <p className="text-[#E53E3E] uppercase mt-[10%] ml-[8%] ">ummer 22 women’s collection</p>
        <h1 className="uppercase text-[44px] font-bold leading-[55px] mt-[4%] ml-[8%] ">Super COLLECTION
        FOR WOMEN</h1>
        <p className="ml-[8%] mt-[3%]">From <span className="text-[#E53E3E] font-bold text-[34px]   ">$320.00</span></p>
        <button className="btn1 bg-[#E53E3E] h-[50px] w-[52%] text-[white] rounded-[4px] mt-[4%] ml-[8%] text-[18px]">View Collection</button>
        </div>
        </div>
        </>
    )
}

export default Main