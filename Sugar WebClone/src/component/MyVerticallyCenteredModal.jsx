import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';


function MyVerticallyCenteredModal(props) {

  const [state,setState]=useState(true);


  // signup
  const [val,setval]=useState({
    username:"",
    email:"",
    password:"",
  })

  const [val1, setVal1] = useState({
    l_email: "",
    l_password: "",
  });

  const handleChangeSignup=(e)=>{
    const {name,value}=e.target;
    setval({...val,[name]:value})
    }
    // console.log(val);


// login

const handleChangeLogin=(e)=>{
  const {name,value} = e.target;
  setVal1({...val1,[name]:value})
}
// console.log(val1);

// login
const handleSubmitLogin=(e)=>{
  e.preventDefault();

  axios.get(`http://localhost:3000/user?email=${val1.l_email}`)
  .then((res)=>{
    // console.log(res.data);
    if(res.data.length == 0)
    {
      alert("User not registered yet!");
    }
    else{
      if(res.data[0].password === val1.l_password)
        {
            alert("User successfully logged in");
            setVal1({
              l_email: "",
              l_password: "",
            })
        }
        else{
            alert("Password is wrong")
        }
    }
  })

}

// signup
  const handleSubmitSignup=(e)=>{
    e.preventDefault();

    axios.get(`http://localhost:3000/user?email=${val.email}`)
    .then((res)=>{
      if(res.data.length>0)
      {
        alert("Email is already registered. Please use a different email.");
      }
      else{
        axios.post(`http://localhost:3000/user`,val)
        .then((res)=>{
          // console.log(res.data);
          alert("User Registered Successfully..")
          setval({
            username:"",
            email:"",
            password:"",
          })
          setState(true);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    })





  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
    >
      <Modal.Footer className='h-[40px] rounded-[5px]'>
        <button onClick={props.onHide} className='text-[black]  h-[20px] '><i className="fa-solid fa-xmark text-[22px]" ></i></button>
      </Modal.Footer>
      <Modal.Body className='bg-[black] h-[330px] flex rounded-b-[5px] justify-between'>
        <div className="fa h-[100%] w-[60%] flex flex-col">
        <img src="https://www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=2749" className='h-[15%] ml-[32.5%] mt-[10%]' alt="" />
        <h4 className='text-center mt-3 text-white'>Welcome to Sugar</h4>
        <p className='text-center mt-3 text-white font-normal'>Get exciting deals :)</p>
        <h4 className='text-center mt-3 text-white'>Rule the world, one look at a time ;)</h4>
        </div>
        {state==true?<div className="form bg-[white] h-[100%] w-[39%] rounded-[8px]">

        <form action="" className='flex flex-col items-center' onSubmit={handleSubmitLogin} >
           
            <input type="text" className='h-[40px] w-[75%] border-b mt-5 pl-[5px]' value={val1.l_email} name="l_email" id="l-email" placeholder='Email' onChange={handleChangeLogin} />
            <input type="text" className='h-[40px] w-[75%] border-b mt-3 pl-[5px]' value={val1.l_password} name="l_password" id="l-password" placeholder='Password' onChange={handleChangeLogin}/>
            <input type="submit" className='h-[40px] w-[75%] border mt-3 cursor-pointer hover:bg-[black] hover:text-[white]'/>
            <p className='mt-3'>New to Sugar ? <u className='cursor-pointer' onClick={()=>setState(false)} >Create an account</u></p>
        </form>


        </div>
        :
        <div className="form bg-[white] h-[100%] w-[39%] rounded-[8px]">
          <form action="" className='flex flex-col items-center' onSubmit={handleSubmitSignup}>
        
        <input type="text" value={val.username} name="username" id="" className='h-[40px] w-[75%] border-b mt-4 pl-[5px]' placeholder='Username'  onChange={handleChangeSignup} />
        <input type="text" value={val.email} className='h-[40px] w-[75%] border-b mt-3 pl-[5px]' name="email" id="" placeholder='Email' onChange={handleChangeSignup} />
        <input type="text" value={val.password} className='h-[40px] w-[75%] border-b mt-3 pl-[5px]' name="password" id="" placeholder='Password' onChange={handleChangeSignup} />
        <input type="submit" className='h-[40px] w-[75%] border mt-3 cursor-pointer  hover:bg-[black] hover:text-[white]'/>
        <p className='mt-3'>Already have an account ? <u className='cursor-pointer' onClick={()=>setState(true)}>Login</u> </p>
    </form>
        </div>
        }
      </Modal.Body>
      
    </Modal>
  );
}

export default MyVerticallyCenteredModal