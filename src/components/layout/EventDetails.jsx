// EventDetails.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function EventDetails() {
    const[event,setEvent]=useState(null);
  const { id } = useParams();

  useEffect(()=>{
  
        const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/events/${id}`);
        setEvent(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    if (id) {
      fetchEvent();
    }

  },[id])

  if (!event) return <div className="text-center py-20">Loading...</div>;
 
  return (
    <>
  <Header/>
    <div className="max-w-5xl mx-auto px-4 py-20">
      <img src={event.image} alt={event.title} className="rounded-xl w-full h-80 object-cover mb-6 shadow-md" />

      <h1 className="text-4xl font-bold text-[#f68600] mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-1">
        📅 {event.date} | 📍 {event.location}
      </p>

      <p className="text-gray-700 mt-4 mb-6">{event.description}</p>

      <Link
        to={`/book/${id}`}
        className="inline-block bg-[#f68600] text-white px-6 py-3 rounded-md hover:bg-orange-400 transition duration-300"
      >
        Book Now
      </Link>
    </div>
    <Footer/>
      </>
  );
}
