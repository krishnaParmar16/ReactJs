import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {featchApi}  from '../features/Slice'

export default function Api() {

  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(featchApi())
  },[dispatch])

  const record = useSelector((state)=>{
    return state.apiReducer
  })

  if(record.loading == true)
  {
    return <p>Loading....</p>
  }
  // console.log(record);  

  return (
    <div>
      {
        record.data &&
        record.data.map((el,i)=>{
          return <ul key={i}>
            <li>{el.title}</li>
          </ul>
          
        })
      }
    </div>
  )
}


