import React from "react";
import logo from "../assets/HappyStay.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-white mt-10">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="HappyStay" className="w-[140px]" />
          <p className="text-sm text-gray-300 leading-relaxed">
            HappyStay helps you find the perfect place to stay — from cozy
            rooms to luxury villas. Book easily and travel happily.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Trending</li>
            <li className="hover:text-white cursor-pointer">Villas</li>
            <li className="hover:text-white cursor-pointer">Flats</li>
            <li className="hover:text-white cursor-pointer">Farm Houses</li>
            <li className="hover:text-white cursor-pointer">Shops</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaGithub className="cursor-pointer hover:text-gray-400" />
          </div>

          <p className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} HappyStay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

