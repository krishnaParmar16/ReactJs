import React from 'react'
import { useState } from 'react'
import ProductForm from './ProductForm'
import ProductListed from './ProductListed'

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
 const [arr,setArr]=useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  setArr([...arr, state])
}
// console.log(arr);

const [obj,setobj]=useState({
  set1:true,
  set2:true,
  set3:true
})

const handleblur=(e)=>{
  const name=e.target.name

  if(name=="img")
  {
    console.log(name);
  }
  if(name=="title")
  {
    console.log(name);
  }
  if(name=="price")
  {
    console.log(name);
  }

}
console.log(obj.set1,obj.set2,obj.set3);

const handlefocus=()=>{

}

  return (
    <div>

        <button onClick={()=>setBtn(true)}>Form</button>
        <button onClick={()=>setBtn(false)}>Product</button>
      {
        btn==true?
        <ProductForm handle={handle} handleSubmit={handleSubmit} handlefocus={handlefocus} handleblur={handleblur} obj={obj}></ProductForm>:
        <ProductListed arr={arr}></ProductListed>
      }

    </div>
  )
}

export default Product