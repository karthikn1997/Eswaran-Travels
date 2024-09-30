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
    { detail: "Rameshwaram", km: "430 km", seat: "4+1", amt: "Rs.6000" },
    { detail: "Rameshwaram", km: "430 km", seat: "6+1", amt: "Rs.7800" },
    { detail: "Rameshwaram", km: "430 km", seat: "6+1", amt: "Rs.9900" },
    { detail: "Rameshwaram", km: "430 km", seat: "12+1", amt: "Rs.10800" },
  ];

  return (
    <>
      <section className="lg:w-full lg:h-auto lg:py-5 sm:py-5">
        <div className="lg:w-full mx-auto lg:px-4 lg:py-8 py-4 px-2">
          <div className="grid lg:grid-cols-2 lg:gap-10 gap-8 ">
            {items.map((item, itemIndex) => (
              <div
                key={item.id}
                className="w-full h-auto rounded-lg hover:shadow shadow-xl  flex flex-col justify-center items-center transform transition-all duration-500 border-[1px]  hover:border-[1px]  hover:border-[#070F4E] hover:scale-[1.05]"
              >
                <div className="bg-yellow-300 w-full rounded-t-lg">
                  <h3 className="lg:text-xl font-bold py-2 tracking-wide text-center text-[#070F4E]">
                    {item.title}
                  </h3>
                
                </div>
               <div className="flex lg:flex-row flex-col justify-center items-center ">
               <img
                  src={item.image}
                  alt=""
                  className="bg-center bg-cover object-contain lg:w-3/4 lg:h-[300px] rounded-l-lg lg:p-5"
                />
                <div
                  className="lg:w-1/4 lg:h-[300px] flex flex-col justify-center items-left gap-4 rounded-r-lg py-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <button className="lg:text-lg font-semibold w-32 bg-[#070F4E] text-white rounded-lg py-1 lg:mr-3 lg:mb-3 text-center">{item.description}</button>
                  {/* Displaying each icon with its corresponding value */}
                  {icons1.map((iconItem, iconIndex) => (
                    <div
                      className="flex items-center gap-3"
                      key={iconIndex}
                      data-aos="fade-left"
                      data-aos-delay="800"
                      data-aos-duration="400"
                    >
                      <span className="lg:text-lg font-bold text-[#070F4E]  border-[1px] border-secondary hover:text-white hover:bg-[#070F4E]  hover:border-trasparent p-1 transform transition-all duration-400">
                        {iconItem.icon}
                      </span>
                      <p
                        className="text-base text-gray-600 tracking-wide font-medium"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="400"
                      >
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicledetails;