import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImage from "../../video/bgimg.mp4";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Trying to login with:", formData);

 const handleLogin = async (e) => {
  e.preventDefault();
   try {
    const response = await axios.post(
      "http://localhost:3001/auth/login", 
      {
        email: formData.email,
        password: formData.password,
      },
      { withCredentials: true }
    );

    const userRole = response.data.user.role;

    alert(`${userRole.charAt(0).toUpperCase() + userRole.slice(1)} login successfully`);
   
    if (userRole === "user") {
      navigate("/dashboard");
    } else if (userRole === "organizer") {
      navigate("/organizer/dashboard");
    } else {
      alert("Unknown role. Cannot proceed.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert(
      error.response?.data?.message || "Something went wrong during login."
    );
  }
     
};


  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full  h-full h-xd object-cover z-0"
        >
          <source src={bgImage} type="video/mp4" />
        </video>
        <div className="max-w-lg w-full h-full bg-white/40 mt-20 bg-opacity-60 backdrop-blur p-10 rounded-2xl shadow-2xl">
          <h1 className="text-center text-3xl font-extrabold text-[#f68600] mb-2">
            Welcome Back!
          </h1>
          <p className="text-center  text-xl text-gray-900 mb-6">
            Sign in to manage your events smoothly and efficiently.
          </p>

          <form className="space-y-5" autoComplete="off" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1  px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68600]"
                placeholder="johndoe@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f68600] pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-900">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox text-gray-900 accent-[#f68600]"
                />
                <span>Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-[#f68600]  hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f68600] hover:bg-[#e67800] text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
            >
              Sign In
            </button>

            <div className="text-center text-xl text-gray-900">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-[#f68600] text-xl hover:underline font-medium"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
