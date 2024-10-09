import React from "react";
import sedan from "../../assets/sedan.png";
import innova from "../../assets/innova.png";
import innovacrs from "../../assets/innovacrs.png";
import tempo from "../../assets/tempo1.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";


const Vehicledetails = () => {
  const items = [
    {
      id: 1,
      title: "SEDAN",
      description: "One Day",
      image: sedan,
    },
    {
      id: 2,
      title: "INNOVA",
      description: "One Day",
      image: innova,
    },
    {
      id: 3,
      title: "INNOVA CRYSTA",
      description: "One Day",
      image: innovacrs,
    },
    {
      id: 4,
      title: "TEMPO TRAVELLER",
      description: "One Day",
      image: tempo,
    },
  ];

  const icons1 = [
    { id: 1, icon: <FaLocationDot />, value: "Madurai" },
    { id: 2, icon: <FaRoad />, value: "350 km" },
    { id: 3, icon: <MdOutlineAirlineSeatReclineExtra />, value: "4-1" },
    { id: 4, icon: <GiTakeMyMoney />, value: "650/1" },
  ];

  // Values corresponding to each vehicle
  const vehicleDetails = [
    { detail: "Madurai", km: "120 km", seat: "4+1", amt: "Rs.3000" },
    { detail: "Madurai", km: "120 km", seat: "6+1", amt: "Rs.3850" },
    { detail: "Madurai", km: "120 km", seat: "6+1", amt: "Rs.4850" },
    { detail: "Madurai", km: "120 km", seat: "12+1", amt: "Rs.5200" },
  ];

  return (
    <section className="w-full lg:py-10 ">
      <div className=" mx-auto lg:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className="bg-white hover:shadow-xl shadow-lg rounded-lg hover:scale-[1.05] transition-transform duration-300 border border-gray-200 flex flex-col items-center p-3"
            >
              {/* Title Section */}
              <div className="bg-yellow-300 w-full rounded-t-lg py-2 text-center">
                <h3 className="text-xl font-bold text-[#070F4E]">
                  {item.title}
                </h3>
              </div>

              {/* Image Section */}
              <div className="w-full p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Details Section */}
              <div className="w-full px-4 py-4 space-y-3">
               

                {/* Icon Details */}
                {icons1.map((iconItem, iconIndex) => (
                  <div
                    className="flex  items-center lg:ml-5 gap-3 text-[#070F4E] font-medium "
                    key={iconIndex}
                  >
                    <span className="text-xl border p-1 rounded-full">
                      {iconItem.icon}
                    </span>
                    <p>
                      {iconIndex === 0
                        ? vehicleDetails[itemIndex].detail
                        : iconIndex === 1
                        ? vehicleDetails[itemIndex].km
                        : iconIndex === 2
                        ? vehicleDetails[itemIndex].seat
                        : vehicleDetails[itemIndex].amt}
                    </p>
                  </div>
                ))}
              </div>

              {/* Book Now Button */}
              <button className="w-3/4 py-2 mb-4 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
