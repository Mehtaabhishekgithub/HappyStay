import React, { useContext, useState } from "react";
import logo from "../assets/HappyStay.png";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiShop } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { authDataContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { listingDataContext } from "../Context/ListingContext";

const NavBar = () => {
  let [showpopup,setShowpopup]=useState(false)
  let navigate = useNavigate()
  let {serverUrl} = useContext(authDataContext)
   let{userData,setUserData} = useContext(userDataContext)
   let {listingData,setListingData,newListData,setNewListData}=useContext(listingDataContext)
   const [cate, setCate] = useState("")
     


  const handleLogout = async ()=>{
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout",{withCredentials:true})
      setUserData(null)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCategory = (category)=>{
  setCate(category)

  if(category == "trending"){
    setNewListData(listingData)
  } else {
    setNewListData(
      listingData.filter((list)=> list.category == category)
    )
  }
}

  return (
    <div className="fixed top-0 bg-white">
      {/* NavBar */}
      <div className=" w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] 
      px-[20px] flex items-center justify-between md:px-[40px] relative ">
        <div>
          <img src={logo} alt="" className="w-[130px]" />
        </div>

        <div className="w-[30%] absolute  left-1/2 -translate-x-1/2  hidden md:block ">
          <input
            placeholder="Any Where | Any Location | Any City"
            type="text"
            className="w-[100%] px-[30px] py-[10px] 
          outline-none overflow-auto
          rounded-[30px] text-[18px]
          border-[1px] border-[#bdbaba]"
          />
          <button className="absolute p-[10px] rounded-[50px] right-[1%]  bg-cyan-400 top-[5px]">
            <IoSearchSharp className="w-[20px] h-[20px] text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-[10px] relative">
          <span
          onClick={()=>navigate("/listingpage1")}
            className="text-[18px] bg-cyan-400 font-semibold text-gray-600 cursor-pointer rounded-[50px]
          p-3 hidden md:block hover:scale-90 
           hover:bg-slate-200"
          >List Your Home
          </span>
      
          <button
            onClick={()=>setShowpopup(prev=>!prev)}
            className="px-[20px] py-[10px] flex items-center
          justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg">
          <span><GiHamburgerMenu className="w-[20px] h-[20px]" /></span>
          {userData == null && <span><CgProfile className="w-[23px] h-[23px]" /></span>}
          {userData != null && <span className="w-[30px] h-[30px] bg-black text-white rounded-full 
          flex items-center justify-center">{userData?.name.slice(0,1)}</span>}
         </button>

         {showpopup && <div className="w-[220px] h-[250px] absolute
          bg-slate-50 top-[110%] right-[3%] border-[#aaa9a9] 
         z-10 rounded-lg md:right-[10%]">
          <ul className="w-[100%] h-[100%] text-[17px] 
          flex items-start justify-around flex-col
          py-[10px]">

        {!userData && <li
        onClick={()=>{navigate("/login");
        setShowpopup(false)
        }}
        className="w-[100%] px-[15px] py-[10px]
        hover:bg-[#f4f3f3] cursor-pointer">Login</li>}
          {userData && <li
           onClick={()=>{handleLogout();
            setShowpopup(false)}}
            className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">Logout</li>}
            <div className="w-[100%] h-[1px] bg-[#c1c0c0]"></div>
           <li
             onClick={()=>{navigate("/listingpage1");setShowpopup(false)}}
            className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">List Your Home</li>
           <li
            onClick={()=>{navigate("/mylisting");setShowpopup(false)}}
            className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">My Listing</li>
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">Check Booking</li>
          </ul>

          </div>
          }

         </div> 
         
        
</div>


  <div className="w-[100%] h-[60px] flex
  block md:hidden items-center justify-center">
    <div className="w-[80%] relative  ">
          <input
            placeholder="Book It"
            type="text"
            className="w-[100%] px-[30px] py-[10px] 
          outline-none overflow-auto
          rounded-[30px] text-[18px]
          border-[1px] border-[#bdbaba]"
          />
          <button className="absolute p-[10px] rounded-[50px] right-[1%] bg-blue-500 top-[5px]">
            <IoSearchSharp className="w-[20px] h-[20px] text-white" />
          </button>
        </div>

   </div>



{/* categories ka div */}

      <div
        className="w-[100vw] h-[85px] bg-white
         items-center justify-start px-[15px]
         cursor-pointer overflow-auto md:justify-center
         flex gap-[40px] ">
       
        <div
         onClick={()=>{handleCategory("trending");setCate("")}}
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <MdOutlineWhatshot className="w-[30px] h-[30px] " />
          <h3>Trending</h3>
        </div>

        <div
        onClick={()=>handleCategory("villa")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="villa"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <GiFamilyHouse className="w-[30px] h-[30px] " />
          <h3>Villa</h3>
        </div>

        <div
        onClick={()=>handleCategory("cabin")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="cabin"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <MdBedroomParent className="w-[30px] h-[30px] " />
          <h3>Cabin</h3>
        </div>

        <div
        onClick={()=>handleCategory("poolHouse")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="poolHouse"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <MdOutlinePool className="w-[30px] h-[30px] " />
          <h3>Pool House</h3>
        </div>

        <div
        onClick={()=>handleCategory("rooms")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="rooms"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <GiWoodCabin className="w-[30px] h-[30px] " />
          <h3>Rooms</h3>
        </div>

        <div
        onClick={()=>handleCategory("flats")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="flats"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <BsFillBuildingsFill className="w-[30px] h-[30px] " />
          <h3>Flats</h3>
        </div>

        <div
        onClick={()=>handleCategory("pg")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="pg"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <IoBedOutline className="w-[30px] h-[30px] " />
          <h3>PG</h3>
        </div>

        <div
        onClick={()=>handleCategory("farmHouse")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="farmHouse"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <FaTreeCity className="w-[30px] h-[30px] " />
          <h3>FarmHouse</h3>
        </div>

        <div
        onClick={()=>handleCategory("shops")}
          className={`flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="shops"?"border-b-[1px] border-[#a6a5a5]":""}`}
        >
          <GiShop className="w-[30px] h-[30px] " />
          <h3>Shops</h3>
        </div>
</div>


    </div>
  );
};

export default NavBar;
