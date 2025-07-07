// EventSection.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventSection() {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
    const fetchEvents=async()=>{
      try {
        const res=await axios.get("http://localhost:3001/events", {
  withCredentials: true,
});
        setEvents(res.data);
        console.log("events are",res.data);
        
      } catch (error) {
         console.error("Error fetching events:", error);
      }
    }
    fetchEvents();

  },[])
  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-[#f68600] mb-4">Upcoming Events</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore and book from our handpicked popular events
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-[#f68600]">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{event.date} • {event.location}</p>
                <p className="text-gray-700 mb-4">{event.description.slice(0, 80)}...</p>
                <Link
                  to={`/events/${event._id}`}
                  className="text-[#f68600] font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
