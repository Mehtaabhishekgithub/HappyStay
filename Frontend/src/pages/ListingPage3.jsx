import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";


function ListingPage3() {
  const navigate = useNavigate();
    
   let  {title,setTitle,
    description,setDescription,
    frontEndImage1,setFrontEndImage1,
    frontEndImage2,setFrontEndImage2,
    frontEndImage3,setFrontEndImage3,
    backEndImage1,setBackEndImage1,
    backEndImage2,setBackEndImage2,
    backEndImage3,setBackEndImage3,
    rent,setRent,
    city,setCity,
    landmark,setLandmark,
    category,setCategory ,
    handleAddListing,
    adding,setAdding
   }
     =
    useContext(listingDataContext)

    
  return (
    <div className="w-full min-h-screen bg-white flex flex-col
     items-center justify-start gap-4 overflow-auto relative  pt-20 md:pt-10 pb-1">

      {/* Back Button */}
      <div
        onClick={() => navigate("/listingpage2")}
        className="w-[45px] h-[45px] rounded-full bg-blue-500 
        flex justify-center items-center cursor-pointer
        absolute top-5 left-5 text-white text-lg shadow-md"
      >
        <FaArrowLeftLong />
      </div>

      {/* Location */}
      <div className="w-[95%] md:w-[80%] mt-10">
        <h1 className="text-[20px] md:text-[30px] text-[#272727] font-semibold truncate">
          {`In ${landmark.toUpperCase() }, ${city.toUpperCase()}`}
        </h1>
      </div>

      {/* Images */}
      <div className="w-[95%] md:w-[80%] h-[420px] md:h-[500px] flex flex-col md:flex-row gap-2">

        {/* Main Image */}
        <div className="w-full md:w-[70%] h-[65%] md:h-full overflow-hidden rounded-xl">
          <img
            src={frontEndImage1}
            alt="listing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="w-full md:w-[30%] h-[35%] md:h-full flex md:flex-col gap-2">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={frontEndImage2 }
              alt="listing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={frontEndImage3 }
              alt="listing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="w-[95%] md:w-[80%] text-[30px] md:text-[30px] font-semibold">
       {`${title.toUpperCase()}, ${category.toUpperCase()}, ${landmark.toUpperCase()}`}
      </div>

      {/* Description */}
      <div className="w-[95%] md:w-[80%] text-[20px] md:text-[20px] text-gray-600 leading-relaxed">
        {description}
      </div>

      {/* Price */}
      <div className="w-[95%] md:w-[80%] text-[22px] font-semibold md:text-[30px] text-blue-600">
        Rs.{rent}/day
      </div>
       
       <button
       onClick={handleAddListing}
       disabled={adding}
  className="w-[95%] md:w-[10%] px-6 py-3 
  bg-blue-500 hover:bg-blue-600
  text-white font-semibold
  rounded-xl shadow-md
  transition-all duration-200
  active:scale-95 " 
>
  {adding?"Adding....":"Add Listing"}
</button>
      
    </div>
  );
}

export default ListingPage3;