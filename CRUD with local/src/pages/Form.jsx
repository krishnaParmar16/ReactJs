import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4  } from 'uuid';

function Form() {

  const [state,setState]=useState({
    img:"",
    title:"",
    price:"",
    id:v4(),
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setState({...state,[name]:value})
  }
  // console.log(state);

  const [arr,setArr]=useState(JSON.parse(localStorage.getItem("data"))||[]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setArr([...arr,state])
    setState({
      img:"",
      title:"",
      price:"",
      id:v4(),
    })
  }

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(arr)) 
  },[arr])
  console.log(arr);
  
  

  return (
    <div className='h-[300px] w-[28%] ml-[36%] mt-[50px] shadow-lg'>
        <form action="" className='flex flex-col' onSubmit={handleSubmit}>
            <input type="text" placeholder='Img URL' value={state.img} onChange={handleChange} className='h-[40px] w-[80%] border-b pl-[5px] ml-[10%] mt-[30px]' name="img" id="" />
            <input type="text" name="title" value={state.title} onChange={handleChange} className='h-[40px] w-[80%] border-b pl-[5px] ml-[10%] mt-[20px]' placeholder='Title' id="" />
            <input type="text" name="price"  value={state.price} onChange={handleChange}className='h-[40px] w-[80%] border-b pl-[5px] ml-[10%] mt-[20px]' placeholder='Price' id="" />
            <input type="submit" name="" id="" className='h-[40px] w-[80%] border ml-[10%] mt-[30px] mb-[20px] cursor-pointer' />
        </form>
    </div>
  )
}

export default Form