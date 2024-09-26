import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/neotek-logo.jpeg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav bg-white z-10 top-0 border-b-[1px] border-gray-700">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between sm:py-3 py-2">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-[#070f4e]">
                            {/* <img
                                src={logo}
                                alt="Logo"
                                className="w-[90px] lg:w-[130px]"
                            /> */}
                            <h1 className="uppercase font-bold sm:text-2xl">Eswaran Travels</h1>
                        </div>
                        <div className="hidden md:block font-semibold">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095] hover:bg-white focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-200 flex justify-center items-center">
                    <div className="px-2 py-2 pb-4 space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
