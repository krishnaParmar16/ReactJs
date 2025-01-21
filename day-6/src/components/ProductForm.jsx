import React, { useState } from 'react'
import "../App.css"

function ProductForm({handle,handleSubmit,handleblur,handlefocus,obj}) {
  return (
    <div className='h-[350px] w-[30%] border shadow-md ml-[35.5%] mt-[2%]'>
      <form action="" onSubmit={handleSubmit} className='flex flex-col items-center'>
        <input type="text" name="img" id="img" className='border-b-[1px]' style={{borderColor :  obj.img==false ? "red" : ""}}  placeholder='Img URL' onChange={handle} onBlur={handleblur} onFocus={handlefocus} />
        {
          obj.img==false?<p className='text-[14px] self-start ml-[11%] text-[red]'>Enter Img URL</p>:""
        }
        <input type="text" name="title" id="" placeholder='Title' style={{borderColor :  obj.title==false ? "red" : ""}} className='border-b-[1px]' onChange={handle}  onBlur={handleblur} onFocus={handlefocus} />
        {
          obj.title==false ? <p className='text-[14px] self-start ml-[11%] text-[red]'>Enter Title</p>:""
        }
        <input type="text" name="price" id="" placeholder='Price' style={{borderColor :  obj.price==false ? "red" : ""}}  className='border-b-[1px]' onChange={handle}  onBlur={handleblur} onFocus={handlefocus}/>
        {
          obj.price==false ? <p className='text-[14px] self-start ml-[11%] text-[red]'>Enter Price</p>:""
        }
        <input type="submit" name="" id="btn" />
      </form>
    </div>
  )
}

export default ProductForm