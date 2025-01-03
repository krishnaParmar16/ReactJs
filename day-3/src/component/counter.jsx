 import { useState } from "react" 
 import Counter2 from "./counter2";
 import Counter3 from "./counter3";
 import '../App.css'
function Counter()
{
    const [state,setCounter]=useState(0);
    function counterInc()
    {
        setCounter(state+1)
    }
    function counterDec()
    {
       if(state>0)
       {
        setCounter(state-1)
       }
    }
    return(
        <>
           <h1 className="text-semibold text-[36px] mt-[100px]">Counter</h1>
          <div className="flex h-[150px] w-[50%]  ml-[25%] justify-evenly items-center mt-[20px]  ">
          <button onClick={counterDec} className=" ">-</button>
          <div className="h-[90%] w-[22%] border flex items-center justify-center shadow-md bg-[white]">
          <h1 className="text-[34px] text-semibold">{state}</h1>
          </div>
            <Counter2 check={state}></Counter2>
            <Counter3 check={state}></Counter3>
            <button onClick={counterInc} className=" ">+</button>
           
          </div>
            
           
        </>
    )
}

export default Counter