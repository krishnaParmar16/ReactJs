import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const [state,setState]=useState({
        username:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
    }
    // console.log(state);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
       

        axios.get(`http://localhost:3000/user?email=${state.email}`)
            .then((res)=>{
                // check email is already register or not
                if(res.data.length > 0)
                {
                    alert("Email is already registered. Please use a different email.")
                }
                // if not then post the data
                else{
                    axios.post(`http://localhost:3000/user`,state)
                    .then((res)=>{
                        // console.log(res.data);
                        alert("User Registered Successfully..");
                        navigate("/Login")
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            })
      
    }


  return (
    <div className='h-[370px] w-[30%] border ml-[36%] mt-[80px]'>
    <form action="" className='flex flex-col items-center' onSubmit={handleSubmit}>
        <h1 className='text-[20px] font-semibold mt-[20px]'>Sign up</h1>
        <input type="text" name="username" id="" className='h-[40px] w-[75%] border-b mt-[20px] pl-[5px]' placeholder='Username' onChange={handleChange} />
        <input type="text" className='h-[40px] w-[75%] border-b mt-[20px] pl-[5px]' name="email" id="" placeholder='Email' onChange={handleChange}/>
        <input type="text" className='h-[40px] w-[75%] border-b mt-[20px] pl-[5px]' name="password" id="" placeholder='Password' onChange={handleChange}/>
        <input type="submit" className='h-[40px] w-[75%] border mt-[20px] cursor-pointer'/>
        <p className='mt-[20px]'>Already have an account ? <u><Link to="/Login">Login</Link></u> </p>
    </form>
</div>
  )
}

export default Signup