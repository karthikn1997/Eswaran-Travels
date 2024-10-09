import React from "react";
import sedan from "../assets/sedan.png";
import innova from "../assets/innova.png";
import innovacrs from "../assets/innovacrs.png";
import tempo from "../assets/tempo.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const Vehicledetails = () => {
  const items = [
    {
      id: 1,
      title: "SEDAN",
      // description: "A sleek, fuel-efficient car perfect for city and long drives.",
      image: sedan,
    },
    {
      id: 2,
      title: "INNOVA",
      // description: "Premium, spacious MPV with powerful performance.",
      image: innova,
    },
    {
      id: 3,
      title: "INNOVA CRYSTA",
      // description: "Advanced features ideal for family travel.",
      image:innovacrs,
    },
    {
      id: 4,
      title: "TEMPO TRAVELLER",
      // description: "A versatile van with ample seating, perfect for group travel and long journeys.",
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
    { detail: "Madurai", km: "350 km", seat: "4-1", amt: "650/1" },
    { detail: "Kodaikanal", km: "850 km", seat: "4-1", amt: "500/1" },
    { detail: "Rameshwaram", km: "350 km", seat: "4-1", amt: "600/1" },
    { detail: "Special Package", km: "450 km", seat: "4-1", amt: "850/1" },
  ];

  return (
    <>
      <section className="lg:w-full lg:h-auto  sm:py-5">
        <div className="lg:w-full mx-auto lg:px-4 lg:py-8">
          
          <div className="grid grid-cols-2 gap-10">
            {items.map((item, itemIndex) => (
              <div
                key={item.id}
                className="w-full h-[350px] rounded-lg hover:shadow shadow-xl p-5 flex transform transition-all duration-500 border-[1px] hover:border-[1px]  hover:border-[#070F4E] hover:scale-[1.05]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="bg-center bg-cover w-3/4 h-[300px] rounded-l-lg "
                />
                <div className="w-1/4 h-[300px] flex flex-col justify-center items-left gap-4 rounded-r-lg " data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-sine" data-aos-duration="600"  >
                  <h3 className="lg:text-xl font-bold tracking-wide text-[#070F4E]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 ">
                    {item.description}
                  </p>
                  {/* Displaying each icon with its corresponding value */}
                  {icons1.map((iconItem, iconIndex) => (
                    <div className="flex items-center gap-2" key={iconIndex} data-aos="fade-left" data-aos-delay="800" data-aos-duration='400'>
                      <span className="lg:text-lg font-bold text-[#070F4E]  border-[1px] border-secondary hover:text-white hover:bg-[#070F4E]  hover:border-trasparent p-1 transform transition-all duration-400" >
                        {iconItem.icon}
                      </span>
                      <p className="text-sm text-gray-600 tracking-wide font-medium" data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="400">
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
               
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Vehicledetails;
