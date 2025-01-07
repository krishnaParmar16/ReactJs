import React from 'react'
import { useState } from 'react'
import "../App.css"

function Form() {

    const [state,setState] = useState(true)
    const [img,setImg]=useState("");
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [des,setDes]=useState("");
    const [arr,setArr]=useState([])
   
    const showProduct=()=>{
        let obj={
            img,
            title,
            price,
            des
        }
        setArr([...arr,obj]);
        console.log(arr);
        
        setImg("");
        setPrice("");
        setTitle("");
        setDes("");

        alert("Product added Successfully")
       }


  return (

    <>
  
    <button className='form h-[40px] w-[120px] border ml-[40%]  mb-[50px] mt-[20px]' onClick={()=>{
        setState(true)
    }}>Form</button>

    <button className='product h-[40px] w-[120px] border ml-[10px] mb-[50px] mt-[20px]' onClick={()=>{
        setState(false)
    }}>Product</button>

    {
        state==true?
    <div className='shadow-lg border h-[350px] w-[35%] flex flex-col m-auto items-center'>
        <h1 className='m-auto '>Enter Product Detail</h1>
        <input type="text" name="" id=""  className='h-[40px] w-[90%] border-b mt-[10px] pl-[10px]  text-[black]' placeholder='Img URL' value={img} onChange={(e)=>{
            setImg(e.target.value);
        }}/>
        <input type="text" name="" id="" className='h-[40px] w-[90%] border-b mt-[10px] pl-[10px]  text-[black]' placeholder='Title' value={title}   onChange={(e)=>{
            setTitle(e.target.value);
        }} />
        <input type="text" name="" id="" className='h-[40px] w-[90%] border-b mt-[10px] pl-[10px]  text-[black]' placeholder='Price'  value={price} onChange={(e)=>{
            setPrice(e.target.value);
        }} />
        <input type="text" name="" id="" className='h-[40px] w-[90%] border-b mt-[10px] pl-[10px]  text-[black]' placeholder='Description' value={des}  onChange={(e)=>{
            setDes(e.target.value);
        }}  />
        <button onClick={showProduct} className='h-[45px] w-[90%] border rounded-[20px] mt-[30px] mb-[20px]'>Submit</button>
    </div>
    :

    <div className='flex w-full'>

        {arr.map((el)=>{
            return <>
           <div className='h-[300px] border w-[20%] shadow-lg mt-[20px] ms-3'>
           <img src={el.img} alt="image" className='h-[60%] w-[100%]' />
            <h2 className='font-bold text-[22px] ml-[10px] mt-[10px]'>{el.title}</h2>
            <p className='text-[16px] font-normal ml-[10px]'>₹{el.price}</p>
            <p className='text-normal ml-[10px]'>{el.des}</p>
           </div>
            </>
        })}

    </div>
}
    </>
  )
}

export default Form

