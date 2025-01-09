import "./component.css"
import d5 from "./images/d5.png"
import d6 from "./images/d6.png"
import shop5 from "./images/shop5.jpg"
import shop6 from "./images/shop6.jpg"


function Sec6()
{   
    return (
        <>
        <div className="sec6 h-[580px] w-[100%] bg-[#F6F6F7] flex justify-center items-center relative">
        <img src={d5} alt="" className="absolute bottom-0 z-0"/>
        <div className="sec6-1 h-[90%] w-[85%] flex justify-center items-center">
            <div className="ss6 h-[100%] w-[42%] ">
                <h1 className="uppercase text-[34px] font-semibold mt-[20%] ml-[3%]">Deal Of the days</h1>
                <p className="text-[17px] text-[#74787C] mt-[2%] ml-[3%]">Elegant pink origami design three type of dimensional view and</p>
                <p className="text-[17px] text-[#74787C] mt-[2%] ml-[3%]">decoration co Great for adding a decorative...</p>
                <div className="ttt1 flex mt-[8%] ml-[3%]">
                <div className="h-[55px] w-[55px] bg-[#E53E3E] rounded-[50%] flex justify-center items-center">
                    <img src={d6} alt="" /></div>    
                <p className="text-[19px] w-[75%] ml-[4%] font-normal">  Limited Time offer. THe Deal will expire
                one august 18, 2024</p></div>
                <button className="btn4 text-[18px] font-semibold mt-[8%] ml-[3%] z-3">View All Collection</button>
            </div>
            <div className="ss6 h-[100%] w-[58%] flex justify-between items-center">
                 <div className="s3 h-[90%] w-[47%] rounded-[8px] border cursor-pointer bg-[white]">
                    <div className="img2 h-[65%] w-[100%] ">
                    <img src={shop5} alt="" className="h-[100%]" />
                    </div>
                    <div className="txt2 h-[35%] w-[100%] ">
                        <p className="text-sm text-[#74787C] ml-[20px] mt-[8px] uppercase">levi's cotton</p>
                        <h2 className="font-semibold ml-[20px] w-[80%] text-[22px]">Monica Diara Party Dress</h2>
                        <p className="mt-[5px] text-[#74787C]">
                         <span className="me-[10px]"><i class="fa-solid fa-star text-[#E53E3E] ml-[20px]"></i><i class="fa-solid fa-star ml-[3px] text-[#E53E3E]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i>
                         </span>  (15 Reviews)</p>
                         <p className="mt-[5px] ml-[20px] text-[#74787C] font-semibold"><del>$550.00</del> <span className="text-[#E53E3E]">$427.00</span> </p>
                    </div>
                </div>
                <div className="s3 h-[90%] w-[47%] rounded-[8px] border cursor-pointer bg-[white]">
                    <div className="img2 h-[65%] w-[100%] ">
                    <img src={shop6} alt="" className="h-[100%]" />
                    </div>
                    <div className="txt2 h-[35%] w-[100%] ">
                        <p className="text-sm text-[#74787C] ml-[20px] mt-[8px] uppercase">levi's cotton</p>
                        <h2 className="font-semibold ml-[20px] w-[80%] text-[22px]">Poncho Sweater International</h2>
                        <p className="mt-[5px] text-[#74787C]">
                         <span className="me-[10px]"><i class="fa-solid fa-star text-[#E53E3E] ml-[20px]"></i><i class="fa-solid fa-star ml-[3px] text-[#E53E3E]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i>
                         </span>  (15 Reviews)</p>
                         <p className="mt-[5px] ml-[20px] text-[#74787C] font-semibold"><del>$550.00</del> <span className="text-[#E53E3E]">$427.00</span> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Sec6