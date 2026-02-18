import React from 'react'
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaArrowLeftLong, FaTreeCity } from 'react-icons/fa6'
import { GiFamilyHouse, GiShop, GiWoodCabin } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';
import { MdBedroomParent, MdOutlinePool } from 'react-icons/md';
import {  useNavigate } from 'react-router-dom'

function ListingPage2() {
    let navigate = useNavigate()

  return (
    <div className="w-[100%] h-[100vh] bg-white
     flex items-center justify-center relative overflow-auto relative"
    >
      <div
        onClick={() => navigate("/listingpage1")}
        className="w-[50px] h-[50px] rounded-[50%] bg-blue-500 
     flex justify-center text-amber-50
     items-center cursor-pointer rounded-[50%]
   absolute  top-[5%] left-[20px] text-lg "
      >
        <FaArrowLeftLong />
      </div>

  <div
  className="w-[200px] h-[50px] text-[20px]
   bg-blue-500 text-white
   flex items-center justify-center rounded-[30px] absolute
   top-[5%] right-[10px] shadow-lg font-semibold">
   Set Your Category
  </div>

<div className='max-w-[900px] w-[100%] h-[550px] overflow-auto
bg-white flex items-center flex-col gap-[40px] mt-[30px] '>
  <h1 className='text-[18px] text-blue-500 font-bold md:text-[30px]'>Which of these best describes your place?</h1>

  <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap 
   items-center justify-center  gap-[15px] md:w-[70%] '>
    
    <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold 
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <GiFamilyHouse className='w-[30px] h-[30px] text-blue-500'/><h3>Villa</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <MdBedroomParent className='w-[30px] h-[30px]  text-blue-500'/><h3>Cabin</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    < MdOutlinePool className='w-[30px] h-[30px]  text-blue-500'/><h3>Pool House</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <GiWoodCabin className='w-[30px] h-[30px]  text-blue-500'/><h3>Rooms</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <BsFillBuildingsFill className='w-[30px] h-[30px]  text-blue-500'/><h3>Flats</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <IoBedOutline className='w-[30px] h-[30px]  text-blue-500'/><h3>PG</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <FaTreeCity className='w-[30px] h-[30px]  text-blue-500'/><h3>Farm House</h3>
   </div>

   <div className='w-[188px] h-[100px] flex justify-center
    items-center flex-col cursor-pointer border-[2px] font-bold
   hover:border-[#a6a5a5] text-[16px] rounded-lg '>
    <GiShop className='w-[30px] h-[30px]  text-blue-500'/><h3>Shops</h3>
   </div>

   


  </div>

  </div>

  <button
    className='absolute bottom-[5%] left-1/2 -translate-x-1/2 
    w-[15%] py-2 bg-blue-500 text-white 
    text-[18px] rounded-lg font-bold'>
      Next
    </button>

 </div>
  );
}

export default ListingPage2