import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUserTag,
} from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_URL; // or hardcode your API URL

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signup`, data, {
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        reset(); // clear form
        // Redirect to login page after successful registration
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while registering."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Back Button */}
      <div className="self-start ml-4 ">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          <FaArrowLeft className="mr-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-800 px-6 py-4 text-center">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="mt-2 text-blue-100">
              Join JobUpon to find your dream job
            </p>
          </div>

          <div className="px-8 py-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("fullname", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name should be at least 3 characters",
                      },
                    })}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullname && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Create a password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  I am a
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserTag className="text-gray-400" />
                  </div>
                  <select
                    {...register("role", { required: "Please select a role" })}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none bg-no-repeat bg-right"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a0aec0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')",
                      backgroundPosition: "right 0.5rem center",
                    }}
                  >
                    <option value="">Select your role</option>
                    <option value="Student">Student</option>
                    <option value="Recruiter">Recruiter</option>
                  </select>
                </div>
                {errors.role && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-3 rounded-lg hover:opacity-90 transition-all shadow-md font-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Your Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-500 text-sm">
          By creating an account, you agree to our{" "}
          <Link to="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
