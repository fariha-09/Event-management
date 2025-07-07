import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bgImage from "../../video/bg-img.jpg";
import axios from "axios";

export default function OrganizersDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const fetchMyEvents = async () => {
    try {
      const res = await axios.get("http://localhost:3001/events/my-events", {
        withCredentials: true,
      });
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchBookingsForEvent = async (eventId) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/bookings/by-event/${eventId}`,
        {
          withCredentials: true,
        }
      );
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    fetchBookingsForEvent(event._id);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center pt-20 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-lg shadow-2xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-[#f68600] mb-4">Organizer Dashboard</h2>
          <p className="text-lg text-gray-900 mb-8">Manage your events and view bookings</p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h4 className="text-xl text-gray-700">Total Events</h4>
              <p className="text-3xl font-bold text-[#f68600] mt-2">{events.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h4 className="text-xl text-gray-700">Selected Event Bookings</h4>
              <p className="text-3xl font-bold text-[#f68600] mt-2">{bookings.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h4 className="text-xl text-gray-700">Upcoming Events</h4>
              <p className="text-3xl font-bold text-[#f68600] mt-2">
                {events.filter((e) => new Date(e.date) > new Date()).length}
              </p>
            </div>
          </div>

          {/* Event List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold text-[#f68600] mb-4">Your Events</h3>
              <ul className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                {events.map((event) => (
                  <li
  key={event._id}
  onClick={() => handleEventClick(event)}
  className={`py-3 px-2 cursor-pointer hover:bg-orange-50 rounded-md transition ${
    selectedEvent?._id === event._id ? "bg-orange-100" : ""
  }`}
>
  <p className="font-medium">{event.title}</p>
  <p className="text-sm text-gray-500">
    {new Date(event.date).toLocaleDateString()}
  </p>
</li>
                ))}
              </ul>
            </div>

            {/* Booking Details */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold text-[#f68600] mb-4">Bookings</h3>
              {selectedEvent ? (
                bookings.length ? (
                  <ul className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                    {bookings.map((b) => (
                      <li key={b._id} className="py-2 flex justify-between">
                        <span>{b.name}</span>
                        <span className="text-sm text-gray-600">{b.email}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No bookings for this event yet.</p>
                )
              ) : (
                <p className="text-gray-500">Select an event to view bookings.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
