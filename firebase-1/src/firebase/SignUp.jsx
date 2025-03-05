import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { auth, db } from '../../firebaseconfig'
import { doc, setDoc } from 'firebase/firestore'

function SignUp() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    const handleSignup=async()=>{
      await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
        // console.log(res);
        setDoc(doc(db,"Users",res.user.uid),{username,email})
        navigate("/dashboard")
      })
    }
  return (
    <div className='bg-[whitesmoke] h-[100vh] main'>
        <div className='h-[300px] w-[25%] shadow-lg flex flex-col justify-center items-center m-auto mt-[100px] bg-[white]'>
        <h1>Sign Up</h1>
        <input type="text" placeholder='Username'className='h-[35px] w-[80%] border-1 mt-[10px] ps-[8px]' onChange={(e)=>setUsername(e.target.value)}  name="" id="" />
        <input type="text" placeholder='Email' className='h-[35px] w-[80%] border-1 mt-[10px] ps-[8px]' onChange={(e)=>setEmail(e.target.value)} name="" id="" />
        <input type="text" placeholder='Password'className='h-[35px] w-[80%] border-1 mt-[10px] ps-[8px]' onChange={(e)=>setPassword(e.target.value)}  name="" id="" />
        <button className='h-[35px] w-[80%] border-1 mt-[10px] cursor-pointer hover:bg-black hover:text-white' onClick={handleSignup}>Sign Up</button>
        <h1 className='mt-[10px]'>Already have an account? <span className='cursor-pointer hover:underline hover:text-[red]'><Link to={"/signin"}>Sign In</Link></span></h1>
        </div>

    </div>
  )
}

export default SignUp