import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [arr,setArr]=useState(null);
  const [index,setIndex]=useState(null);
  useEffect(()=>{
    let arr=JSON.parse(localStorage.getItem("data")) || [];
    setArr(arr)
  },[])

  const handleSubmit=()=>{
       if(index==null) 
        {
          let obj={
          id:Date.now(),
          username:username,
          email:email,
          password:password
        }
        setArr([...arr,obj])
        localStorage.setItem("data",JSON.stringify([...arr,obj]));
        }
        else{
          const Singledata=arr.find((el)=>{
            return el.id == index
          });
          // console.log(index);
          
          Singledata.id=index;
          Singledata.username=username;
          Singledata.email=email; 
          Singledata.password=password;

          localStorage.setItem("data",JSON.stringify(arr))
        }

    setUsername("")
    setEmail("")
    setPassword("")
    setIndex(null)
  }
  // console.log(arr);

 

  const handleDelete=(id)=>{
    const a=arr.filter((el)=>{
      return el.id != id
    })
    setArr(a)
    localStorage.setItem("data",JSON.stringify(a))
  }
  
  const handleEdit=(id)=>{
    console.log(id);
    
    const singleData=arr.find((el)=>{
      return el.id ==id
    })
    setUsername(singleData.username);
    setEmail(singleData.email);
    setPassword(singleData.password);
    setIndex(id);
  }


  return (
    <>
    <div>
    <div className='h-[300px] w-[28%] border-1 flex flex-col justify-center items-center m-auto mt-[20px]' >
    <input type="text" name="username" className='h-[40px] border-b w-[70%] mt-[10px]' onChange={(e)=>setUsername(e.target.value)}  placeholder="Username" id="username" value={username} />
    <input type="text" name="email"className='h-[40px] border-b w-[70%] mt-[10px]'  onChange={(e)=>setEmail(e.target.value)} id="email" placeholder='Email' value={email} />
    <input type="text" name="password" className='h-[40px] border-b w-[70%] mt-[10px]' id="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
    <button className='h-[40px] w-[70%] border mt-[20px] cursor-pointer' onClick={handleSubmit}>{ index==null ? "Submit" : "Update"}</button>
    </div>

    <table className='w-[80%] border-1 m-auto mt-[20px]'>
      <thead>
        <tr className='h-[35px] border-1'>
          <td className='border-1 text-center'>Id</td>
          <td className='border-1 text-center'>Username</td>
          <td className='border-1 text-center'>Email</td>
          <td className='border-1 text-center'>Password</td>
          <td className='border-1 text-center' colSpan={2}>Action</td>
        </tr>
      </thead>
      <tbody>
        { 
        arr?
          arr.map((e,index)=>{
            return  <tr className='h-[35px] border-1' key={index}>
              <td className='border-1 text-center'>{e.id}</td>
              <td className='border-1 text-center'>{e.username}</td>
              <td className='border-1 text-center'>{e.email}</td>
              <td className='border-1 text-center'>{e.password}</td>
              <td className='border-1 text-center w-[120px]'><button onClick={()=>handleDelete(e.id)}>Delete</button></td>
              <td className='border-1 text-center w-[120px]'><button onClick={()=>handleEdit(e.id)}>Edit</button></td>
            </tr>
          }):
          <tr>
      <td>
        <p>Your content here</p>
      </td>
    </tr>
        }
      </tbody>
    </table>
      
    </div>
    </>
  )
}

export default App
