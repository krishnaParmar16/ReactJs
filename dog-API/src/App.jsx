import { useState,useEffect } from 'react'
import './App.css'

function App() {

  // const [state,setState]=useState(0);
  
  const [arr,setArr]=useState([]);

  function handleAPI()
  {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setArr(res)
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  useEffect(()=>{
   
    handleAPI()
  
  },[]);

  return (
    <>
    <h1 className='font-bold text-[24px] ml-[45%] mt-[20px] mb-[20px]'>Dog API</h1>
    <div className='h-[450px] w-[35%]  m-auto'>
    <div className='h-[90%] w-[100%]  flex justify-center items-center '>
    <img src={arr.message} alt="image"  className='h-[90%] w-[90%] '/>
    </div>
    <button onClick={handleAPI} className='h-[10%] w-[30%] ml-[35%] '>Change</button>
    </div>
    </>
  )
}

export default App
