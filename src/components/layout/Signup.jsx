import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FaEyeSlash,
  FaEye,
  FaGoogle,
} from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { HiOutlineMail } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';
import { IoLockClosedOutline } from 'react-icons/io5';
import bgImage from '../../video/bg-img.jpg';
import Header from './Header';
import Footer from './Footer';

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    location: '',
    organization: '',
    eventInterests: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPayload = {
      ...formData,
      role: "user",
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/auth/signup",
        userPayload
      );
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <>
      <Header />
      <div
        className="bg-py-12 mt-20 pb-10 flex bg-cover bg-center bg-no-repeat justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form
          className="bg-white/20 mt-6 bg-opacity-60 backdrop-blur shadow-2xl w-full max-w-3xl p-8 rounded-lg shadow-xl border"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-[#f68600] mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-[#f68600] mb-6">
            Complete the information to start managing or booking events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block mb-2 font-medium">Full Name</label>
            <RxPerson className="absolute left-3 top-11 text-gray-600" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 pl-9 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="Jane Doe"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium">Email Address</label>
            <HiOutlineMail className="absolute left-3 top-11 text-gray-600" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 pl-9 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="jane@example.com"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium">Phone Number</label>
            <LuPhone className="absolute left-3 top-11 text-gray-600" />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 pl-9 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="‪+92 300 1234567‬"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="Lahore, Pakistan"
            />
          </div>

          {/* <div className="relative">
            <label className="block mb-2 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
            >
              <option value="">Select your role</option>
              <option value="Organizer">Organizer</option>
              <option value="Attendee">Attendee</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div> */}

          <div className="relative  md:col-span-2">
            <label className="block mb-2 font-medium">Organization Name (Optional)</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="Eventify Pvt. Ltd."
            />
          </div>

          <div className="relative md:col-span-2">
            <label className="block mb-2 font-medium">Event Interests</label>
            <input
              type="text"
              name="eventInterests"
              value={formData.eventInterests}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
              placeholder="e.g. Weddings, Conferences, Birthday Parties"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium">Password</label>
            <IoLockClosedOutline className="absolute left-3 top-11 text-gray-600" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 pl-9 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium">Confirm Password</label>
            <IoLockClosedOutline className="absolute left-3 top-11 text-gray-600" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 pl-9 border rounded focus:outline-none focus:ring-2 focus:ring-[#f68600]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-11 text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#f68600] text-white py-2 rounded-lg font-semibold hover:bg-[#e67800] transition"
          >
            Sign Up
          </button>

          {/* Social */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="px-3 text-gray-900 text-xl">or register with</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-15">
            <Link
              to="https://www.google.com"
              className="flex items-center gap-2 px-20 py-2 border rounded hover:shadow"
            >
              <FaGoogle /> Google
            </Link>
            <Link
              to="https://www.linkedin.com"
              className="flex items-center gap-2 px-20 py-2 border rounded hover:shadow"
            >
              <FiLinkedin /> LinkedIn
            </Link>
          </div>

          <p className="text-center text-gray-900 mt-6">
            Already have an account?
            <Link to="/loginpage" className="text-[#f68600] font-semibold ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
