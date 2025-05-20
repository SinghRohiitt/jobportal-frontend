import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      name: "Jobs",
      hasDropdown: true,
      path: "/jobs",
      dropdown: [
        { name: "Search Jobs", path: "/jobs/search" },
        { name: "Popular Jobs", path: "/jobs/popular" },
        { name: "Remote Jobs", path: "/jobs/remote" },
      ],
    },
    {
      name: "Company",
      hasDropdown: true,
      path: "/company",
      dropdown: [
        { name: "About Us", path: "/company/about" },
        { name: "Team", path: "/company/team" },
        { name: "Careers", path: "/company/careers" },
      ],
    },
    {
      name: "Our Customers",
      hasDropdown: false,
      path: "/customers",
    },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <img
                src="https://i.pinimg.com/736x/bd/bb/8f/bdbb8f713cdba13db093108cb95ab010.jpg"
                alt="jobUpon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
              /> */}
              <span className="text-xl sm:text-2xl font-bold text-[#0A1731] bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
                JobUpon
              </span>
            </Link>
          </div>

          {/* Middle Section: Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-10 text-md font-medium text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 py-2 hover:text-blue-600 transition duration-150"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 w-48 mt-1 bg-white rounded-md shadow-lg py-1 z-20">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signup"
              className="border border-blue-600 px-5 py-2 rounded-lg font-medium text-sm text-blue-600 hover:bg-blue-50 transition duration-150"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow transition duration-150"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <div
                  className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  <Link to={item.path} className="flex-grow">
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="pt-4 flex flex-col space-y-2 px-3">
              <Link
                to="/signup"
                className="border border-blue-600 px-4 py-2 rounded-lg font-medium text-sm text-blue-600 hover:bg-blue-50 text-center transition duration-150"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow text-center transition duration-150"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
