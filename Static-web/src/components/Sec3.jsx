import "./component.css"
import shop1 from "./images/shop1.png"
import shop2 from "./images/shop2.png"
import shop3 from "./images/shop3.png"
import shop4 from "./images/shop4.png"

function Sec3()
{
    return (
        <>
        
        <div className="sec3 border h-[750px] w-[100%] ">
                <div className="sec3-1 h-[30%] w-[98%] ml-[1%] relative">
                    <h1 className="uppercase text-[44px] font-bold mt-[8%] ml-[1%]">GET YOUR FASHION STYLE</h1>
                    <p className="text-[#74787C] ml-[1%]">29 categories belonging to a total 15,892 products</p>
                    <div className="a1 round h-[50px] w-[50px] rounded-[50%]  absolute  right-[1%] bottom-[18%] flex items-center justify-center">
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="a2 round h-[50px] w-[50px] rounded-[50%]  absolute  right-[7%] bottom-[18%] flex items-center justify-center">
                    <i class="fa-solid fa-arrow-left"></i>            
                    </div>
                    <hr className="h-[10px] w-[100%] bg-[F6F6F7] absolute bottom-[0%]"/>
                </div>
                <div className="sec3-2 h-[70%] w-[98%] ml-[1%] flex justify-between">
                <div className="s3 h-[90%] w-[23%] rounded-[8px] border cursor-pointer">
                    <div className="img2 h-[65%] w-[100%] ">
                        <img src={shop1} alt="" className="h-[100%]" />
                    </div>
                    <div className="txt2 h-[35%] w-[100%] ">
                        <p className="text-sm text-[#74787C] ml-[20px] mt-[8px] uppercase">levi's cotton</p>
                        <h2 className="font-semibold ml-[20px] w-[80%] text-[22px]">Monica Diara Party Dress</h2>
                        <p className="mt-[5px] text-[#74787C]">
                         <span className="me-[10px]"><i class="fa-solid fa-star text-[#E53E3E] ml-[20px]"></i><i class="fa-solid fa-star ml-[3px] text-[#E53E3E]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i>
                         </span>  (15 Reviews)</p>
                         <p className="mt-[5px] ml-[20px] text-[#74787C] font-semibold"><del>$250.00</del> <span className="text-[#E53E3E]">$157.00</span> </p>
                    </div>
                </div>
                <div className="s3 h-[90%] w-[23%] rounded-[8px] border cursor-pointer">
                    <div className="img2 h-[65%] w-[100%] ">
                    <img src={shop2} alt="" className="h-[100%]" />
                    </div>
                    <div className="txt2 h-[35%] w-[100%] ">
                        <p className="text-sm text-[#74787C] ml-[20px] mt-[8px] uppercase">levi's cotton</p>
                        <h2 className="font-semibold ml-[20px] w-[80%] text-[22px]">Onima Black Flower Sandal</h2>
                        <p className="mt-[5px] text-[#74787C]">
                         <span className="me-[10px]"><i class="fa-solid fa-star text-[#E53E3E] ml-[20px]"></i><i class="fa-solid fa-star ml-[3px] text-[#E53E3E]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i>
                         </span>  (15 Reviews)</p>
                         <p className="mt-[5px] ml-[20px] text-[#74787C] font-semibold"><del>$450.00</del> <span className="text-[#E53E3E]">$257.00</span> </p>
                    </div>
                </div>
                <div className="s3 h-[90%] w-[23%] rounded-[8px] border cursor-pointer">
                    <div className="img2 h-[65%] w-[100%] ">
                    <img src={shop3} alt="" className="h-[100%]" />
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
                <div className="s3 h-[90%] w-[23%] rounded-[8px] border cursor-pointer">
                    <div className="img2 h-[65%] w-[100%] ">
                    <img src={shop4} alt="" className="h-[100%]" />
                    </div>
                    <div className="txt2 h-[35%] w-[100%] ">
                        <p className="text-sm text-[#74787C] ml-[20px] mt-[8px] uppercase">levi's cotton</p>
                        <h2 className="font-semibold ml-[20px] w-[80%] text-[22px]">D'valo Office Cotton Suite</h2>
                        <p className="mt-[5px] text-[#74787C]">
                         <span className="me-[10px]"><i class="fa-solid fa-star text-[#E53E3E] ml-[20px]"></i><i class="fa-solid fa-star ml-[3px] text-[#E53E3E]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i><i class="fa-solid fa-star text-[#E53E3E] ml-[3px]"></i>
                         </span>  (15 Reviews)</p>
                         <p className="mt-[5px] ml-[20px] text-[#74787C] font-semibold"><del>$350.00</del> <span className="text-[#E53E3E]">$257.00</span> </p>
                    </div>
                </div>
                </div>

                </div>
        
        
        </>
    )
}
export default Sec3