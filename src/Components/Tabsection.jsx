import React, { useState } from "react";
import FirstTabVehicle from "../Home-Components/Vehicle/FirstTabVehicle";
import SecondTabVehicle from "../Home-Components/Vehicle/SecondTabVehicle";
import ThirdTabVehicle from "../Home-Components/Vehicle/ThirdTabVehicle";
import PalaniTab from "../Home-Components/Vehicle/PalaniTab";
import ThiruchendurTab from "../Home-Components/Vehicle/ThiruchendurTab"
import TrichyTab from "../Home-Components/Vehicle/TrichyTab"

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-fit mx-auto ">
      <h2
        className="text-center lg:text-4xl text-3xl font-bold tracking-wider text-primary  lg:py-5 lg:mb-10 py-5"
        style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.7)" }}
        data-aos="fade-up"
          data-aos-duration="800"
      >
        One Day Vehicle Packages
      </h2>

      <div className="w-full flex justify-center items-center flex-wrap text-sm sm:text-[16px] tracking-wider gap-2 sm:gap-4 px-4">
        <button
          className={
            activeTab === 1
              ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white font-semibold tracking-wider"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl font-semibold text-primary"
          }
          onClick={() => handleChangeTab(1)}
        >
          Madurai
        </button>
       
        <button
          className={
            activeTab === 2
              ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white font-semibold tracking-wider"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl font-semibold text-primary"
          }
          onClick={() => handleChangeTab(2)}
        >
          Madurai-Palani
        </button>
        <button
          className={
            activeTab === 3
             ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white font-semibold tracking-wider"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl font-semibold text-primary"
          }
          onClick={() => handleChangeTab(3)}
        >
          Madurai-Thiruchendur
        </button>
        <button
          className={
            activeTab === 4
              ? " bg-[#070F4E] border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl text-white font-semibold tracking-wider"
              : "hover:text-secondary border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl font-semibold text-primary"
          }
          onClick={() => handleChangeTab(4)}
        >
          Madurai-Trichy
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
            <PalaniTab/>
          </h2>
        </div>
        <div className={activeTab === 3 ? "block" : "hidden"}>
          <h2>
            <ThiruchendurTab/>
          </h2>
        </div>
        <div className={activeTab === 4 ? "block" : "hidden"}>
          <h2>
            <TrichyTab/>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tab;
