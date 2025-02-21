import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddData, DeleteData, UpdateData } from '../feature/CrudSlice';

function crud() {
    
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [editIndex,setEditIndex]=useState(null)

     const dispatch=useDispatch();    
     
     const data=useSelector((state)=>{
        return state.crudReducer.student;
     })
    //  console.log(data);
    
     const handleAddData=()=>{
        
        if(editIndex==null)
        {
            const obj={
                id:Date.now(),
                username:username,
                email:email,
                password:password
            }
            dispatch(AddData(obj))
        }
        else{
            dispatch(UpdateData({editIndex,username,email,password}));
        }

        setUsername("");
        setEmail("");
        setPassword("");
      
     }

     const handleDelete=(id)=>{
        dispatch(DeleteData(id))
     }

     const handleEdit=(id)=>{
        const singleData=data.find((el)=>{
            return el.id == id;
        })
        setUsername(singleData.username)
       setEmail(singleData.email)
       setPassword(singleData.password)
        setEditIndex(id)
     }

  return (
    <div className='bg-[whitesmoke] pt-[50px]'>
        
       <div className='h-[250px]  flex flex-col justify-center items-center w-[25%] m-[auto]  shadow-md'>
       <input type="text" placeholder='Username' value={username} className='h-[30px] w-[80%]  border-b ps-[10px]' name="username" onChange={(e)=>setUsername(e.target.value)}   id="" />
        <input type="text" placeholder='Email' value={email} className='h-[30px] w-[80%]  border-b mt-[8%] ps-[10px]' name="email" onChange={(e)=>setEmail(e.target.value)}   id="" />
        <input type="text" placeholder='Password' value={password} className='h-[30px] w-[80%]  border-b mt-[8%] ps-[10px]'  name="password" onChange={(e)=>setPassword(e.target.value)}  id="" />
        <input type="submit" className='h-[30px] w-[80%]  border-1 mt-[8%] cursor-pointer' onClick={handleAddData}  value={
            editIndex==null?"Add":"Update"
        } name="" id="" />

       </div>

        <table className=''>
            <tr className='border-1'>
                <td className='border-1 h-[35px] text-center w-[150px]'>Id</td>
                <td className='border-1 h-[35px] text-center w-[150px]'>Name</td>
                <td className='border-1 h-[35px] text-center w-[150px]'>Email</td>
                <td className='border-1 h-[35px] text-center w-[150px]'>Password</td>
                <td className='border-1 h-[35px] text-center' colSpan={2}>Actions</td>
            </tr>
            {   
                data && data.map((el,i)=>{
                    return <>
                     <tr className='border-1' key={i}>
                        <td className='border-1 h-[35px] text-center'>{el.id}</td>
                        <td className='border-1 h-[35px] text-center'>{el.username}</td>
                        <td className='border-1 h-[35px] text-center'>{el.email}</td>
                        <td className='border-1 h-[35px] text-center'>{el.password}</td>
                        <td className='border-1 h-[35px] text-center'><button className='w-[100px] cursor-pointer' onClick={()=>handleDelete(el.id)}>Delete</button></td>
                        <td className='border-1 h-[35px] text-center'><button className='w-[100px] cursor-pointer' onClick={()=>handleEdit(el.id)}>Edit</button></td>
            </tr>
                    </>
                })
            }
        </table>
       
    </div>
  )
}

export default crud
