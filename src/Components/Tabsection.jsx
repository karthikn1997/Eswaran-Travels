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
    <div className="">
      <h2
        className="lg:text-5xl text-3xl  font-bold text-center lg:mb-6 text-secondary py-6 lg:py-8 sm:py-5 tracking-wide"
        style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Vehicle Packages
      </h2>
      <div className="w-full flex justify-center items-center flex-wrap text-sm sm:text-[16px] tracking-wider gap-2 sm:gap-4 px-4">
        <button
          className={
            activeTab === 1
              ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl"
          }
          onClick={() => handleChangeTab(1)}
        >
          Madurai
        </button>
        <button
          className={
            activeTab === 2
              ? "  bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl"
          }
          onClick={() => handleChangeTab(2)}
        >
          Madurai-Kodaikanal
        </button>
        <button
          className={
            activeTab === 3
              ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl"
          }
          onClick={() => handleChangeTab(3)}
        >
          Madurai-Rameshwaram
        </button>
        <button
          className={
            activeTab === 4
              ? "  bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl"
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
