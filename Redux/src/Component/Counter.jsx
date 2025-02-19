import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from "../feature/CounterSlice"

function Counter() {
  const dispatch=useDispatch();
    const count = useSelector((state)=>{
      return  state.counterReducer.count;
    })

  return (
    <div className='h-[200px]  w-[200px] shadow-md flex flex-col justify-center items-center m-auto mt-[50px]'>
        <h1 className='font-semibold text-[32px]'>Counter</h1>
        <h1 className='font-semibold text-[24px] mt-[10px] mb-[20px]'>{count}</h1>
        <div>
        <button onClick={()=>dispatch(increment())} className='h-[35px] cursor-pointer w-[35px] border-1'>+</button>
        <button onClick={()=>dispatch(decrement())} className='h-[35px] cursor-pointer ml-[10px] w-[35px] border-1'>-</button>
        </div>
    </div>
  )
}

export default Counter