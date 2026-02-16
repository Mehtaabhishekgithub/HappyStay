import React, { useState } from "react";
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

const NavBar = () => {
  let [showpopup,setShowpopup]=useState(false)
  return (
    <div>
      {/* NavBar */}
      <div className=" w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] flex items-center justify-between p-[20px]">
        <div>
          <img src={logo} alt="" className="w-[130px]" />
        </div>

        <div className="w-[35%] relative">
          <input
            placeholder="Any Where | Any Location | Any City"
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

        <div className="flex items-center justify-center gap-[10px] relative">
          <span
            className="text-[18px] font-bold text-blue-400 cursor-pointer rounded-[50px]
          px-[8px] py-[5px]
           hover:bg-slate-200"
          >List Your Home
          </span>
      
          <button
            onClick={()=>setShowpopup(prev=>!prev)}
            className="px-[20px] py-[10px] flex items-center
          justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg">
          <span><GiHamburgerMenu className="w-[20px] h-[20px]" /></span>
          <span><CgProfile className="w-[23px] h-[23px]" /></span>
         </button>

         {showpopup && <div className="w-[220px] h-[250px] absolute
          bg-slate-50 top-[110%] right-[10%] border-[#aaa9a9] 
         z-10 rounded-lg">
          <ul className="w-[100%] h-[100%] text-[17px] 
          flex items-start justify-around flex-col
          py-[10px]">
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">Login</li>
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">Logout</li>
            <div className="w-[100%] h-[1px] bg-[#c1c0c0]"></div>
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">List Your Home</li>
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">My Listing</li>
           <li className="w-[100%] px-[15px] py-[10px]
            hover:bg-[#f4f3f3] cursor-pointer">Check Booking</li>
          </ul>

          </div>
          }

         </div> 
         
        
</div>


{/* categories ka div */}
 <div
        className="w-[100vw] h-[85px] bg-white
         items-center justify-center 
         cursor-pointer
         flex gap-[40px] ">
        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <MdOutlineWhatshot className="w-[30px] h-[30px] " />
          <h3>Trending</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <GiFamilyHouse className="w-[30px] h-[30px] " />
          <h3>Villa</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <MdBedroomParent className="w-[30px] h-[30px] " />
          <h3>Cabin</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <MdOutlinePool className="w-[30px] h-[30px] " />
          <h3>Pool House</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <GiWoodCabin className="w-[30px] h-[30px] " />
          <h3>Rooms</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <BsFillBuildingsFill className="w-[30px] h-[30px] " />
          <h3>Flats</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <IoBedOutline className="w-[30px] h-[30px] " />
          <h3>PG</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <FaTreeCity className="w-[30px] h-[30px] " />
          <h3>FarmHouse</h3>
        </div>

        <div
          className="flex items-center justify-center flex-col 
       hover:border-b-[1px] border-[#a6a5a5] text-[13px]"
        >
          <GiShop className="w-[30px] h-[30px] " />
          <h3>Shops</h3>
        </div>
</div>


    </div>
  );
};

export default NavBar;
