import React, { useState } from "react";
// import FirstTabVehicleCopy from "../Home-Components/Vehicle/FirstTabVehicleCopy";
import SecondTabVehicleCopy from "../Home-Components/Vehicle/SecondTabVehicleCopy";
import ThirdTabVehicleCopy from "../Home-Components/Vehicle/ThirdTabVehicleCopy";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full flex flex-col items-center px-5 lg:px-0">
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:mb-6 text-primary py-6 lg:py-8 tracking-wide"
        style={{ textShadow: "0px 2px 3px rgba(0,0,0,0.7)" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        2 Day / 1 Night Vehicle Packages
      </h2>

      {/* Tab Buttons */}
      <div className="w-full flex justify-center items-center flex-wrap text-sm sm:text-[16px] tracking-wider gap-2 sm:gap-4 px-4">
        {/* <button
          className={`${
            activeTab === 1
              ? "bg-[#070F4E] text-white"
              : "hover:text-secondary"
          } border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl transition-colors duration-300`}
          onClick={() => handleChangeTab(1)}
        >
          Madurai
        </button> */}
        <button
          className={`${
            activeTab === 1
              ? "bg-[#070F4E] text-white"
              : "hover:text-secondary"
          } border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl transition-colors duration-300`}
          onClick={() => handleChangeTab(1)}
        >
          Madurai-Kodaikanal
        </button>
        <button
          className={`${
            activeTab === 2
              ? "bg-[#070F4E] text-white"
              : "hover:text-secondary"
          } border sm:border-2 border-[#070F4E] p-1 sm:p-2 px-2 sm:px-4 rounded-3xl transition-colors duration-300`}
          onClick={() => handleChangeTab(2)}
        >
          Madurai-Rameshwaram
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col justify-center items-center gap-10 w-full py-5">
        {/* First Tab Content */}
        {/* <div className={activeTab === 1 ? "block w-full" : "hidden"}>
          <FirstTabVehicleCopy />
        </div> */}

        {/* Second Tab Content */}
        <div className={activeTab === 1 ? "block w-full" : "hidden"}>
          <SecondTabVehicleCopy />
        </div>

        {/* Third Tab Content */}
        <div className={activeTab === 2 ? "block w-full" : "hidden"}>
          <ThirdTabVehicleCopy />
        </div>
      </div>
    </div>
  );
};

export default Tab;
