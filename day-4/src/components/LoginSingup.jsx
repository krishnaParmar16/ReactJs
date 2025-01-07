import { useState } from "react"
import Swal from 'sweetalert2'
import i1 from "./image/i1.png"
import "../App.css"
function LoginSingup()
{

    const [state,setState]=useState(true);
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [arr,setArr]=useState([]);
    // const [check,setCheck]=useState(true)

    const handleSingup=()=>{
        
        let obj={
            username,
            email,
            password
        }

        setArr([...arr,obj])
       
        console.log(arr);

        setUsername("");
        setEmail("");
        setPassword(""); 

     

        // if(username== "" || email == "" || password == "")
        // {
        //     setCheck(false);
        //     Swal.fire("Please Enter all the details..");
        // }
        // else if(arr.filter((el)=>el.email.length!=0))
        // {
        //     setCheck(false);
        //     Swal.fire("Email already registered..");
        // }
        // else if(password.length <=4)
        // {
        //     setCheck(false)
        //     Swal.fire("Please Enter Valid Password..");
        // }
        // else{
        //     setCheck(true)
        // }   
        

        // if(check==true)
        // {
            // let obj={
            //     username,
            //     email,
            //     password
            // }
    
            // setArr([...arr,obj])
    
            // setUsername("");
            // setEmail("");
            // setPassword("");    
        // }
        // console.log(arr);
    }


    const [loginEmail,setLoginEmail]=useState("");
    const [loginPass,setLoginPass]=useState("");
    
   const handleLog=()=>{
    
        if(loginEmail == "" && loginPass == "")
        {   
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter Email And Password",
                 })             
        }
        else{
            let a=arr.filter((el)=>{
                if(el.email == loginEmail)
                {
                    return el.email;
                }
            })
            console.log(a);

           if(a.length==1)
           {
                if(a[0].password==loginPass)
                {
                    Swal.fire({
                        title: "Login Successfully",
                        icon: "success",
                        draggable: true
                      });
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter valid password!",
                      });
                }
           }
           else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter valid email!",
              });
           }
            
           setLoginEmail("")
      setLoginPass("")
        }
    console.log(a);


  
    
   }

    
    return (
       
           <div className="main bg-[#F1F3F6] h-[600px] w-[100%] flex justify-center items-center ">

          { state==true?
           <div className="form h-[530px] w-[65%] border shadow-lg flex">
            <div className="f1 h-[100%] w-[40%] bg-[#2874F0] flex flex-col items-start">
                <h1 className="text-[28px] font-semibold text-[white] mt-[12%] ml-[8%]">Login</h1>
                <p className="text-[19px] text-[#DBDBDB] w-[85%] ml-[8%] mt-[4%]">Get access to your Orders, Wishlist and Recommendations</p>
                <img src={i1} alt="Login Illustration" className="mt-[59%] ml-[15%]" />
            </div>
            <div className="f2 h-[100%] w-[60%] flex flex-col items-center">
                    <input type="email" name="" value={loginEmail} id="email" onChange={(el)=>{
                       setLoginEmail( el.target.value)
                        }} className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15%]" placeholder="Enter Email"/>
                    <input type="password" name="" value={loginPass} id="password" onChange={(el)=>{
                        setLoginPass(el.target.value)
                    }} className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]"  placeholder="Enter Password"/>
                    <p className="text-[12px] text-[gray] ml-[-11%] mt-[25px]">By continuing, you agree to Flipkart's <a href="" className="text-[#2874F0]">Terms of Use</a> and <a href="" className="text-[#2874F0]">Privacy Policy</a>.
                    </p>
                    <button className="h-[45px] w-[85%] bg-[#FB641B] text-[white] rounded-[3px] font-semibold mt-[20px]" onClick={handleLog} >Log in</button>
                    <p className="text-sm font-bold text-[#2874F0] cursor-pointer mt-[40%]" onClick={()=>{
                        setState(false)
                    }}>New to Flipkart? Create an account</p>
            </div>
            </div>
            :
            <div className="form h-[530px] w-[65%] border shadow-lg flex">
            <div className="f1 h-[100%] w-[40%] bg-[#2874F0] flex flex-col items-start">
                <h1 className="text-[28px] font-semibold text-[white] mt-[12%] ml-[8%] w-[80%]">Looks like you're new here!</h1>
                <p className="text-[19px] text-[#DBDBDB] w-[85%] ml-[8%] mt-[4%]">Sign up with your mobile number to get started</p>
                <img src={i1} alt="Login Illustration" className="mt-[50%] ml-[15%]" />
            </div>
            <div className="f2 h-[100%] w-[60%] flex flex-col items-center">
                     <input type="text" name="" value={username} id="username" onChange={(e)=>{
                        setUsername(e.target.value)
                        }}  className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15%]" placeholder="Enter Username"/>
                    <input type="email" name="" value={email} id="s_email" onChange={(e)=>{
                        setEmail(e.target.value)
                        }}  className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]" placeholder="Enter Email"/>
                    <input type="password" name="" value={password}  onChange={(e)=>{
                        setPassword(e.target.value)
                        }} id="s_password" className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]"  placeholder="Enter Password"/>
                    <p className="text-[12px] text-[gray] ml-[-12%] mt-[25px]">By continuing, you agree to Flipkart's <a href="" className="text-[#2874F0]">Terms of Use</a> and <a href="" className="text-[#2874F0]">Privacy Policy</a>.
                    </p>
                    <button className="h-[45px] w-[85%] bg-[#FB641B] text-[white] rounded-[3px] font-semibold mt-[20px]" onClick={handleSingup} >Sign up</button>
                    <button className="h-[45px] w-[85%] bg-[white] shadow-md border  rounded-[3px] font-semibold mt-[20px] text-[#2874F0]" onClick={()=>{
                        setState(true)
                        }}>Existing User? Log in</button>
            </div>
            </div>}
                   
         
           </div>
       
    )
}

export default LoginSingup