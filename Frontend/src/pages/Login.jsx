import React, { useState } from 'react'
import pic from "../assets/HappyStay.png"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from 'react';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';



function Login() {
const [show, setShow] = useState(false)
let {serverUrl} = useContext(authDataContext)
let navigate= useNavigate()
const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const handleLogin = async (e) => {
  try {
    e.preventDefault()
    let result = await axios.post(serverUrl + "/api/auth/login",{
        email,
        password
    },{withCredentials:true}) 
    console.log(result)
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-center gap-4 relative'>
     
      <div 
       onClick={()=>navigate("/")}
          className='w-[50px] h-[50px] rounded-[50%] bg-blue-500 
            flex justify-center text-amber-50
            items-center cursor-pointer 
            absolute fixed top-[3%] left-[20px] text-2xl '>
         <FaArrowLeftLong />
          </div>

    <img 
    className='w-[180px] object-contain' 
    src={pic} 
    alt="HappyStay Logo" 
  />

  <form
  onSubmit={handleLogin}
   className='max-w-[500px] w-[90%] flex flex-col items-start gap-4 '>

    <h1 className='text-[30px]'>
      Welcome To 
      <span className='font-semibold text-blue-400'> HappyStay</span>
    </h1>

    <div className='w-full flex flex-col gap-2'>
      <label className='text-[20px] font-semibold'>Email</label>
      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
       placeholder='Enter Email'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

    <div className='w-full flex flex-col gap-2  relative'>
      <label className='text-[20px] font-semibold'>Password</label>
      <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       placeholder='Enter Password'
       type={show?"text":"password"} 
      className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4 ' required />
      {!show && <FaEye 
      onClick={()=>setShow(prev=>!prev)}
      className='w-[22px] h-[22px] absolute right-[2%] bottom-[10px] cursor-pointer' />
      }
      {show && <FaEyeSlash
      onClick={()=>setShow(prev=>!prev)} 
      className='w-[22px] h-[22px] absolute cursor-pointer right-[2%] bottom-[10px]' />
      }
       </div>
       
       


    <button
     className='w-full py-2 bg-blue-500 text-white text-[18px] rounded-lg font-bold'>
      Login
    </button>
     <div onClick={()=>navigate("/signup")} >
    <p>Want to Create an Account? <span className='text-blue-600 text-[18px] cursor-pointer'>Signup</span></p>
     </div>

  </form>
</div>

  )
}
  
    

export default Login