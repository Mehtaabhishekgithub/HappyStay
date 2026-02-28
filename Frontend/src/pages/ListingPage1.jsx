import React, { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { listingDataContext } from '../Context/ListingContext'

function ListingPage1() {
  let navigate = useNavigate()
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
  category,setCategory} = useContext(listingDataContext)
  
  const handleImage1 = (e)=>{
     let file = e.target.files[0]
     setBackEndImage1(file)
     setFrontEndImage1(URL.createObjectURL(file))
  }
  const handleImage2 = (e)=>{
     let file = e.target.files[0]
     setBackEndImage2(file)
     setFrontEndImage2(URL.createObjectURL(file))
  }
  const handleImage3 = (e)=>{
     let file =e.target.files[0]
     setBackEndImage3(file)
     setFrontEndImage3(URL.createObjectURL(file))
  }
  return (
    <div className='w-[100%] h-[100vh] bg-white
     flex items-center justify-center relative overflow-auto'>

      <form
       onSubmit={(e)=>{e.preventDefault()
        navigate("/listingpage2")
       }}
       
      className='max-w-[900px] w-[90%] h-[550px] flex flex-col no-scrollbar
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
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      id='title'
      type='text'
       placeholder='Enter title'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

    <div className='w-full flex flex-col gap-2'>
      <label htmlFor='des' className='text-[20px] font-semibold'>Description</label>
      <textarea
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
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
      value={rent}
      onChange={(e)=>setRent(e.target.value)}
      id='rent'
      type='number'
       placeholder='Enter rent'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

 <div className='w-full flex flex-col gap-2'>
      <label htmlFor='city' className='text-[20px] font-semibold'>City</label>
      <input
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      id='city'
      type='text'
       placeholder='Enter city'
       className='w-full h-[40px] border-2 border-gray-600 rounded-lg px-4' required />
    </div>

 <div className='w-full flex flex-col gap-2'>
      <label htmlFor='landmark' className='text-[20px] font-semibold'>Landmark</label>
      <input
      value={landmark}
      onChange={(e)=>setLandmark(e.target.value)}
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