import React, { useEffect } from "react";
import sedan from "../../assets/sedan.png";
import innova from "../../assets/innova.png";
import innovacrs from "../../assets/innovacrs.png";
import tempo from "../../assets/tempo1.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiArrowLeftRightLine } from "react-icons/ri";

const Vehicledetails = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { id: 1, title: "SEDAN", image: sedan },
    { id: 2, title: "INNOVA", image: innova },
    { id: 3, title: "INNOVA CRYSTA", image: innovacrs },
    { id: 4, title: "TEMPO TRAVELLER", image: tempo },
  ];

  const icons = [
    { id: 1, icon: <RiArrowLeftRightLine />, label: "Destination" },
    { id: 2, icon: <FaRoad />, label: "Distance" },
    { id: 3, icon: <MdOutlineAirlineSeatReclineExtra />, label: "Seats" },
    { id: 4, icon: <GiTakeMyMoney />, label: "Price" },
  ];


  const vehicleDetails = [
    { detail: "Rameshwaram", km: "430 km", seat: "4+1", amt: "Rs.6000" },
    { detail: "Rameshwaram", km: "430 km", seat: "6+1", amt: "Rs.7800" },
    { detail: "Rameshwaram", km: "430 km", seat: "6+1", amt: "Rs.9900" },
    { detail: "Rameshwaram", km: "430 km", seat: "12+1", amt: "Rs.10800" },
  ]

  const vehicleDetails1 = [
    { detail: "Rameshwaram", km: "450 km", seat: "4+1", amt: "Rs.8200" },
    { detail: "Rameshwaram", km: "450 km", seat: "6+1", amt: "Rs.10200" },
    { detail: "Rameshwaram", km: "450 km", seat: "6+1", amt: "Rs.13000" },
    { detail: "Rameshwaram", km: "450 km", seat: "12+1", amt: "Rs.13500" },
  ];

  return (
    <section className="w-full lg:py-10 lg:px-10 p-2">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className="bg-white hover:shadow-xl shadow-lg rounded-lg duration-500 border-2  hover:border-2 hover:border-[#070F4E] border-gray-200 flex flex-col items-center p-3"
            >
              {/* Title Section */}
              <div className="bg-yellow-300 w-full rounded-t-lg py-2 text-center">
                <h3 className="text-xl font-bold text-[#070F4E]">{item.title}</h3>
              </div>

              {/* Image Section */}
              <div className="w-full py-10 p-4 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* One Day and 2 Days/1 Night Details Section */}
              <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between gap-6 px-4 py-4 border-[2px] border-secondary rounded-lg">
                {/* One Day Package */}
                <div className="w-full lg:w-1/2 flex flex-col border-b lg:border-b-0 ">
                  <h4 className="lg:text-lg lg:font-semibold font-bold  text-[#070F4E] mb-5 bg-yellow-100 py-1 px-4 rounded-sm uppercase">
                    One day
                  </h4>
                  {icons.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-3 text-[#070F4E] font-medium mb-3 px-4 border py-1 rounded-sm" key={iconIndex}>
                      <span className="lg:text-lg border p-1 rounded-full bg-gray-200">{iconItem.icon}</span>
                      <span>
                        {vehicleDetails[itemIndex][Object.keys(vehicleDetails[itemIndex])[iconIndex]]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 2 Days/1 Night Package */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h4 className="lg:text-md lg:font-bold font-bold text-[#070F4E] mb-5 bg-yellow-100 py-1 px-4 rounded-sm uppercase">
                    2 Days / 1 Night
                  </h4>
                  {icons.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-3 text-[#070F4E] font-medium mb-3 px-4 border py-1 rounded-sm" key={iconIndex}>
                      <span className="lg:text-lg border p-1 rounded-full bg-gray-200">{iconItem.icon}</span>
                      <span>
                        {vehicleDetails1[itemIndex][Object.keys(vehicleDetails1[itemIndex])[iconIndex]]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[90%] py-3 text-center ">
                <h2 className="w-full bg-green-200 py-1 tracking-wider font-medium text-primary rounded-md text-sm sm:text-md px-2 sm:px-4">
                  Fuel cost, Driver bata, Toll, Parking, Night halt included.
                </h2>
              </div>

              {/* Book Now Button */}
              <a href="tel:+918680986987" className="w-[90%] mx-auto text-center  ">
                <button onClick={() => window.trackConversion()} className="w-full py-2 my-2 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300">
                  BOOK NOW
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicledetails;



