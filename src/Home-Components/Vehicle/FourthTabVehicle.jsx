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
    { detail: "Special Pack", km: "120 km", seat: "4+1", amt: "Rs.3000" },
    { detail: "Special Pack", km: "120 km", seat: "6+1", amt: "Rs.3850" },
    { detail: "Special Pack", km: "120 km", seat: "6+1", amt: "Rs.4850" },
    { detail: "Special Pack", km: "120 km", seat: "12+1", amt: "Rs.5200" },
  ];

  return (
    <>
      <section className="lg:w-full lg:h-auto lg:py-5 sm:py-5">
        <div className="lg:w-full mx-auto lg:px-4 px-2 lg:py-8 py-4 ">
          <div className="grid lg:grid-cols-2 lg:gap-10 gap-8 ">
            {items.map((item, itemIndex) => (
              <div
                key={item.id}
                className="w-full h-auto rounded-lg hover:shadow shadow-xl  flex flex-col justify-center items-center transform transition-all duration-500 border-[1px]  hover:border-[1px] hover:border-[#070F4E] hover:scale-[1.05] "
              >
                <div className="bg-yellow-300 w-full rounded-t-lg">
                  <h3 className="lg:text-xl font-bold py-2 tracking-wide text-center text-[#070F4E]">
                    {item.title}
                  </h3>

                </div>

                <div className="w-full min-h-80 flex xl:flex-row flex-col justify-center items-center xl:gap-10 my-8">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[80%] sm:w-[60%] bg-center bg-cover object-contain rounded-l-lg lg:p-5 xl:ml-8"
                  />
                  <div
                    className="w-full xl:w-[40%] flex xl:flex-col justify-center items-left gap-4 rounded-r-lg py-3 whitespace-nowrap flex-wrap px-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                  >
                    <button className="w-full xl:w-[80%] xl:block lg:text-lg font-semibold bg-[#070F4E] text-white rounded py-1 xl:mr-3 xl:mb-3 text-center">{item.description}</button>

                    {icons1.map((iconItem, iconIndex) => (
                      <div
                        className="flex items-center gap-3"
                        key={iconIndex}
                        data-aos="fade-left"
                        data-aos-delay="800"
                        data-aos-duration="400"
                      >
                        <span className="lg:text-lg font-bold text-[#070F4E] border-[1px] border-secondary hover:text-white hover:bg-[#070F4E]  hover:border-trasparent p-1 transform transition-all duration-400">
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
