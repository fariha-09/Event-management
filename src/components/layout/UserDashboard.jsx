import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import bgImage from "../../video/bg-img.jpg";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:3001/events", {
          withCredentials: true,
        });
        setUser(res.data.user);
        setBookings(res.data.bookings);
      } catch (error) {
        alert("Please login again.");
  
      }
    };

    fetchDashboard();
  }, [navigate]);

  const totalEvents = bookings.length;
  const upcomingEvents = bookings.filter(
    (b) => new Date(b.eventId?.date) > new Date()
  ).length;
  const totalTickets = bookings.reduce((sum, b) => sum + b.tickets, 0);
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center pt-24 px-4 pb-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">

          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#f68600]">User Dashboard</h1>
            <p className="text-gray-800 text-lg">
              Welcome back, {user?.fullName || "User"}! Here's a summary of your activity.
            </p>
          </div>

          {/* User Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {user && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <HiOutlineUserCircle className="text-5xl text-[#f68600]" />
                  <div>
                    <h3 className="text-xl font-semibold">{user.fullName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Phone:</strong> {user.phoneNumber}</p>
                  <p><strong>Location:</strong> {user.location}</p>
                  <p><strong>Organization:</strong> {user.organization || "N/A"}</p>
                  <p><strong>Interests:</strong> {user.eventInterests || "N/A"}</p>
                </div>
              </div>
            )}

            {/* Dynamic Stats */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-sm text-gray-600">Total Events</p>
                <h3 className="text-2xl font-bold text-[#f68600]">{totalEvents}</h3>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-sm text-gray-600">Upcoming</p>
                <h3 className="text-2xl font-bold text-[#f68600]">{upcomingEvents}</h3>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-sm text-gray-600">Tickets Booked</p>
                <h3 className="text-2xl font-bold text-[#f68600]">{totalTickets}</h3>
              </div>
            </div>
          </div>

          {/* Bookings List */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#f68600] mb-4">Your Upcoming Events</h2>
            {bookings.length > 0 ? (
              <ul className="space-y-4">
                {bookings.map((booking, i) => (
                  <li
                    key={i}
                    className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {booking.eventId?.title || "Untitled Event"}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FaCalendarAlt className="text-[#f68600]" /> {booking.eventId?.date || "TBA"}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#f68600]" /> {booking.eventId?.location || "Unknown"}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FaTicketAlt className="text-[#f68600]" /> {booking.tickets} Tickets
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">You have no upcoming events.</p>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
