import React, { useEffect } from "react";
import Banner from "../Home-Components/Banner";
import Tabsection from "../Components/Tabsection"
import TabsectionCopy from "../Components/TabsectionCopy";
import Tariff from '../Home-Components/Vehicle/Tariff'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Services = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden">
      <Banner />

      <div className="lg:w-full h-auto  ">

        <Tabsection />

        <TabsectionCopy />

        <Tariff />


        <div className="flex justify-center items-center">
          <button className="my-5 lg:my-10 bg-primary text-white font-semibold py-2 px-6 sm:px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <FaLongArrowAltLeft className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base">Go Back</span>
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
