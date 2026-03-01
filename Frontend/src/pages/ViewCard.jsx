import React, { useContext, useEffect, useEffectEvent, useState } from 'react'
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { listingDataContext } from '../Context/ListingContext'
import { userDataContext } from '../Context/UserContext'
import { MdCancel } from "react-icons/md";
import axios from 'axios'
import { authDataContext } from '../Context/AuthContext'
import { bookingDataContext } from '../Context/BookingContext'

function ViewCard() {
  let navigate = useNavigate()
  let {serverUrl}= useContext(authDataContext)
  let {cardDetails}=useContext(listingDataContext)
  let {userData,setUserData}= useContext(userDataContext)
  const [updatePopup, setUpdatePopup] = useState(false)
const [bookingPopup, setBookingPopup] = useState(false)
  const [title, setTitle] = useState(cardDetails.title)
const [description, setDescription] = useState(cardDetails.description)
   let [backEndImage1,setBackEndImage1]=useState(null)
  let [backEndImage2,setBackEndImage2]=useState(null)
   let [backEndImage3,setBackEndImage3]=useState(null)
   let [rent, setRent] = useState(cardDetails.rent)
   let [city, setCity] = useState(cardDetails.city)
   let [landmark, setLandmark] = useState(cardDetails.landmark)
   let {updating,setUpdating}=useContext(listingDataContext)
   let{deleting,setDeleting}= useContext(listingDataContext)
   const [minDate, setMinDate] = useState("")
  let {checkIn,setcheckIn,
    checkOut,setcheckOut,
    total,setTotal,handleBooking,
    night,setNight} = useContext(bookingDataContext) 

    useEffect(() => {
      if(checkIn && checkOut){
        let inDate = new Date(checkIn)
        let OutDate = new Date(checkOut)
        let n = (OutDate-inDate)/(24*60*60*1000)
        setNight(n)
        let happyStayCharge = (cardDetails.rent*(7/100))
        let tax = (cardDetails.rent*(7/100))
        if(n>0){
          setTotal((cardDetails.rent*n) + happyStayCharge + tax)
        }
        else{
          setTotal(0)
        }
       }
    }, [checkIn,checkOut,cardDetails.rent,total])
    

   const handleImage1 = (e)=>{
     let file = e.target.files[0]
     setBackEndImage1(file)
  }
  const handleImage2 = (e)=>{
     let file = e.target.files[0]
     setBackEndImage2(file)
  }
  const handleImage3 = (e)=>{
     let file =e.target.files[0]
     setBackEndImage3(file)
  }
  
  const handleDeleteListing = async ()=>{
    setDeleting(true)
    try {
   let result = await axios.delete(serverUrl + `/api/listing/delete/${cardDetails._id}`,{withCredentials:true})

    setUserData(prev => ({
      ...prev,
      listing: prev.listing.filter(
        item => item._id !== cardDetails._id
      )
    }))

    console.log(result.data)
        navigate("/")
    setDeleting(false)
    } catch (error) {
      console.log(error)
      setDeleting(false)
    }
  }


const handleUpdateListing = async ()=>{
  setUpdating(true)
 try {
        let formData = new FormData()
   formData.append("title",title)
   if(backEndImage1){formData.append("image1",backEndImage1)}
   if(backEndImage2){formData.append("image2",backEndImage2)}
   if(backEndImage3){formData.append("image3",backEndImage3)}
   formData.append("description",description)
   formData.append("rent",rent)
   formData.append("city",city)
   formData.append("landmark",landmark)
      let result = await axios.post(serverUrl + `/api/listing/update/${cardDetails._id}` , formData,{withCredentials:true})
      console.log(result)
      setUpdating(false)
       navigate("/")
      setTitle("")
      setDescription("")
      setBackEndImage1(null)
      setBackEndImage2(null)
      setBackEndImage3(null)
      setRent("")
      setCity("")
      setLandmark("")

} catch (error) {
  setUpdating(false)
 console.log(error)
 }
}

useEffect(() => {
  let today = new Date().toISOString().split('T')[0]
  setMinDate(today)
}, [])


  return (
  <div>
      <div className="w-full min-h-screen bg-white flex flex-col
           items-center justify-start gap-4 overflow-auto relative  pt-20 md:pt-10 pb-1">
      
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="w-[45px] h-[45px] rounded-full bg-blue-500 
              flex justify-center items-center cursor-pointer
              absolute top-5 left-5 text-white text-lg shadow-md"
            >
              <FaArrowLeftLong />
            </div>
      
            {/* Location */}
            <div className="w-[95%] md:w-[80%] mt-10">
              <h1 className="text-[20px] md:text-[30px] text-[#272727] font-semibold truncate">
                {`In ${cardDetails.landmark.toUpperCase() }, ${cardDetails.city.toUpperCase()}`}
              </h1>
            </div>
      
            {/* Images */}
            <div className="w-[95%] md:w-[80%] h-[420px] md:h-[500px] flex flex-col md:flex-row gap-2">
      
              {/* Main Image */}
              <div className="w-full md:w-[70%] h-[65%] md:h-full overflow-hidden rounded-xl">
                <img
                  src={cardDetails.image1}
                  alt="listing"
                  className="w-full h-full object-cover"
                />
              </div>
      
              {/* Side Images */}
              <div className="w-full md:w-[30%] h-[35%] md:h-full flex md:flex-col gap-2">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={cardDetails.image2}
                    alt="listing"
                    className="w-full h-full object-cover"
                  />
                </div>
      
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={cardDetails.image3 }
                    alt="listing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
      
            {/* Title */}
            <div className="w-[95%] md:w-[80%] text-[30px] md:text-[30px] font-semibold">
             {`${cardDetails.title.toUpperCase()}, ${cardDetails.category.toUpperCase()}, ${cardDetails.landmark.toUpperCase()}`}
            </div>
      
            {/* Description */}
            <div className="w-[95%] md:w-[80%] text-[20px] md:text-[20px] text-gray-600 leading-relaxed">
              {cardDetails.description}
            </div>
      
            {/* Price */}
            <div className="w-[95%] md:w-[80%] text-[22px] font-semibold md:text-[30px] text-blue-600">
              Rs.{cardDetails.rent}/day
            </div>
             
    <div 
    className='flex gap-4 md:gap-20'>   
      {cardDetails.host == userData._id && <button
       onClick={()=>setUpdatePopup(prev => !prev)}
        className="w-[100%] md:w-auto px-6 py-3 
        bg-blue-500 hover:bg-blue-600
        text-white font-semibold
        rounded-xl shadow-md
        transition-all duration-200
        active:scale-95 " 
      > Edit Listing
      </button>}
     {cardDetails.host != userData._id && <button
      onClick={()=>setBookingPopup(prev => !prev)}
        className="w-[100%] md:w-auto px-6 py-3 
        bg-blue-500 hover:bg-blue-600
        text-white font-semibold
        rounded-xl shadow-md
        transition-all duration-200
        active:scale-95 " 
      >
      Reserve
      </button>}

  </div>

 </div>

{/* Update Listing Page */}
{updatePopup && <div className='fixed inset-0 flex items-center justify-center
bg-[#000000a9] z-[100] backdrop-blur-sm'>
    <MdCancel onClick={() => setUpdatePopup(false)}
              className="w-[45px] h-[45px] rounded-full bg-blue-500 
              flex justify-center items-center cursor-pointer
              absolute top-5 left-5 text-white text-lg shadow-md" />

  <form
        onSubmit={(e)=>{e.preventDefault()}}
        className='max-w-[900px] w-[90%] h-[550px]  flex flex-col text-blue-700 bg-cyan-200 p-[20px]
        overflow-auto items-center justify-start  gap-[10px] mt-[50px] rounded-lg no-scrollbar '>
          
  
        <div className='w-[200px] h-[50px] text-[20px]
         bg-blue-400 text-white
        flex items-center justify-center rounded-[30px] absolute
        top-[2%] right-[12px] shadow-lg '>
          Update Your Details
        </div>
  
          <div className='w-full flex flex-col gap-2'>
        <label htmlFor='title' className='text-[20px] font-semibold'>Title</label>
        <input
         onChange={(e)=>setTitle(e.target.value)}
         value={title}
        id='title'
        type='text'
         placeholder='Enter title'
         className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
      </div>
  
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor='des' className='text-[20px] font-semibold'>Description</label>
        <textarea
        onChange={(e)=>setDescription(e.target.value)}
         value={description}
        id='des'
        type='text'
         className='w-full h-[80px] border-2  border-gray-600 rounded-lg px-4' required >
        </textarea>
      </div>
  
   <div className='w-full flex flex-col gap-2'>
    <label htmlFor='img1' className='text-[20px] font-semibold'>
      Image 1
    </label>
    <input
    onChange={handleImage1}
      id='img1'
      type='file'
      required
      className='w-full border-2 border-gray-600 rounded-lg 
      p-1 text-sm text-gray-700 file:mr-4
      file:py-2 file:px-4 file:rounded-md 
      file:border-0 file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700 cursor-pointer'
    />
  </div>
  
  <div className='w-full flex flex-col gap-2'>
    <label htmlFor='img2' className='text-[20px] font-semibold'>
      Image 2
    </label>
    <input
     onChange={handleImage2}
    id='img2'
      type='file'
      required
      className='w-full border-2 border-gray-600 rounded-lg 
      p-1 text-sm text-gray-700 file:mr-4
      file:py-2 file:px-4 file:rounded-md 
      file:border-0 file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700 cursor-pointer'
    />
  </div>
  
  <div className='w-full flex flex-col gap-2'>
    <label htmlFor='img3' className='text-[20px] font-semibold'>
      Image 3
    </label>
    <input
      onChange={handleImage3}
      id='img3'
      type='file'
      required
      className='w-full border-2 border-gray-600 rounded-lg 
      p-1 text-sm text-gray-700 file:mr-4
      file:py-2 file:px-4 file:rounded-md 
      file:border-0 file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700 cursor-pointer'
    />
  </div>
  
   <div className='w-full flex flex-col gap-2'>
        <label htmlFor='rent' className='text-[20px] font-semibold'>Rent</label>
        <input
        onChange={(e)=>setRent(e.target.value)}
         value={rent}
        id='rent'
        type='number'
         placeholder='Enter rent'
         className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
      </div>
  
   <div className='w-full flex flex-col gap-2'>
        <label htmlFor='city' className='text-[20px] font-semibold'>City</label>
        <input
        onChange={(e)=>setCity(e.target.value)}
         value={city}
        id='city'
        type='text'
         placeholder='Enter city'
         className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
      </div>
  
   <div className='w-full flex flex-col gap-2'>
        <label htmlFor='landmark' className='text-[20px] font-semibold'>Landmark</label>
        <input
        onChange={(e)=>setLandmark(e.target.value)}
         value={landmark}
        id='landmark'
        type='text'
         placeholder='Enter landmark'
         className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
      </div>
  
      <div className='w-full mt-[20px]  flex items-center justify-center gap-3'>
        <button
      disabled={updating}
      onClick={handleUpdateListing}
       className='w-full md:w-[30%] py-2 bg-blue-500 text-white text-nowrap text-[18px] rounded-lg font-semibold'>
        {updating?"Updating...":"Update Listing"}
      </button>

      <button
      onClick={handleDeleteListing}
      disabled={deleting}
       className='w-full md:w-[30%] py-2 bg-blue-500 text-white text-nowrap text-[18px] rounded-lg font-semibold'>
        { deleting?"Deleting..." :"Delete Listing"}
      </button>
      </div>

    </form>

</div>}

{bookingPopup && <div className="fixed inset-0 flex
items-start  md:items-center justify-center
flex-col md:flex-row gap-6 md:gap-16
bg-white/90 z-[100] p-4 sm:p-6
backdrop-blur-sm overflow-auto  ">

<MdCancel 
 onClick={() => setBookingPopup(false)}
 className="absolute top-4 right-4 md:top-6 md:right-6
  w-[34px] h-[34px] md:w-[40px] md:h-[40px]
  bg-cyan-400 hover:bg-cyan-500
  cursor-pointer rounded-full
  flex items-center justify-center
  shadow-md z-50" />


  <form
  onSubmit={(e)=>{e.preventDefault()}}
  className="w-full sm:w-[90%] md:w-[420px]
  bg-gray-300 p-4 sm:p-6 rounded-lg flex
  flex-col gap-4 justify-between border border-[#dedddd] shadow-sm
  h-auto md:h-[400px] "
>
  {/* Heading */}
  <h1
    className="w-full text-center py-2 text-[22px] sm:text-[25px]
    border-b border-[#a3a3a3] font-semibold"
  >
    Confirm & Book
  </h1>
  <h3 className='font-semibold'>Your Trip -</h3>
  {/* Check In */}
  <div className="w-full flex flex-col gap-1">
    <label
      htmlFor="checkIn"
      className="text-[15px] sm:text-[17px] font-semibold text-gray-700"
    >
      Check In
    </label>
    <input
    value={checkIn}
    onChange={(e)=>setcheckIn(e.target.value)}
      id="checkIn"
      type="date"
      min={minDate}
      className="w-full h-[42px] text-[15px] sm:text-[16px]
      border border-gray-300 rounded-lg
      bg-white px-3
      focus:border-blue-500 focus:outline-none"
      required
    />
  </div>

  {/* Check Out */}
  <div className="w-full flex flex-col gap-1">
    <label
      htmlFor="checkOut"
      className="text-[15px] sm:text-[17px] font-semibold text-gray-700"
    >
      Check Out
    </label>
    <input
     value={checkOut}
    onChange={(e)=>setcheckOut(e.target.value)}
      id="checkOut"
      type="date"
      min={minDate}
      className="w-full h-[42px] text-[15px] sm:text-[16px]
      border border-gray-300 rounded-lg
      bg-white px-3
      focus:border-blue-500 focus:outline-none"
      required
    />
  </div>

  {/* Button */}
  <button
  onClick={()=>{handleBooking(cardDetails._id)}}
    type="submit"
    className="w-full h-[46px] mt-2 rounded-lg
    bg-blue-500 hover:bg-blue-600
    text-white font-semibold text-[15px] sm:text-[16px]
    transition active:scale-[0.98]"
  >
    Book Now
  </button>
</form>

<div
  className="
  w-full sm:w-[90%] md:w-[420px]
  bg-gray-300 p-4 sm:p-6 rounded-lg flex
  flex-col gap-4 border border-[#dedddd] shadow-sm
  h-auto md:h-[400px] 
  "
>
  {/* Property Preview */}
  <div className="w-full flex gap-3 items-center ">

    {/* Image */}
    <div className="w-[90px] h-[90px] flex-shrink-0 rounded-lg overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={cardDetails?.image1}
        alt="listing"
      />
    </div>

    {/* Text */}
    <div className="flex-1 min-w-0">
      <h1 className="text-[14px] sm:text-[15px] font-semibold truncate">
        {`In ${cardDetails?.landmark?.toUpperCase()} , ${cardDetails?.city?.toUpperCase()}`}</h1>
 <h1>{cardDetails.title.toUpperCase()}</h1>
 <h1 className='flex items-center justify-start gap-[5px]'><FaStar color='cyan'/>{cardDetails.ratings}</h1>
 </div>
</div>

<div className="w-full border border-gray-400
rounded-lg p-4 flex flex-col gap-3 bg-white/60">

  <h1 className="text-[18px] font-semibold">
    Booking Price
  </h1>

  <div className="w-full flex justify-between text-sm sm:text-base">
    <span className="font-medium">
      {`Rs ${cardDetails.rent} x ${night} nights`}
    </span>
    <span>{cardDetails.rent * night || 0}</span>
  </div>

  <div className="w-full flex justify-between text-sm sm:text-base">
    <span className="font-medium">Tax</span>
    <span>{(cardDetails.rent * 7) / 100}</span>
  </div>

  <div className="w-full flex justify-between text-sm sm:text-base">
    <span className="font-medium">HappyStay Charge</span>
    <span>{(cardDetails.rent * 7) / 100}</span>
  </div>

  {/* divider */}
  <div className="w-full h-[1px] bg-gray-400 my-1" />

  <div className="w-full flex justify-between font-semibold text-[16px] sm:text-[18px]">
    <span>Total</span>
    <span>Rs {total}</span>
  </div>

</div>


</div>

</div>}

</div>

    
  )
}

export default ViewCard