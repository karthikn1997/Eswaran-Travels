import React, { useEffect } from "react";
import Banner from "../Home-Components/Banner";
import Tabsection from "../Components/Tabsection"
import TabsectionCopy from "../Components/TabsectionCopy";
import MaduRameshKanya from '../Home-Components/Vehicle/MaduRameshKanya'
import MaduRamKanThiru from '../Home-Components/Vehicle/MaduRamKanThiru'
import PrivatePackageTerms from "../Components/ServiceSection/PrivatePackageTerms"
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Services = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden ">
      <Banner />
      <h2 className='w-[95%] my-5 text-2xl md:text-4xl p-2 text-center font-bold tracking-wider text-white bg-gradient-to-r from-blue-500 to-blue-300 rounded-md' style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }}>
        Private Vehicle Packages
      </h2>
      <div className="lg:w-full h-auto">
        <Tabsection />

        <TabsectionCopy />

        <MaduRameshKanya />

        <MaduRamKanThiru />

        <PrivatePackageTerms />

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
