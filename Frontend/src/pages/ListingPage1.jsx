import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function ListingPage1() {
  let navigate = useNavigate()
  return (
    <div className='w-[100%] h-[100vh] bg-white
     flex items-center justify-center relative overflow-auto'>

      <form  className='max-w-[900px] w-[90%] h-[550px] flex flex-col
      overflow-auto items-center justify-start md:items-start gap-[10px] mt-[50px] '>
        
        <div 
        onClick={()=>navigate("/")}
         className='w-[50px] h-[50px] rounded-[50%] bg-blue-500 
         flex justify-center text-amber-50
         items-center cursor-pointer rounded-[50%]
        absolute  top-[5%] left-[20px] text-lg '>
      <FaArrowLeftLong />
      </div>

      <div className='w-[200px] h-[50px] text-[20px]
       bg-blue-500 text-white
      flex items-center justify-center rounded-[30px] absolute
      top-[5%] right-[10px] shadow-lg font-semibold'>
        Setup Your Home
      </div>

        <div className='w-full flex flex-col gap-2'>
      <label htmlFor='title' className='text-[20px] font-semibold'>Title</label>
      <input
      id='title'
      type='text'
       placeholder='Enter title'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

    <div className='w-full flex flex-col gap-2'>
      <label htmlFor='des' className='text-[20px] font-semibold'>Description</label>
      <textarea
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
    id='img1'
    type='file'
    accept='image/*'
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
    id='img2'
    type='file'
    accept='image/*'
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
    id='img3'
    type='file'
    accept='image/*'
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
      id='rent'
      type='text'
       placeholder='Enter rent'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

 <div className='w-full flex flex-col gap-2'>
      <label htmlFor='city' className='text-[20px] font-semibold'>City</label>
      <input
      id='city'
      type='text'
       placeholder='Enter city'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

 <div className='w-full flex flex-col gap-2'>
      <label htmlFor='landmark' className='text-[20px] font-semibold'>Landmark</label>
      <input
      id='landmark'
      type='text'
       placeholder='Enter landmark'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

    <button
     className='w-[25%] py-2 bg-blue-500 text-white text-[18px] rounded-lg font-bold'>
      Next
    </button>


      </form>
      
    </div>
  )
}

export default ListingPage1