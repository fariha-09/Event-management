import React from "react";
import { Link } from "react-router-dom";
import bgImage from '../../video/bg-video.mp4';

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={bgImage} type="video/mp4" />
  </video>

  <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 z-10" />
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-5xl text-[#f68600] md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      Welcome to Eventify
    </h1>
    <p className="text-lg md:text-xl text-[#f68600] mb-8 max-w-2xl drop-shadow-md">
      Discover amazing content and explore opportunities like never before.
    </p>
    <Link to="/login" className="bg-[#f68600] text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg">
      Get Started
    </Link>
  </div>
</div>

    </div>
  );
}
