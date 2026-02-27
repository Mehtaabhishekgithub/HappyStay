import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { listingDataContext } from '../Context/ListingContext'

function Home() {
  let{listingData,setListingData,newListData}=useContext(listingDataContext)
  return (
    <div>
      <NavBar/>
      <div className='w-full h-[77vh] flex items-center justify-center
      gap-[25px] flex-wrap mt-[300px] md:mt-[300px]'>
        {newListData.map((list)=>(
          <Card title={list.title}
          landmark ={list.landmark}
          city = {list.city}
          image1 ={list.image1}
          image2={list.image2}
          image3={list.image3}
          rent={list.rent}
          id={list._id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home