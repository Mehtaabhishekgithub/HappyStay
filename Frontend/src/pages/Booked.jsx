import React, { useContext } from "react";
import { MdVerified } from "react-icons/md";
import { bookingDataContext } from "../Context/BookingContext";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Star from "../components/Star";
import { useState } from "react";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { listingDataContext } from "../Context/ListingContext";

function Booked() {
  const { bookingData } = useContext(bookingDataContext);
  const [star, setStar] = useState(null)
  let navigate = useNavigate()
  let {serverUrl} = useContext(authDataContext)
  let {getCurrentUser} =useContext(userDataContext)
  let {getListing} = useContext(listingDataContext)
  let {cardDetails} = useContext(listingDataContext)
  
  const handleStar = async (value)=>{
   setStar(value)
   console.log("You rated",value)
}

const handleRating = async (id)=>{
try {
  let result = await axios.post( serverUrl +`/api/listing/ratings/${id}`,{ratings:star},{withCredentials:true})
  await getListing()
 await getCurrentUser()
 console.log(result)
 navigate("/")
} catch (error) {
  console.log(error)
}
}


  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4 gap-6">
      
      {/* ===== FIRST CARD ===== */}
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 flex flex-col items-center text-center gap-5">

        {/* Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center">
          <MdVerified className="text-green-600" size={40} />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-3xl font-bold text-slate-800">
          Booking Confirmed 🎉
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm md:text-base">
          Your booking has been successfully confirmed.
        </p>

        {/* Details */}
        <div className="w-full flex flex-col gap-2 text-sm md:text-base text-left">
          <span>
            BookingId :{" "}
            <span className="font-medium">
              {bookingData?._id || "—"}
            </span>
          </span>

          <span>
            Owner Details :{" "}
            <span className="font-medium">
              {bookingData?.host?.email || "—"}
            </span>
          </span>

          <span>
            Total Rent :{" "}
            <span className="font-semibold text-green-600">
              ₹{bookingData?.totalRent ?? "—"}
            </span>
          </span>
        </div>
      </div>

      {/* ===== SECOND CARD ===== */}
      <div className="w-[95%] max-w-[600px] h-[200px] bg-white flex items-center 
      justify-center border-[1px] border-slate-200 flex-col 
      gap-[20px] p-[20px] rounded-lg md:w-[80%]">
        <h1 className="font-semibold">{star} out of 5 Rating </h1>
        <Star 
        onRate={handleStar}
        />
          <button
          onClick={()=>handleRating(cardDetails._id)}
    className="mt-2 px-6 py-2 rounded-xl bg-cyan-500 text-white 
    text-sm md:text-base font-medium hover:bg-slate-800 
    active:scale-95 transition-all duration-200">
    Submit Rating
     </button>
      </div>

      <div className="w-full flex items-center justify-center mt-2">
  <button
    onClick={() => navigate("/")}
    className="px-8 py-3 rounded-2xl bg-black text-white 
    text-sm md:text-base font-medium hover:bg-slate-800 
    active:scale-95 transition-all duration-200 shadow-md" >
    Back to Home
  </button>
</div>
    </div>
  );
}

export default Booked;