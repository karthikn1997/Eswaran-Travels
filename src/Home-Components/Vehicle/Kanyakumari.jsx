import React, { useEffect } from "react";
import sedan from "../../assets/sedan.png";
import innova from "../../assets/innova.png";
import innovacrs from "../../assets/innovacrs.png";
import tempo from "../../assets/tempo1.png";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const Vehicledetails = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      id: 1,
      title: "SEDAN",
      description: "2 Days / 1 Night",
      image: sedan,
    },
    {
      id: 2,
      title: "INNOVA",
      description: "2 Days / 1 Night",
      image: innova,
    },
    {
      id: 3,
      title: "INNOVA CRYSTA",
      description: "2 Days / 1 Night",
      image: innovacrs,
    },
    {
      id: 4,
      title: "TEMPO TRAVELLER",
      description: "2 Days / 1 Night",
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
    { detail: "Kanyakumari", km: "550 km", seat: "4+1", amt: "Rs.8700" },
    { detail: "Kanyakumari", km: "550 km", seat: "6+1", amt: "Rs.11000" },
    { detail: "Kanyakumari", km: "550 km", seat: "6+1", amt: "Rs.14000" },
    { detail: "Kanyakumari", km: "550 km", seat: "12+1", amt: "Rs.14800" },
  ];

  return (
    <>
      <section className="lg:w-full lg:h-auto lg:py-5 sm:py-5 px-2 sm:px-10">
        <div className="lg:w-full mx-auto lg:px-4 px-2 lg:py-8 py-4 ">
          <div className="grid lg:grid-cols-2 lg:gap-10 gap-8 ">
            {items.map((item, itemIndex) => (
              <div
                key={item.id}
                className="w-full h-auto rounded-lg hover:shadow shadow-xl  flex flex-col justify-center items-center transform transition-all duration-500 border-2  hover:border-2 hover:border-[#070F4E] sm:lg:hover:scale-[1.02] p-3"
              >
                <div className="bg-yellow-300 w-full rounded-t-lg">
                  <h3 className="lg:text-xl font-bold py-2 tracking-wide text-center text-[#070F4E]">
                    {item.title}
                  </h3>
                </div>

                <div className="w-full min-h-64 flex  xl:flex-row flex-col justify-center items-center ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[80%] sm:w-[60%] bg-center bg-cover object-contain rounded-l-lg hover:rounded-none lg:p-5 xl:ml-8 "
                  />
                  <div
                    className="w-full xl:w-[40%] flex  xl:flex-col justify-center items-left gap-4 rounded-r-lg py-3 whitespace-nowrap flex-wrap xl:px-4"
                    data-aos="fade-up"
                    duration-aos-delay="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="300"
                  >
                    <p className="xl:w-full text-center xl:text-left w-[90%] flex-wrap xl:block lg:text-lg font-bold bg-yellow-100 text-primary rounded py-1 xl:px-3 border border-primary border-opacity-20">
                      {item.description}
                    </p>

                    {icons1.map((iconItem, iconIndex) => (
                      <div
                        className="flex flex-col xl:flex-row items-center gap-3 px-2"
                        key={iconIndex}
                        data-aos="fade-up"
                        duration-aos-delay="300"
                        data-aos-duration="600"
                      >
                        <span className="lg:text-lg font-bold text-[#070F4E] border-[1px] border-secondary hover:text-white hover:bg-[#070F4E]  hover:border-trasparent p-1 transform transition-all duration-400">
                          {iconItem.icon}
                        </span>
                        <p
                          className="text-sm sm:text-base text-gray-600 tracking-wide font-medium"
                          data-aos="fade-up"
                          duration-aos-delay="300"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="700"
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
                <div className="w-[90%] py-3 text-center">
                  <h2 className="w-full bg-green-200  py-1 tracking-wider font-medium text-primary rounded-md text-sm sm:text-md px-2 sm:px-4 mb-2">
                    Fuel cost, Driver bata, Night halt charges included.
                  </h2>
                  <h2 className=" w-full bg-orange-200 py-1 tracking-wider font-medium text-primary rounded-md text-sm sm:text-md px-2 sm:px-4">
                    Toll, Parking excluded.
                  </h2>
                </div>
                <a href="tel:+918680986987" className="w-[90%] mx-auto text-center">
                  <button className="text-center w-full py-2 lg:text-base text-md font-semibold text-white bg-[#070F4E] rounded-lg lg:mb-8 tracking-wider hover:bg-blue-500 transform transition-all duration-500 active:bg-[#050c3a] shadow-lg sm:mb-5">
                    BOOK NOW
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicledetails;


