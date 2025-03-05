import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { auth } from '../../firebaseconfig'

function SignIn() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handleSignin = async ()=>{
    await signInWithEmailAndPassword(auth,email,password).then((res)=>{
      console.log(res);
      navigate("/dashboard");
    })
  }

  return (
    <div className='main bg-[whitesmoke] h-[100vh]'>
    <div className='h-[280px] shadow-lg w-[25%] bg-[white] flex flex-col justify-center items-center m-auto mt-[100px]'>
    <h1>Sign In</h1>
    <input type="text" placeholder='Email' className='h-[35px] w-[80%] border-1 mt-[10px] ps-[8px]' onChange={(e)=>setEmail(e.target.value)} name="" id="" />
    <input type="text" placeholder='Password'className='h-[35px] w-[80%] border-1 mt-[10px] ps-[8px]' onChange={(e)=>setPassword(e.target.value)}  name="" id="" />
    <button className='h-[35px] w-[80%] border-1 mt-[10px] cursor-pointer hover:bg-black hover:text-white'onClick={handleSignin}>Sign In</button>
    <h1 className='mt-[10px]'>New User ? <span className='cursor-pointer hover:underline hover:text-[red]'><Link to={"/"}>Create an account</Link></span></h1>
    </div>

</div>
  )
}

export default SignIn