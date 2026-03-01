import React, { useContext, useState } from 'react'
import { userDataContext } from '../Context/UserContext'
import { listingDataContext } from '../Context/ListingContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GiCancel, GiConfirmed } from 'react-icons/gi';
import { bookingDataContext } from '../Context/BookingContext';



function Card({title,landmark,image1,image2,image3,rent,city,id,ratings,isBooked,host}) {
  let {userData}=useContext(userDataContext)
  let {handleViewCard} = useContext(listingDataContext)
  let navigate = useNavigate()
  const [popup, setPopup] = useState(false)
  let {cancelBooking} = useContext(bookingDataContext)
  
  const handleClick = async ()=>{
   if(userData){
    handleViewCard(id)
   }
   else{
   navigate("/login")
   }
  }
  return (
    <div 
    onClick={()=>!isBooked?handleClick():null}
    className='w-[330px] max-w-[85%] h-[450px] flex items-start relative 
    justify-start flex-col rounded-lg cursor-pointer shadow-2xl p-2 z-[10] '>
    
       {isBooked && <div className='text-green-500 bg-white rounded-lg 
       absolute  flex p-[5px] items-center justify-center m-2
       right-1 top-1 gap-[5px]'>Booked <GiConfirmed className='w-[20px] h-[20px] text-green-500'/> </div>}
      
      {isBooked && host == userData?._id && <div 
      onClick={()=>setPopup(prev =>!prev)}
      className='text-red-500 bg-white rounded-lg
        absolute flex  p-[5px] mr-2 items-center justify-center 
       right-1 top-[50px] gap-[5px]'> Cancel <GiCancel className='w-[20px] h-[20px] text-red-500'/> </div>}

     
     {popup && <div className='w-[300px] h-[100px] bg-[#ffffffdf]
     absolute top-[100px] left-[13px] rounded-lg  '>

       <div className='w-[100%] h-[100%] flex-col  items-start justify-center
       rounded-lg overflow-auto text-[20px] p-[10px]'>
       Booking Cancel!
       <div className='w-[100%] h-[50%] text-[18px] font-semibold flex items-start mt-2
    justify-center gap-[10px] text-[#986b6b]'>Are You Sure ?
      <button
      onClick={()=>{cancelBooking(id);setPopup(false)}}
       className='px-[20px] bg-cyan-500
    text-white rounded-lg hover:bg-slate-600'>Yes</button> 
    <button
    onClick={()=>setPopup(false)}
     className='px-[20px] bg-cyan-500
    text-white rounded-lg hover:bg-slate-600'>No</button> </div> 
    </div>
    </div>
    }


     <div className='w-[100%] h-[67%] rounded-lg overflow-auto flex no-scrollbar'>
       <img src={image1} alt="" className='w-[100%] flex-shrink-0 ' />
       <img src={image2} alt="" className='w-[100%]  flex-shrink-0' />
       <img src={image3} alt="" className='w-[100%]  flex-shrink-0' />
    </div>
     
        <div className='w-[100%] h-[33%] py-[20px] flex flex-col
        gap-[2px] '>
       <div className='flex items-center justify-between text-[18px]'>
       <span className='w-[80%] text-ellipsis overflow-hidden 
           font-semibold text-nowrap text-[#4a3434] '>Near, {landmark.toUpperCase()},{city.toUpperCase()}</span>
           <span className='flex items-center justify-center gap-2'><FaStar color='cyan' />{ratings}</span>
     </div>
           <span className='text-[15px] w-[80%] text-ellipsis overflow-hidden text-nowrap '>{title.toUpperCase()}</span>
           <span className='text-[16px] font-semibold text-[#986b6b] '>Rs.{rent}/day</span>
        </div>

    </div>
  )
}

export default Card