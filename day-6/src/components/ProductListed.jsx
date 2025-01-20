import "../App.css"
import React from 'react'

function ProductListed(props) {
  return (
    <div>
        <thead>
        <tr >
            <td className='h-[50px] w-[250px] border text-center'>Image</td>
            <td className='h-[50px] w-[180px] border text-center'>Title</td>
            <td className='h-[50px] w-[200px] border text-center'>Price</td>
        </tr>
        </thead>
        <tbody>
        {
           props.arr.map((el)=>{
                return <>
                    <tr>
                        <td className=' w-[200px] h-[200px] border text-center'><img src={el.img} alt="" className='h-[90%] w-[90%]'/></td>
                        <td className=' w-[180px] border text-center'><h1>{el.title}</h1></td>
                        <td className=' w-[200px] border text-center'><h3>{el.price}</h3></td>
                    </tr>
                </>
            })
        }
        </tbody>
    </div>
  )
}

export default ProductListed