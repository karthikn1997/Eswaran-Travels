import React from "react";
import sedan from "../../assets/sedan.png";
import innova from "../../assets/innova.png";
import innovacrs from "../../assets/innovacrs.png";
import tempo from "../../assets/tempo1.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const Vehicledetails = () => {
  const items = [
    { id: 1, title: "SEDAN", image: sedan },
    { id: 2, title: "INNOVA", image: innova },
    { id: 3, title: "INNOVA CRYSTA", image: innovacrs },
    { id: 4, title: "TEMPO TRAVELLER", image: tempo },
  ];

  const icons1 = [
    { id: 1, icon: <FaRoad />, label: "Distance" },
    { id: 2, icon: <MdOutlineAirlineSeatReclineExtra />, label: "Seats" },
    { id: 3, icon: <GiTakeMyMoney />, label: "Price" },
  ];

  const vehicleDetails = [
    { km: "430 km", seat: "4+1", amt: "Rs.6000" },
    { km: "430 km", seat: "6+1", amt: "Rs.7800" },
    { km: "430 km", seat: "6+1", amt: "Rs.9900" },
    { km: "430 km", seat: "12+1", amt: "Rs.10800" },
  ];

  const vehicleDetails1 = [
    { km: "450 km", seat: "4+1", amt: "Rs.8200" },
    { km: "450 km", seat: "6+1", amt: "Rs.10200" },
    { km: "450 km", seat: "6+1", amt: "Rs.13000" },
    { km: "450 km", seat: "12+1", amt: "Rs.13500" },
  ];

  return (
    <section className="w-full lg:py-10 lg:px-10 ">
      <div className="mx-auto lg:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className="bg-white hover:shadow-xl shadow-lg rounded-lg hover:scale-[1.05] transition-transform duration-300 border border-gray-200 flex flex-col items-center p-3"
            >
              {/* Title Section */}
              <div className="bg-yellow-300 w-full rounded-t-lg py-2 text-center">
                <h3 className="text-xl font-bold text-[#070F4E]">{item.title}</h3>
              </div>

              {/* Image Section */}
              <div className="w-full  p-4 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* One Day and 2 Days/1 Night Details Section */}
              <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between gap-6 px-4 py-4 border-[1px] border-secondary rounded-lg">
                {/* One Day Package */}
                <div className="w-full lg:w-1/2 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-secondary">
                  <h4 className="text-xl font-semibold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1">
                    One Day
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-3 text-[#070F4E] font-medium mb-3 px-4" key={iconIndex}>
                      <span className="text-xl border p-1 rounded-full">{iconItem.icon}</span>
                      <p>
                        {iconIndex === 0
                          ? vehicleDetails[itemIndex].km
                          : iconIndex === 1
                          ? vehicleDetails[itemIndex].seat
                          : vehicleDetails[itemIndex].amt}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 2 Days/1 Night Package */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                  <h4 className="text-xl font-semibold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1">
                    2 Days / 1 Night
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-3 text-[#070F4E] font-medium mb-3 px-4" key={iconIndex}>
                      <span className="text-xl border p-1 rounded-full">{iconItem.icon}</span>
                      <p>
                        {iconIndex === 0
                          ? vehicleDetails1[itemIndex].km
                          : iconIndex === 1
                          ? vehicleDetails1[itemIndex].seat
                          : vehicleDetails1[itemIndex].amt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <button className="w-3/4 py-2 my-4 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 transition-colors duration-300">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicledetails;