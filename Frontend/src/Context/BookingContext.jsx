import axios from 'axios'
import React, { createContext,  useContext, useState } from 'react'
import { authDataContext } from './AuthContext'
import { userDataContext } from './UserContext'
import { listingDataContext } from './ListingContext'

export const bookingDataContext = createContext()


function BookingContext({children}) {
 let { getCurrentUser } = useContext(userDataContext)
let { getListing } = useContext(listingDataContext)
  const [checkIn,setcheckIn] = useState("")
  const [checkOut,setcheckOut] = useState("")
  const [total,setTotal] = useState(0)
  const [night,setNight] = useState(0)
  let {serverUrl} = useContext(authDataContext)
  const [bookingdata, setBookingdata] = useState([])

 const handleBooking = async (id)=>{
  try {
    let result = await axios.post( serverUrl + `/api/booking/create/${id}`,{
      checkIn,
      checkOut,
      totalRent:total },{withCredentials:true})
    await getCurrentUser()
    await getListing()
    setBookingdata(result.data)
    console.log(result.data)

  } catch (error) {
    console.log(error)
    setBookingdata(null)
  }
 }

 const cancelBooking = async (id)=>{
  try {
      let result = await axios.delete( serverUrl + `/api/booking/cancel/${id}`,{withCredentials:true})
    await getCurrentUser()
    await getListing()
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
 }

  let value={
    checkIn,setcheckIn,
    checkOut,setcheckOut,
    total,setTotal,
    night,setNight,
    bookingdata, setBookingdata,
    handleBooking,cancelBooking
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