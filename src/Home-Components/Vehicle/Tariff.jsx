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
    { id: 1, icon: "Per km", label: "Distance" },
    { id: 3, icon: <MdOutlineAirlineSeatReclineExtra />, label: "Seats" },
    { id: 2, icon:"Driver Beta", label: "Price" },
  ];

  const vehicleDetails = [
    { km: "13 km", seat: "4+1", amt: "Rs.400" },
    { km: "18 km", seat: "6+1", amt: "Rs.500" },
    { km: "22 km", seat: "6+1", amt: "Rs.500" },
    { km: "23 km", seat: "12+1", amt: "Rs.600" },
  ];

  const vehicleDetails1 = [
    { km: "10 km", seat: "4+1", amt: "Rs.1600" },
    { km: "12 km", seat: "6+1", amt: "Rs.2200" },
    { km: "16 km", seat: "6+1", amt: "Rs.2600" },
    { km: "17 km", seat: "12+1", amt: "Rs.2700" },
  ];

  return (
    <section className="w-full  lg:px-10 px-4">
      <div className="mx-auto">
        {/* Title */}
        <h2
          className="lg:text-4xl text-3xl font-bold text-center lg:mb-6 text-primary py-6 lg:py-8 sm:py-5 tracking-wide"
          style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.7)" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Vehicle Tariff Details
        </h2>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className=" hover:shadow-xl shadow-lg rounded-lg hover:scale-[1.05] transition-transform duration-300 border-2 border-gray-200 flex flex-col items-center p-3 bg-[rgba(249,249,249)] hover:border-primary h0ver:border-2"
            >
              {/* Title Section */}
              <div className="bg-yellow-300 w-full rounded-t-lg py-2 text-center">
                <h3 className="text-xl font-bold text-[#070F4E]">
                  {item.title}
                </h3>
              </div>

              {/* Image Section */}
              <div className="w-full p-4 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Pricing Details Section */}
              <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between px-4 py-4 border-[1px] border-secondary rounded-lg bg-white">
                {/* Above 300 Km Details */}
                <div className="w-1/2 flex flex-col items-center lg:border-r-[1px] lg:border-secondary text-[#070F4E]  hover:bg-primary hover:text-white transform transition-all duration-500">
                  <h4 className="lg:text-lg  font-semibold text-center  mb-5 border-b-2  border-secondary pb-1">
                    Above 300 Km (Per day)
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div
                      className="flex items-left gap-3 font-medium mb-3 px-4"
                      key={iconIndex}
                    >
                      <span className="text-lg border p-1 rounded-full">
                        {iconItem.icon}
                      </span>
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

                {/* Below 300 Km Details */}
                <div className="w-1/2 flex flex-col items-center text-[#070F4E]  hover:bg-primary hover:text-white transform transition-all duration-500">
                  <h4 className="lg:text-lg font-semibold text-center  mb-5 border-b-2 border-secondary pb-1">
                    Below 300 Km (Per day)
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div
                      className="flex items-center gap-3  font-medium mb-3 px-4"
                      key={iconIndex}
                    >
                      <span className="text-xl border p-1 rounded-full">
                        {iconItem.icon}
                      </span>
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
