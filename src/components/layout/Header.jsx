import react from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#f68600]">
          Eventify
        </Link>
        <nav className="hidden md:flex pl-130 space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#f68600]">Home</Link>
          <Link to="/events" className="hover:text-[#f68600]">Events</Link>
          <Link to="/bookings" className="hover:text-[#f68600]">My Bookings</Link>
          <Link to="/contact" className="hover:text-[#f68600]">Contact</Link>
        </nav>

        <div className="space-x-4 hidden md:flex">
          <Link to="/login" className="text-[#f68600] hover:underline">Login</Link>
          <Link to="/signup" className="bg-[#f68600] text-white px-4 py-2 rounded-md hover:bg-gray-200  hover:text-black transition duration-300">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}