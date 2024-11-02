import React from "react";
import sedan from "../../assets/sedan.png";
import innova from "../../assets/innova.png";
import innovacrs from "../../assets/innovacrs.png";
import tempo from "../../assets/tempo1.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiArrowLeftRightLine } from "react-icons/ri";

const Vehicledetails = () => {
  const items = [
    { id: 1, title: "SEDAN", image: sedan },
    { id: 2, title: "INNOVA", image: innova },
    { id: 3, title: "INNOVA CRYSTA", image: innovacrs },
    { id: 4, title: "TEMPO TRAVELLER", image: tempo },
  ];

  const icons = [
    { id: 1, icon: <FaRoad />, label: "Distance" },
    { id: 2, icon: <MdOutlineAirlineSeatReclineExtra />, label: "Seat" },
    { id: 3, icon: <GiTakeMyMoney />, label: "Price" },
  ];

  const vehicleDetails = [
    { km: "Per km - Rs.13", seat: "4+1", amt: "Driver Bata - Rs.400" },
    { km: "Per km - Rs.18", seat: "6+1", amt: "Driver Bata - Rs.500" },
    { km: "Per km - Rs.22", seat: "6+1", amt: "Driver Bata - Rs.500" },
    { km: "Per km - Rs.23", seat: "12+1", amt: "Driver Bata - Rs.600" }
  ];

  const vehicleDetails1 = [
    { km: "Fuel cost/km - Rs.10", seat: "4+1", amt: "Rent / day - Rs.1600" },
    { km: "Fuel cost/km - Rs.12", seat: "6+1", amt: "Rent / day - Rs.2200" },
    { km: "Fuel cost/km - Rs.16", seat: "6+1", amt: "Rent / day - Rs.2600" },
    { km: "Fuel cost/km - Rs.17", seat: "12+1", amt: "Rent / day - Rs.2700" },
  ];


  return (
    <section className="w-full lg:py-10 lg:px-10 p-2">
      <div className="mx-auto">
        <h2
          className="text-center lg:text-4xl text-2xl xxs:text-3xl font-bold tracking-wider text-primary lg:mb-10 py-5 uppercase"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Vehicle Tariff
        </h2>
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
                <div className="w-full lg:w-1/2 flex flex-col border-b lg:border-b-0 ">
                  <h4 className="lg:text-md lg:font-bold font-bold text-[#070F4E] mb-5 bg-yellow-100 py-1 px-4 rounded-sm uppercase">
                    {item.id === 3 || item.id === 4 ? "Above 350 km" : "Above 300 km"}
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
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h4 className="lg:text-md lg:font-bold font-bold text-[#070F4E] mb-5 bg-yellow-100 py-1 px-4 rounded-sm uppercase">
                    {item.id === 3 || item.id === 4 ? "Below 350 km" : "Below 300 km"}
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
                <h2 className="w-full bg-gray-200 py-1 tracking-wider font-medium text-primary rounded-md text-sm sm:text-md px-2 sm:px-4">
                  Toll, Parking, Hills Station Charges Extra.
                </h2>
              </div>

              {/* Book Now Button */}
              <a href="tel:+918680986987" className="w-[90%] mx-auto text-center py-3">
                <button
                  className="w-full py-2 my-2 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-300"
                  onClick={() => window.trackConversion()}  // Add conversion tracking here
                >
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
