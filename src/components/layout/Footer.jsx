import React from 'react';
import { Link } from 'react-router-dom';
import { BsGlobe } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Eventify</h2>
            <p className="text-sm text-gray-400">
              Your one-stop solution for all event booking and management needs. We make your moments unforgettable.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link to="" className="hover:text-white transition">What We Offer</Link></li>
              <li><Link to="" className="hover:text-white transition">Event Planning</Link></li>
              <li><Link to="" className="hover:text-white transition">Venue Booking</Link></li>
              <li><Link to="" className="hover:text-white transition">Corporate Events</Link></li>
              <li><Link to="" className="hover:text-white transition">Wedding Management</Link></li>
            </ul>
          </div>


           {/* Column 5 - New Column for Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Important Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link to="/becomeorganizer" className="hover:text-white transition">Become an Organizer</Link></li>
              <li><Link to="" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="" className="hover:text-white transition">Support Center</Link></li>
              <li><Link to="" className="hover:text-white transition">FAQs</Link></li>
              <li><Link to="" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>


          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300 pl-5">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-lg text-blue-400" />
                <span>123 Event Street, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-lg text-green-400" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-lg text-yellow-400" />
                <span>support@eventify.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 pl-9">
              <a href="#" title="Website" className="p-2 bg-gray-800 hover:bg-blue-500 rounded-full transition duration-300">
                <BsGlobe className="text-xl text-white" />
              </a>
              <a href="#" title="Facebook" className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition duration-300">
                <FaFacebookF className="text-xl text-white" />
              </a>
              <a href="#" title="Instagram" className="p-2 bg-gray-800 hover:bg-pink-500 rounded-full transition duration-300">
                <FaInstagram className="text-xl text-white" />
              </a>
              <a href="#" title="Twitter" className="p-2 bg-gray-800 hover:bg-cyan-500 rounded-full transition duration-300">
                <FaTwitter className="text-xl text-white" />
              </a>
            </div>
          </div>

         
        </div>

        <div className="border-t mt-10 border-white/30 pt-4 pb-2 text-center text-gray-300 w-300 ml-10">
          © 2025 Eventify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
