import d1 from "./images/d1.png"
import d2 from "./images/d2.png"
import d3 from "./images/d3.png"
import d4 from "./images/d4.png"
import "./component.css"
function Sec2()
{
    return(
        <>
        <div className="sec2 h-[300px] w-[100%]  flex justify-between">
            <div className="s2 relative">
            <img src={d1} className="w-[100%] absolute bottom-0 z-0" alt="" />
            <img src={d2} alt="" className="z-1 absolute right-[10%]  bottom-0"/>
            <div className="text bg-[white] h-[100%] w-[100%] z-10 absolute top-0 opacity-50">
                <p className=" ml-[20%] mt-[20%] text-[#E53E3E]">
                    Special 50% Disocunt</p>
                <h1 className="text-[22px] mt-[5%] ml-[20%] w-[70%] font-semibold">The Latest Men’s Trends
                This Season</h1>
                 <div className=" flex ml-[20%] mt-[5%]">
                    <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] bg-[#E53E3E] text-[22px] text-[white]">+</div> 
                    <p className=" txt-1 font-semibold text-[18px] ml-[10px]">View Collection</p>
                 </div>

            </div>
            </div>
            <div className="s2 relative">
            <img src={d1} className="w-[100%] absolute bottom-0 z-0" alt="" />
            <img src={d3} alt="" className="z-1 absolute right-[10%]  bottom-0"/>
            <div className="text bg-[white] h-[100%] w-[100%] z-10 absolute top-0 opacity-50">
                <p className=" ml-[20%] mt-[20%] text-[#E53E3E]">
                    Special 50% Disocunt</p>
                <h1 className="text-[22px] mt-[5%] ml-[20%] w-[70%] font-semibold">The Latest Men’s Trends
                This Season</h1>
                 <div className=" flex ml-[20%] mt-[5%]">
                    <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] bg-[#E53E3E] text-[22px] text-[white]">+</div> 
                    <p className=" txt-1 font-semibold text-[18px] ml-[10px]">View Collection</p>
                 </div>

            </div>
            </div>
            <div className="s2 relative">
            <img src={d1} className="w-[100%] absolute bottom-0 z-0" alt="" />
            <img src={d4} alt="" className="z-1 absolute right-[10%]  bottom-0"/>
            <div className="text bg-[white] h-[100%] w-[100%] z-10 absolute top-0 opacity-50">
                <p className=" ml-[20%] mt-[20%] text-[#E53E3E]">
                    Special 50% Disocunt</p>
                <h1 className="text-[22px] mt-[5%] ml-[20%] w-[70%] font-semibold">The Latest Men’s Trends
                This Season</h1>
                 <div className=" flex ml-[20%] mt-[5%]">
                    <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] bg-[#E53E3E] text-[22px] text-[white]">+</div> 
                    <p className=" txt-1 font-semibold text-[18px] ml-[10px]">View Collection</p>
                 </div>

            </div>
            </div>
        </div>
        </>
    )
}

export default Sec2