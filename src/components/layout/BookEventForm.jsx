import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

export default function BookEventForm() {
  const { id } = useParams();
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`http://localhost:3001/bookings`, {
      ...formData,
      eventId: id,
    });

    setIsSubmitted(true);
    setFormData({ name: "", email: "", tickets: 1 });

    setTimeout(() => {
      navigate("/");
    }, 3000);

    console.log("Booking submitted for event:", id, formData);
  } catch (error) {
    if (
      error.response &&
      error.response.status === 400 &&
      error.response.data.message
    ) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong. Please try again.");
    }
    console.error("Booking failed:", error);
  }
};;

  if (isSubmitted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#fef6ef] text-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-[#f68600] mb-2">🎉 Booking Confirmed!</h2>
          <p className="text-gray-700">Thank you, <span className="font-semibold">{formData.name}</span>. You’ve successfully booked your event!</p>
        </div>
      </div>
    );
  }

  return (
    <>
   <Header/>
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683121131492-9ae8cdfea4f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
    
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60" />

      <div className="relative z-10 flex items-center justify-center h-full mt-7 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-[#f68600]">Book Your Event</h2>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f68600] shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f68600] shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Number of Tickets</label>
            <input
              type="number"
              name="tickets"
              min={1}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f68600] shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f68600] text-white py-3 rounded-md hover:bg-orange-500 transition font-semibold shadow-md"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
    <Footer/>
     </>
  );
}
