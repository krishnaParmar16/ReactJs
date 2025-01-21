import React, { useState } from 'react'
import "../App.css"
function Form() {

    const [state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        skill:[""]
    })
    // const [skill,setskill]=useState([""])

    const addskill=()=>{
        setState({...state,skill:[...state.skill,""]})
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        if(isNaN(name))
        {
            setState({...state,[name]:value})
        }
        else{
            const arr=[...state.skill]
            arr[name]=value
            setState({...state,skill:arr})
        }
    }
    // console.log(state);
    
    const deleteSkill=(e)=>{
        const index=e.target.name
        console.log(index);
        // const arr=[...state.skill]
        // arr.splice(index,1);
        // setState({...state,skill:arr})
        state.skill.splice(index,1)
        setState({...state,skill:[...state.skill]})
    }

    const [arr,setarr]=useState([]);
    const handleSubmit=(form)=>{
        form.preventDefault()
        setarr([...arr,state])

        alert("Data added successfully")

        setState({
            firstName: "",
            lastName: "",
            email: "",
            skill: [""],
        });
    }

    console.log(arr);
    
  return (
    <div className='h-[auto] w-[35%]  ml-[32.5%] mt-[50px] drop-shadow-md shadow-xl '>
        <h1 className='mt-[20px] text-[22px] text-center font-semibold'>Form</h1>
         <form action="" className='flex flex-col items-center' onSubmit={handleSubmit}>
            <label htmlFor="" >First Name</label>
        <input type="text" name="firstName" id="" className=''  placeholder='Enter your first name' onChange={handleChange}  />
   
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" id=""  placeholder='Enter your last name' onChange={handleChange}  />
    
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" placeholder='Enter your email' onChange={handleChange} />
       
    <label htmlFor="">Skills<input type="button" name="" className='h-[30px] bg-[black] text-[white] cursor-pointer text-[12px] ml-[20px] w-[95px]  ' id="" value='Add Skill ' onClick={addskill}/></label>
    
       {
        state.skill.map((el,index)=>{
            return <div className='flex mb-[0px] w-[70%]'>
                 <input type="text" className='w-[75%]' name={index} id="" placeholder='Enter your skill' onChange={handleChange}  />
                <input type="button" name={index} id="" value='Delete' onClick={deleteSkill}  className='h-[45px] w-[25%] cursor-pointer border text-[12px] bg-[red] text-[white]' />
            </div>
        })
        }

        <input type="submit" className='bg-[black] text-[white] mb-[20px] cursor-pointer hover:bg-[transparent] hover:text-[black] hover:border-[black] mt-[10px] delay-75' />
    </form>
    </div>
  )
}

export default Form