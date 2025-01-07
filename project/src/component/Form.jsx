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
  
   <nav className='h-[80px] w-100% border flex justify-between items-center shadow-lg'>
    <div className="n1 h-[100%] w-[15%]  flex justify-center items-center">
    <h1 className='text-[24px] font-bold'>Logo</h1>
    </div>
   <div className="n2">
   <button className='form h-[40px] w-[120px]   ' onClick={()=>{
        setState(true)
    }}>Form</button>

    <button className='product h-[40px] w-[120px] ml-[10px]  mr-[20px]' onClick={()=>{
        setState(false)
    }}>Product</button>
   </div>
   </nav>

    {
        state==true?
    <div className='shadow-lg border h-[390px] w-[35%] flex flex-col m-auto items-center mt-[50px]'>
        <h1 className='mt-[22px] text-[22px]'>Enter Product Detail</h1>
        <input type="text" name="" id=""  className='h-[40px] w-[80%] mt-[15px] pl-[10px]  text-[black]' placeholder='Img URL' value={img} onChange={(e)=>{
            setImg(e.target.value);
        }}/>
        <input type="text" name="" id="" className='h-[40px] w-[80%] mt-[10px] pl-[10px]  text-[black]' placeholder='Title' value={title}   onChange={(e)=>{
            setTitle(e.target.value);
        }} />
        <input type="text" name="" id="" className='h-[40px] w-[80%] mt-[10px] pl-[10px]  text-[black]' placeholder='Price'  value={price} onChange={(e)=>{
            setPrice(e.target.value);
        }} />
        <input type="text" name="" id="" className='h-[40px] w-[80%] mt-[10px] pl-[10px]  text-[black]' placeholder='Description' value={des}  onChange={(e)=>{
            setDes(e.target.value);
        }}  />
        <button onClick={showProduct} className='btn1 h-[45px] w-[80%]  mt-[30px] mb-[20px]'>Submit</button>
    </div>
    :

    <div className='flex w-full'>

        {arr.map((el)=>{
            return <>
           <div className='h-[380px] border w-[22%] shadow-lg mt-[20px] ms-3'>
           <img src={el.img} alt="image" className='h-[60%] w-[100%]' />
            <h2 className='font-bold text-[22px] text-center mt-[10px]'>{el.title}</h2>
            <p className='text-[16px] font-normal text-center'>₹{el.price}</p>
            <p className='text-normal text-center'>{el.des}</p>
            <button className='add h-[40px] w-[40%] mt-[10px] ml-[30%] '>Add to cart</button>
           </div>
            </>
        })}

    </div>
}
    </>
  )
}

export default Form

