import React, { useState } from "react";
import hallImage from "../../video/hall.jpg";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BecomeOrganizer() {
   const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    organizationType: "",
    eventTypes: [],
    locations: "",
    experience: "",
    portfolio: "",
    description: "",
    availability: "",
    pricing: "",
    reason: "",
    terms: false,
    password: "",            
  confirmPassword: "", 
  });

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "eventTypes") {
      const updated = checked
        ? [...formData.eventTypes, value]
        : formData.eventTypes.filter((type) => type !== value);
      setFormData({ ...formData, eventTypes: updated });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match.");
  return;
}

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phone,
     password: formData.password,
    confirmPassword: formData.confirmPassword,
      location: formData.locations,
      role: "organizer",
    };

      try {
    const res = await axios.post("http://localhost:3001/auth/signup", payload);
    alert(res.data.message || "Successfully registered as an organizer!");
      navigate("/organizer/dashboard");
  } catch (error) {
    alert(error.response?.data?.message || "Signup failed. Please try again.");
    console.error("Signup error:", error);
  }
};

  return (
    <>
      <Header />
      <div
        className="bg-cover bg-center min-h-screen py-16 px-4 md:px-20"
        style={{ backgroundImage: `url(${hallImage})` }}
      >
        <div className="bg-black/70 p-8 md:p-12 mt-6 rounded-xl max-w-4xl mx-auto text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#f68600]">
            Become an Organizer
          </h2>
          <p className="text-sm text-gray-200 mb-8 text-center">
            Partner with Eventify to host unforgettable events and grow your
            audience.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="fullName"
                onChange={handleChange}
                value={formData.fullName}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="company"
                onChange={handleChange}
                value={formData.company}
                placeholder="Company/Organization Name"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="website"
                onChange={handleChange}
                value={formData.website}
                placeholder="Website (optional)"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <select
                name="organizationType"
                onChange={handleChange}
                value={formData.organizationType}
                required
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              >
                <option value="">Select Organization Type</option>
                <option>Event Planner</option>
                <option>Venue Owner</option>
                <option>Freelancer</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="password"
                type="password"
                onChange={handleChange}
                required
                placeholder="Create Password"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                required
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
            </div>

            {/* Event Types */}
            <div>
              <label className="block font-semibold mb-2">
                Event Types You Host
              </label>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                {[
                  "Weddings",
                  "Corporate",
                  "Concerts",
                  "Parties",
                  "Festivals",
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="eventTypes"
                      value={type}
                      checked={formData.eventTypes.includes(type)}
                      onChange={handleChange}
                      className="accent-yellow-400"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="locations"
                onChange={handleChange}
                value={formData.locations}
                placeholder="Preferred Locations"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="experience"
                type="number"
                onChange={handleChange}
                value={formData.experience}
                placeholder="Years of Experience"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="portfolio"
                onChange={handleChange}
                value={formData.portfolio}
                placeholder="Portfolio Link (optional)"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <input
                name="availability"
                onChange={handleChange}
                value={formData.availability}
                placeholder="Availability (Dates/Months)"
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              />
              <select
                name="pricing"
                onChange={handleChange}
                value={formData.pricing}
                className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
              >
                <option value="">Select Pricing Range</option>
                <option>Budget-Friendly</option>
                <option>Mid-Range</option>
                <option>Premium</option>
              </select>
            </div>

            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description}
              rows="3"
              placeholder="Describe Your Past Events"
              className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
            />
            <textarea
              name="reason"
              onChange={handleChange}
              value={formData.reason}
              rows="3"
              placeholder="Why Do You Want to Join Eventify?"
              className="w-full px-4 py-3 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f68600] transition duration-300 hover:border-[#f68600]"
            />

            {/* Terms & Submit */}
            <div className="flex items-center space-x-3 text-sm text-gray-200">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="accent-[#f68600] w-4 h-4"
              />
              <label>
                I agree to the{" "}
                <a
                  href="#"
                  className="underline text-[#f68600] hover:text-white transition duration-300"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f68600] hover:bg-[#e67e00] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
