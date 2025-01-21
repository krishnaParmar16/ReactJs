import React from 'react'
import { useState } from 'react'
import ProductForm from './ProductForm'
import ProductListed from './ProductListed'
import Swal from 'sweetalert2'

function Product() {

  const [btn,setBtn]=useState(true);
  const [state,setState]=useState({
    img:"",
    title:"",
    price:""
 })

 const handle=(e)=>
 {
  const {name,value}=e.target;
  setState({...state,[name]:value})
  // console.log(state);
 }


const [obj,setobj]=useState({
  img:true,
  title:true,
  price:true
})

const handleblur=(e)=>{
  const {name,value}= e.target

  if(name=="img")
  {
    console.log(name);
    // const img= /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg|webp))$/
    if(value == "")
    {
      setobj({...obj, img:false})
    }
    // else if(img.test(state.img)==false)
    // {
    //   setobj({...obj,img:false})  
    // }
  }
  if(name=="title")
  {
    console.log(name);
    const title=  /^[a-zA-Z0-9\s\-_,.!?()]{3,100}$/
    if(value == "")
    {
      setobj({...obj,title:false})
    }
    else if(title.test(state.title)==false)
    {
      setobj({...obj,title:false})  
    }
  }
  if(name=="price")
  {
    console.log(name);
    const price=  /^\d{1,8}(\.\d{1,2})?$/
    if(value == "")
    {
      setobj({...obj,price:false})
    }
    else if(price.test(state.price)==false)
    {
      setobj({...obj,price:false})  
    }
  }

}
console.log(obj.img,obj.title,obj.price);

const handlefocus=(e)=>{
  const name=e.target.name

  if(name=="img")
  {
    setobj({...obj,img:true})
  }
  if(name=="title")
  {
    setobj({...obj,title:true})
  }
  if(name=="price")
  {
    setobj({...obj,price:true})
  }

}

const [arr,setArr]=useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  
  if(obj.img == false || obj.title == false || obj.price == false)
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill all the detail",
});
  }
  else{
    setArr([...arr, state])
 
    Swal.fire({
      icon: "success",
      title: "",
      text: "Data Added Successfully",
  })
  
  setState({
    ...state, img: "",
    title: "",
    price: "",
})

  }


}
// console.log(arr);

  return (
    <div>

        <button onClick={()=>setBtn(true)} className='h-[40px] w-[120px]  cursor-pointer bg-[black] text-[white] drop-shadow-md  hover:bg-white hover:text-black delay-75 ml-[40.5%] mt-[20px]'>Form</button>
        <button onClick={()=>setBtn(false)} className='h-[40px] w-[120px]  cursor-pointer bg-[white] text-[black] drop-shadow-md  hover:bg-[black] hover:text-[white] delay-75 mt-[20px]'>Product</button>
      {
        btn==true?
        <ProductForm handle={handle} handleSubmit={handleSubmit} handlefocus={handlefocus} handleblur={handleblur} obj={obj}></ProductForm>:
        <ProductListed arr={arr}></ProductListed>
      }

    </div>
  )
}

export default Product