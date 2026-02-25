import React, { useContext } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaArrowLeftLong, FaTreeCity } from "react-icons/fa6";
import { GiFamilyHouse, GiShop, GiWoodCabin } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage2() {
  const navigate = useNavigate();
  const { category, setCategory } = useContext(listingDataContext);

  const cardStyle =
    "flex flex-col items-center justify-center cursor-pointer border-2 font-bold hover:border-[#a6a5a5] text-[15px] rounded-lg h-[100px] transition-all";

  const activeStyle = "border-2 border-[#8b8b8b] bg-gray-50";

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center relative px-4 py-6">

      {/* Back Button */}
      <div
        onClick={() => navigate("/listingpage1")}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 flex justify-center items-center cursor-pointer text-white absolute top-4 left-4 text-lg"
      >
        <FaArrowLeftLong />
      </div>

      {/* Heading badge */}
      <div className="mt-10 md:mt-4 w-fit px-6 py-2 text-lg md:text-xl bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg font-semibold">
        Set Your Category
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-6 mt-6">

        <h1 className="text-lg md:text-3xl text-blue-500 font-bold text-center">
          Which of these best describes your place?
        </h1>

        {/* ✅ Responsive Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          <div
            onClick={() => setCategory("villa")}
            className={`${cardStyle} ${category === "villa" ? activeStyle : ""}`}
          >
            <GiFamilyHouse className="w-7 h-7 text-blue-500" />
            <h3>Villa</h3>
          </div>

          <div
            onClick={() => setCategory("cabin")}
            className={`${cardStyle} ${category === "cabin" ? activeStyle : ""}`}
          >
            <MdBedroomParent className="w-7 h-7 text-blue-500" />
            <h3>Cabin</h3>
          </div>

          <div
            onClick={() => setCategory("poolHouse")}
            className={`${cardStyle} ${category === "poolHouse" ? activeStyle : ""}`}
          >
            <MdOutlinePool className="w-7 h-7 text-blue-500" />
            <h3>Pool House</h3>
          </div>

          <div
            onClick={() => setCategory("rooms")}
            className={`${cardStyle} ${category === "rooms" ? activeStyle : ""}`}
          >
            <GiWoodCabin className="w-7 h-7 text-blue-500" />
            <h3>Rooms</h3>
          </div>

          <div
            onClick={() => setCategory("flats")}
            className={`${cardStyle} ${category === "flats" ? activeStyle : ""}`}
          >
            <BsFillBuildingsFill className="w-7 h-7 text-blue-500" />
            <h3>Flats</h3>
          </div>

          <div
            onClick={() => setCategory("pg")}
            className={`${cardStyle} ${category === "pg" ? activeStyle : ""}`}
          >
            <IoBedOutline className="w-7 h-7 text-blue-500" />
            <h3>PG</h3>
          </div>

          <div
            onClick={() => setCategory("farmHouse")}
            className={`${cardStyle} ${category === "farmHouse" ? activeStyle : ""}`}
          >
            <FaTreeCity className="w-7 h-7 text-blue-500" />
            <h3>Farm House</h3>
          </div>

          <div
            onClick={() => setCategory("shops")}
            className={`${cardStyle} ${category === "shops" ? activeStyle : ""}`}
          >
            <GiShop className="w-7 h-7 text-blue-500" />
            <h3>Shops</h3>
          </div>

        </div>
      </div>

      {/* ✅ Responsive Next Button */}
      <button
        onClick={() => navigate("/listingpage3")}
        disabled={!category}
        className="mt-10 w-full max-w-xs md:max-w-sm py-3 bg-blue-500 disabled:bg-gray-300 text-white text-lg rounded-lg font-bold"
      >
        Next
      </button>
    </div>
  );
}

export default ListingPage2;