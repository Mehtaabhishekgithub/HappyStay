import axios from 'axios'
import React, { createContext,  useContext, useState } from 'react'
import { authDataContext } from './AuthContext'
import { userDataContext } from './UserContext'
import { listingDataContext } from './ListingContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const bookingDataContext = createContext()


function BookingContext({children}) {
 let { getCurrentUser } = useContext(userDataContext)
let { getListing } = useContext(listingDataContext)
  const [checkIn,setcheckIn] = useState("")
  const [checkOut,setcheckOut] = useState("")
  const [total,setTotal] = useState(0)
  const [night,setNight] = useState(0)
  let {serverUrl} = useContext(authDataContext)
  const [bookingData, setBookingData] = useState([])
  const [booking, setBooking] = useState(false)
let navigate = useNavigate()



 const handleBooking = async (id)=>{
  setBooking(true)
  try {
    let result = await axios.post( serverUrl + `/api/booking/create/${id}`,{
      checkIn,
      checkOut,
      totalRent:total },{withCredentials:true})
    await getCurrentUser()
    await getListing()
    setBookingData(result.data)
    console.log(result.data)
    toast.success("Booked succesfully")
    setBooking(false)
    navigate("/booked")

  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
    setBookingData(null)
    setBooking(false)
  }
 }

 const cancelBooking = async (id)=>{
  try {
      let result = await axios.delete( serverUrl + `/api/booking/cancel/${id}`,{withCredentials:true})
    await getCurrentUser()
    await getListing()
    console.log(result.data)
    toast.success("Booking Cancelled succesfully")
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
 }

  let value={
    checkIn,setcheckIn,
    checkOut,setcheckOut,
    total,setTotal,
    night,setNight,
    bookingData, setBookingData,
    handleBooking,cancelBooking,
    booking, setBooking
  }

  return (
    <div>
      <bookingDataContext.Provider value={value}>
    {children}
      </bookingDataContext.Provider>
    </div>
  )
}

export default BookingContext