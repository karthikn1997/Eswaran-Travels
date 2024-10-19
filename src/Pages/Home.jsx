import React, { useEffect } from "react";
import Hero from "../Home-Components/Hero";
import AboutTravel from "../Home-Components/AboutTravel";
import Packagedetails from "../Home-Components/Packagedetails";
import Banner from "../Home-Components/Banner";
import Packages from "../Home-Components/Packages";
import Tariff from "../Home-Components/Vehicle/Tariff";
import ChooseUs from "../Home-Components/ChooseUs";
import Testimonial from "../Home-Components/Testimonial";
import { FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center overflow-hidden"
      data-aos="fade-up"
    >
      <Hero />
      <AboutTravel />
      <Packagedetails />
      <Banner />
      <Packages/>
      <Tariff />
      <Link
        to="/services"
        className="text-center sm:w-[60%] md:w-[40%] lg:w-[20%] py-2 px-4 lg:py-3 lg:text-lg text-md font-medium text-white bg-[#070F4E] rounded-lg tracking-wider hover:bg-blue-500 transition-all duration-500 active:bg-[#050c3a] flex justify-center items-center gap-3 lg:gap-5 shadow-lg lg:mb-16 mb-7  animate-bounce animate-duration-200 "
      >
        Explore Packages <FaArrowCircleRight className="text-md lg:text-xl " />
      </Link>
      <ChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
