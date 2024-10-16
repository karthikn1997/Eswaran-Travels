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
    { km: "900 km", seat: "4+1", amt: "Rs.13500" },
    { km: "900 km", seat: "6+1", amt: "Rs.17400" },
    { km: "900 km", seat: "6+1", amt: "Rs.22200" },
    { km: "900 km", seat: "12+1", amt: "Rs.23400" },
  ];

  const vehicleDetails1 = [
    { km: "950 km", seat: "4+1", amt: "Rs.15900" },
    { km: "950 km", seat: "6+1", amt: "Rs.20200" },
    { km: "950 km", seat: "6+1", amt: "Rs.25600" },
    { km: "950 km", seat: "12+1", amt: "Rs.27000" },
  ];

  return (
    <section className="w-full lg:py-10 lg:px-10 p-5 ">
      <div className="mx-auto">
      <h2
          className="lg:text-4xl text-2xl lg:font-bold font-bold text-center lg:mb-6 text-primary py-6 lg:py-8 sm:py-5 tracking-wide"
          style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.7)" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Madurai to Rameshwaram to Kanyakumari 
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
                  <h4 className="lg:text-lg lg:font-semibold font-bold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1">
                   3 Days / 2 Nights
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
                  <h4 className="lg:text-lg lg:font-semibold font-bold text-center text-[#070F4E] mb-5 border-b-2 border-secondary pb-1">
                    4 Days / 2 Nights
                  </h4>

                  {icons1.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-3 text-[#070F4E] font-medium mb-3 px-4" key={iconIndex}>
                      <span className="lg:text-lg border p-1 rounded-full">{iconItem.icon}</span>
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
                    <h2 className="lg:border-b-2 lg:border-secondary pb-1 tracking-wider font-medium text-primary mb-2">
                      Fuel cost , Driver bata ,Night halt charges included.
                    </h2> 
                    <h2 className="pb-1 tracking-wider font-medium text-primary">
                     Toll , Parking excluded.
                    </h2> 
                  </div>
              {/* Book Now Button */}
              <button className="w-3/4 py-2 my-4 text-white bg-[#070F4E] rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
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


// const vehicleDetails = [
//   {detail: "Kodaikanal", km: "300 km", seat: "4+1", amt: "Rs.7000" },
//   { detail: "Kodaikanal",km: "300 km", seat: "6+1", amt: "Rs.9000" },
//   { detail: "Kodaikanal",km: "300 km", seat: "6+1", amt: "Rs.11500" },
//   {detail: "Kodaikanal", km: "300 km", seat: "12+1", amt: "Rs.12000" },
// ];
