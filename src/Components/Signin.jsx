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
  FaEnvelope,
  FaLock,
  FaUserTag,
} from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signin`, data, {
        withCredentials: true, // Required for sending cookie
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Optionally save user info to localStorage or context
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/"); // Redirect to home/dashboard
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Login failed";
      toast.error(msg);
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-800 px-6 py-8 text-center">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="mt-2 text-blue-100">
              Sign in to access your JobUpon account
            </p>
          </div>

          <div className="px-8 py-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                    })}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                {/* <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Forgot your password?
                  </Link>
                </div> */}
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
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          By signing in, you agree to our{" "}
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

export default Login;
