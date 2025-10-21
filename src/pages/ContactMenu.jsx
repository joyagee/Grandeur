import { LogIn, Mail, UserCircle, UserPlus, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center  gap-2 hover:bg-white  hover:text-black text-white px-4 py-2  rounded-full transition ease-in-out duration-500"
      >
       
         {open ? <X size={20} /> :  <UserCircle size={22} /> }
        
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute md:right-auto hover:text-black sm:right-auto right-0  hover:bg-white mt-2 w-48 bg-primary rounded-lg shadow-lg overflow-hidden border border-gray-200 z-10">
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <LogIn size={18} /> Login
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <UserPlus size={18} /> Sign Up
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <Mail size={18} /> Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}