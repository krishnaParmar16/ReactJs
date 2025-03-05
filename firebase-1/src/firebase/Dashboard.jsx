import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

function Dashboard() {
  const [uid,setUid]=useState(null);
  const [data,setData]=useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUid(user.uid)
      }
    })
  },[])

  useEffect(()=>{
    if(uid)
    {
      fetchUser()
    }
  },[uid])

  const fetchUser=async()=>{
    await getDoc(doc(db,"Users",uid)).then((res)=>{
      let data=res.data()
      setData(data)
    })
  }  

  return (
    <div className='main text-center bg-[whitesmoke] h-[100vh]'>
    <p className='mt-[100px] text-[22px]'>  Welcome to Dashboard...{data.username}</p>
    </div>
  )
}

export default Dashboard