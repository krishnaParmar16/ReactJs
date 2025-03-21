import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

  const [state,setState]=useState(JSON.parse(localStorage.getItem("data")) || [])
  const handleDelete=(index)=>{
    const arr=state.filter((el)=>{
      return el.id != index
    })
    setState(arr)
  }
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(state))
  },[state])
  return (
    <div className="ml-[15%] mt-[20px]">
        <thead className=''>
        <tr className='shadow-md' >
            <td className='h-[45px] w-[250px]  text-center text-[18px]'>Image</td>
            <td className='h-[45px] w-[180px]  text-center text-[18px]'>Title</td>
            <td className='h-[45px] w-[180px]  text-center text-[18px]'>Price</td>
            <td className='h-[45px] w-[120px]  text-center text-[18px]'>Delete</td>
            <td className='h-[45px] w-[120px]  text-center text-[18px]'>Edit</td>
        </tr>
        </thead>
        <tbody>
        {
          state.map((el)=>{
            return <>
              <tr className='shadow-md'>
                <td className=' w-[200px] h-[200px]  text-center'><img src={el.img} alt="" className='h-[90%] ml-[5%]  w-[90%]'/></td>
                <td className=' w-[180px]  text-center font-semibold '><h1>{el.title}</h1></td>
                <td className='w-[180px]  text-center'><h3>{el.price}</h3></td>
                <td className='w-[120px]  text-center'><button className=' w-[90%] h-[40px] text-[red] cursor-pointer font-semibold' onClick={()=>handleDelete(el.id)}>Delete</button></td>
                <td className='w-[120px]  text-center'><Link to={`/Product/Edit/${el.id}`}><button className=' w-[90%] h-[40px] text-[green] cursor-pointer font-semibold' >Edit</button></Link></td>
              </tr>
            </>
          })
        }
        </tbody>
    </div>
  )
}

export default Product