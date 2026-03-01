import React from 'react'
import  { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../Context/UserContext'
import Card from '../components/Card'
import { listingDataContext } from '../Context/ListingContext'

function MyBooking() {
   let navigate = useNavigate()
   let {listingData} = useContext(listingDataContext)
   let {userData} = useContext(userDataContext)
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-start
    flex-col gap-[50px] relative'>
      
  <div 
 onClick={()=>navigate("/")}
 className='w-[50px] h-[50px] rounded-[50%] bg-blue-500 
 flex justify-center text-amber-50
items-center cursor-pointer absolute fixed top-[3%] left-[20px] text-2xl '>
  <FaArrowLeftLong />
</div>

<div className='w-[50%] h-[10%] border-2px border-[2px] border-[#99bacb] p-[15px]
flex items-center justify-center text-[30px] rounded-md text-[#44b5cc] mt-[20px] md:w-[600px]'>
My Booking
</div>
     
<div className='w-[100%] h-[90%] flex items-center justify-center
 gap-[25px] flex-wrap mt-[30px]'>

   {userData.booking.map((list) =>(
     <Card title={list.title}
     landmark ={list.landmark}
     city = {list.city}
      image1 ={list.image1}
      image2={list.image2}
    image3={list.image3}
    rent={list.rent}
    id={list._id}
    ratings={list.ratings}
    isBooked={list.isBooked}
    host={list.host}
    /> ))}
   </div>

    </div>
  )
}

export default MyBooking