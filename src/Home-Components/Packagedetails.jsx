import React from "react";
import { FaLongArrowAltRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import pac1Image from "../assets/pac-1.jpeg";
import pac2Image from "../assets/pac-2.jpeg";
import { RiPoliceCarLine } from "react-icons/ri";
import { PiCarProfileLight } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import Offer from "../assets/offer.png";
import { Link } from "react-router-dom";

const Packagedetails = () => {
  const gridItems = [
    {
      id: 1,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Madurai",
      price: "750",
      destination: "Madurai Sightseening",
      img: pac1Image,
      rating: 4.5,
      link: "/maduraipackage",
    },
    {
      id: 2,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Kodaikanal",
      price: "1300",
      destination: "Madurai to Kodaikanal",
      img: pac2Image,
      rating: 4.5,
      link: "/kodaikanalpackage",
    },
    {
      id: 3,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Rameshwaram",
      price: "1400",
      destination: "Madurai to Rameshwaram",
      img: pac1Image,
      rating: 4.5,
      link: "/rameshwarampackage",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="w-full mx-auto p-4 pb-10 lg:py-20 px-4 sm:px-10">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-secondary bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400 py-5 lg:py-3 px-4 lg:px-8 mb-6 lg:mb-16 text-center lg:rounded-ss-full rounded-ss-3xl lg:rounded-ee-full rounded-ee-3xl"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)" }}
      >
        Our Popular Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"data-aos="fade-up"
            duration-aos-delay="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-md rounded overflow-hidden border border-secondary"
            
          >
            <Link to={item.link}>
            <div className="relative w-full overflow-hidden">
              <img
                className="w-full h-52 object-cover transform transition-all duration-300 lg:hover:scale-[1.02]"
                src={item.img}
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-40 bg-black p-2 px-6 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-white flex items-center gap-3">
                  {item.car} {item.title}
                </h1>
                <span className="text-white font-semibold flex justify-center items-center gap-2">
                  ₹ {item.price} <GoPerson />
                </span>
              </div>
            </div>

            <div className="px-3 sm:px-6 h-auto mt-2">
              <h3 className="text-base font-semibold flex justify-left items-center gap-5 text-primary mb-1">
                {item.destination}
                <span className="text-black font-semibold text-2xl mt-1">
                  {item.icon}
                </span>
              </h3>
              <div className="flex items-center gap-2">
                {renderStars(item.rating)}
                <span className="font-thin text-sm">( Top Rating )</span>
              </div>
            </div>

            {/* <div className="p-2 px-3 sm:px-6 h-auto text-sm flex flex-col gap-2 sm:gap-4 my-2 whitespace-nowrap tracking-wide">
              <span>Special Offers:</span>
              <div className="flex flex-wrap gap-1 xl:gap-3">
                <span className="border px-2">1 Day</span>
                <span className="border px-2">Driver beta</span>
                <span className="border px-2">Toll </span>
                {item.title === "Kodaikanal" && (
                  <span className="border px-2 text-balance ">Hills Charges </span>
                )}
              </div>
            </div> */}

            <div className="w-full flex justify-center items-center mb-0 p-1">
              <button className="w-full px-5 py-2 text-center lg:text-base text-sm font-semibold bg-[#070F4E] rounded text-secondary lg:hover:scale-[1.02] transform transition-all tracking-wider ">
                <Link
                  to={item.link}
                  className="flex justify-center items-center gap-3"
                >
                  {" "}
                  More Details <FaArrowRightLong className="mt-1 text-white" />
                </Link>
              </button>
            </div>

            <div className="absolute z-10 top-2 left-2">
              <img src={Offer} className="w-14 h-14" alt="" />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packagedetails;
