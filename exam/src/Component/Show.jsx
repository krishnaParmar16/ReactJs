
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteApi, fetchApi } from '../feature/apiSlice';
import { Link  } from 'react-router';


export default function Show() {
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchApi())
    },[])

    const record=useSelector((state)=>{
        return state.apiReducer
    })
    
    const handleDeleteData = (id) => {
        setTimeout(() => {
            dispatch(deleteApi(id))
        }, 300);
    };


    if(record.loading == true)
      {
        return <p>Loading....</p>
      }

  return (
    <div className='h-[350px] w-[100%] grid grid-cols-5 gap-4 mt-[50px]'>
    {
         record.data ?
         record.data.map((el,i)=>{
           return <div key={i} className='h-[400px] mt-1 shadow-lg'>
            <div className="img h-[65%] w-[100%]  flex justify-center items-center">
            <img src={el?.img} alt="image"  className='h-[100%] w-[100%]'/>
            </div>
          <div className="txt h-[35%] w-[100%]  ps-3">
          <p className='font-semibold capitalize'>{el?.title}</p>
          <p className='text-[16px] capitalize'>{el?.des}</p>
          <p className='text-[16px] '>{el.catagory}</p>
          <Link to={`/form/${el.id}`}><button className='h-[30px] w-[32%]  cursor-pointer mt-[2%] text-green-600 shadow-md'>Edit</button></Link>
          <button className='h-[30px] w-[32%] ms-[3%]  cursor-pointer mt-[2%] text-red-600 shadow-md' onClick={()=>{
            return handleDeleteData(el.id)
          }}>Delete</button>
          </div>
           </div> 
           
         }): <p>Loading....</p>
    }
    </div>
  )
}
