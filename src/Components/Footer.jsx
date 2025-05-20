import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f1f2f4]  text-[#071021]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Logo and Newsletter */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">
                JobUpon<span className="text-sm align-super">™</span>
              </h2>
            </div>
            <p className="text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-600 pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#0A1731] text-white rounded-full px-6 py-2 hover:bg-opacity-90 transition duration-300"
              >
                Subscribe
              </button>

              <p className="text-xs text-gray-600">
                By subscribing you agree to with our{" "}
                <Link to="/privacy" className="underline hover:text-black">
                  Privacy Policy
                </Link>{" "}
                and provide consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Middle Section: Services */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/yoga" className="hover:underline">
                  Job Search Assistance
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="hover:underline">
                  Comapany Training
                </Link>
              </li>
              <li>
                <Link to="/services/workshops" className="hover:underline">
                  Wellness Workshops
                </Link>
              </li>
              <li>
                <Link to="/services/coaching" className="hover:underline">
                  Personalized Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright and Legal Links */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy;{currentYear}. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-2 sm:mt-0">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:underline">
              Terms of Service
            </Link>
            <button className="text-sm text-gray-600 hover:underline">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
