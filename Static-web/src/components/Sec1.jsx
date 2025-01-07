import "./component.css"
import ii1 from "./images/ii1.png"
import ii2 from "./images/ii2.png"
import ii3 from "./images/ii3.png"
import ii4 from "./images/ii4.png"
import ii5 from "./images/ii5.png"
import ii6 from "./images/ii6.png"
function Sec1()
{
    return (
        <>
        <div className="sec1 h-[550px] w-[100%] ">
        <div className="sec1-1 h-[40%] w-[98%] ml-[1%] relative">
            <h1 className="uppercase text-[44px] font-bold mt-[8%] ml-[1%]">Best for your categories</h1>
            <p className="text-[#74787C] ml-[1%]">29 categories belonging to a total 15,892 products</p>
            <div className="a1 round h-[50px] w-[50px] rounded-[50%]  absolute  right-[1%] bottom-[18%] flex items-center justify-center">
            <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div className="a2 round h-[50px] w-[50px] rounded-[50%]  absolute  right-[7%] bottom-[18%] flex items-center justify-center">
            <i class="fa-solid fa-arrow-left"></i>            
            </div>
            <hr className="h-[10px] w-[100%] bg-[F6F6F7] absolute bottom-[0%]"/>
        </div>
        <div className="sec1-2 h-[60%] w-[98%] ml-[1%]  flex justify-between">
        <div className="s1">
            <img src={ii1} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">women wear</h1>
        </div>
        <div className="s1">
            <img src={ii2} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">shoes collection</h1>
        </div>
        <div className="s1">
            <img src={ii3} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">bag collection</h1>
        </div>
        <div className="s1">
            <img src={ii4} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">watch hare</h1>
        </div>
        <div className="s1">
            <img src={ii5} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">accessories</h1>
        </div>
        <div className="s1">
            <img src={ii6} alt="" className="w-[90%] ml-[5%] mt-[6%]" />
            <h1 className="text-[18px] font-semibold text-center uppercase mt-[6%]">sunglasses</h1>
        </div>
        </div>
        </div>

        </>
    )
}

export default Sec1