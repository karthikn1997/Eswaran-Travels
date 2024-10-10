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
    { km: "280 km", seat: "4+1", amt: "Rs.5400" },
    { km: "280 km", seat: "6+1", amt: "Rs.6600" },
    { km: "280 km", seat: "6+1", amt: "Rs.8400" },
    { km: "280 km", seat: "12+1", amt: "Rs.9200" },
  ];

  const vehicleDetails1 = [
    { km: "300 km", seat: "4+1", amt: "Rs.7000" },
    { km: "300 km", seat: "6+1", amt: "Rs.9000" },
    { km: "300 km", seat: "6+1", amt: "Rs.11500" },
    { km: "300 km", seat: "12+1", amt: "Rs.12000" },
  ];

  return (
    <section className="w-full lg:py-10 lg:px-10">
      <div className="mx-auto lg:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className="bg-[rgba(249,249,249)] hover:shadow-xl shadow-lg rounded-lg lg:hover:scale-[1.02] transition-transform duration-300 border-2 border-gray-200 hover:border-2 hover:border-primary flex flex-col items-center p-3"
            >
              {/* Title Section */}
              <div className="bg-yellow-300 w-full rounded-t-lg py-2 text-center">
                <h3 className="text-xl font-bold text-[#070F4E]">{item.title}</h3>
              </div>

              {/* Image Section */}
              <div className="w-full p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* One Day and 2 Days/1 Night Details Section */}
              <div className="w-[90%] flex flex-col lg:flex-row justify-between px-4 py-4 border border-secondary rounded-lg bg-white gap-4">
                {/* One Day Package */}
                <div className="flex flex-col items-center border-b lg:border-b-0 lg:border-r border-secondary lg:w-1/2 w-full ">
                  <h4 className="text-xl lg:font-semibold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1 font-bold">
                    One Day
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div className="flex items-left gap-3 text-[#070F4E] font-medium mb-3 px-4" key={iconIndex}>
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
                <div className="flex flex-col items-center lg:w-1/2 w-full">
                  <h4 className="text-lg lg:font-semibold font-bold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1">
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
              <div className="py-5 text-center">
                    <h2 className="lg:border-b-2 lg:border-secondary pb-1 tracking-wider font-medium text-primary">
                      Fuel cost , Driver beta , Toll , Parking , Hills charges included.
                    </h2> 
                  </div>
              {/* Book Now Button */}
              <button className="w-3/4 py-2 my-4 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300">
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
