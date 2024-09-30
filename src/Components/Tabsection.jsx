import React, { useState } from "react";
import FirstTabVehicle from "../Home-Components/Vehicle/FirstTabVehicle";
import SecondTabVehicle from "../Home-Components/Vehicle/SecondTabVehicle";
import ThirdTabVehicle from "../Home-Components/Vehicle/ThirdTabVehicle";
import FourthTabVehicle from "../Home-Components/Vehicle/FourthTabVehicle";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <h2
        className="lg:text-5xl text-2xl  font-bold text-center py-10  lg:mb-6 text-secondary lg:py-8 sm:py-5 tracking-wide"
        style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Vehicle Package
      </h2>
      <div className="lg:w-[100%] sm:w-[50%] flex lg:flex-row justify-around items-center lg:gap-10  lg:text-lg text-xs lg:font-semibold font-medium tracking-wide shadow-lg border-[1px] border-[#070F4E] lg:px-5  lg:mx-5 transform transition-all duration-500">
        <button
          className={
            activeTab === 1
              ? " bg-[#070F4E] text-white  lg:px-10 lg:py-2   py-1 "
              : "hover:text-secondary"
          }
          onClick={() => handleChangeTab(1)}
        >
          Madurai
        </button>
        <button
          className={
            activeTab === 2
              ? "  bg-[#070F4E] text-white lg:px-10 lg:py-2  py-1"
              : "hover:text-secondary"
          }
          onClick={() => handleChangeTab(2)}
        >
          Madurai-Kodaikanal
        </button>
        <button
          className={
            activeTab === 3
              ? " bg-[#070F4E] text-white lg:px-10 lg:py-2  py-1"
              : "hover:text-secondary"
          }
          onClick={() => handleChangeTab(3)}
        >
          Madurai-Rameshwaram
        </button>
        <button
          className={
            activeTab === 4
              ? "  bg-[#070F4E] text-white lg:px-10 lg:py-2 py-1"
              : "hover:text-secondary"
          }
          onClick={() => handleChangeTab(4)}
        >
          Special Package
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className={activeTab === 1 ? "block " : "hidden"}>
          <h2>
            <FirstTabVehicle />
          </h2>
        </div>
        <div className={activeTab === 2 ? "block" : "hidden"}>
          <h2>
            <SecondTabVehicle />
          </h2>
        </div>
        <div className={activeTab === 3 ? "block" : "hidden"}>
          <h2>
            <ThirdTabVehicle />
          </h2>
        </div>
        <div className={activeTab === 4 ? "block " : "hidden"}>
          <h2>
            <FourthTabVehicle />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tab;
