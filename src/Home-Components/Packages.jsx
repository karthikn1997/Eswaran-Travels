import React from "react";
import { FaLongArrowAltRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiPoliceCarLine } from "react-icons/ri";
import { PiCarProfileLight } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
// import Offer from "../assets/offer.png";
import { Link } from "react-router-dom";

const Packagedetails = () => {
  const gridItems = [
    {
      id: 1,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Madurai",
      price: "Package starting from ₹ 3000",
      rating: "4.5",
      day: "1 D",
      night: " - ",
      destination: "Madurai Sightseeing",
      link: "/firstTabVehicle",
    },
    {
      id: 2,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Kodaikanal",
      price: "Package starting from ₹ 5000",
      rating: "4.5",
      day: "1 D",
      night: "2 D - 1 N",
      destination: "Madurai to Kodaikanal",
      link: "/secondTabVehicleCopy",
    },
    {
      id: 3,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Rameshwaram",
      price: "Package starting from ₹ 6000",
      rating: "4.5",
      day: "1 D",
      night: "2 D - 1 N",
      destination: "Madurai to Rameshwaram",
      link: "/thirdTabVehicleCopy",
    },
    {
      id: 4,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Palani",
      price: "Package starting from ₹ 4500",
      rating: "4.5",
      day: "1 D",
      night: " - ",
      destination: "Madurai to Palani",
      link: "/palaniTab",
    },
    {
      id: 5,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Trichy",
      price: "Package starting from ₹ 5100",
      rating: "4.5",
      day: "1 D",
      night: "- ",
      destination: "Madurai to Trichy",
      link: "/trichyTab",
    },
    {
      id: 6,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Thiruchendur",
      price: "Package starting from ₹ 6000",
      rating: "4.5",
      day: "1 D",
      night: " - ",
      destination: "Madurai to Thiruchendur",
      link: "/thiruchendurTab",
    },
    {
      id: 7,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Munnar",
      price: "Package starting from ₹ 8700",
      rating: "4.5",
      day: " - ",
      night: "2 D - 1 N",
      destination: "Madurai to Munnar",
      link: "/munnar",
    },
    {
      id: 8,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Thekkady",
      price: "Package starting from ₹ 7900",
      rating: "4.5",
      day: " - ",
      night: "2 D - 1 N",
      destination: "Madurai to Thekkady",
      link: "/thekkady",
    },
    {
      id: 9,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Kanyakumari",
      price: "Package starting from ₹ 8700",
      rating: "4.5",
      day: " - ",
      night: "2 D - 1 N",
      destination: "Madurai to Kanyakumari",
      link: "/kanyakumari",
    },
    {
      id: 10,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Madurai to Rameshwaram to Kanyakumari",
      price: "Package starting from ₹ 13500",
      rating: "4.5",
      day: "3 D - 2 N",
      night: "4 D - 3 N",
      destination: "Madurai to Rameshwaram to Kanyakumari",
      link: "/maduRameshKanya",
    },
    {
      id: 11,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Madurai to Rameshwaram to Kanyakumari to Thiruvananthapuram",
      price: "Package starting from ₹ 17900",
      rating: "4.5",
      day: "4 D - 3 N",
      night: "5 D - 4 N",
      destination: "Madurai to Rameshwaram to Kanyakumari to Thiruvananthapuram",
      link: "/maduRamKanThiru",
    },
  ];

  // Function to render stars based on rating (uncomment if needed)

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
    <div className="w-full mx-auto p-4 lg:py-10">
      <h2
        className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-primary bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400 py-2 xxs:py-5 lg:py-3 px-2 xxs:px-4 lg:px-8 mb-6 lg:mb-16 text-center rounded-lg shadow-md"
      >
        Private Vehicle Packages
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-5"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        {gridItems.map((item) => (

          <div
            key={item.id}
            className="relative bg-white shadow-md rounded overflow-hidden border border-secondary transition-transform duration-300 sm:hover:scale-105 sm:min-h-[250px] flex flex-col justify-between"
          >
            <Link to={item.link}>

              <div className="relative w-full overflow-hidden">
              </div>

              <div className="px-3 sm:px-6 h-auto mt-2">
                <h3 className="text-lg font-semibold flex justify-left items-center gap-5 text-primary mb-1">
                  {item.destination}
                  <span className="text-black font-semibold text-2xl mt-1">
                    {item.icon}
                  </span>
                </h3>
                {/* Uncomment for ratings */}
                {<div className="flex items-center gap-2 pt-2">
                  {renderStars(item.rating)}
                  <span className="font-thin text-sm text-gray-700 tracking-wide">( Top Rating )</span>
                </div>}
              </div>

              <div className=" bottom-0  w-full p-2 flex justify-between items-center px-4 xxs:px-6">

                <span className="text-green-500 font-medium flex items-center gap-2">
                  <GoPerson className="text-primary font-extrabold text-xl border-[1px] border-green-500 rounded-full p-1 bg-secondary " /> <h2 className="text-green-500 tracking-wide">
                    {item.price}</h2>
                </span>
              </div>

              <div className="p-2 px-3 sm:px-6 text-sm flex flex-wrap gap-2 my-2 whitespace-nowrap tracking-wide">
                <span className="border px-2 rounded">{item.day}</span>
                <span className="border px-2 rounded">{item.night}</span>
                <span className="border px-2 rounded">AC</span>
                <span className="border px-2 rounded">Complete guidance</span>
              </div>

              <div className="w-full flex justify-center items-center mb-0 px-2 ">
                <button className="w-full px-5 py-2 text-center lg:text-base text-sm font-semibold bg-[#070F4E] rounded text-secondary transition-transform duration-300 hover:scale-105 ">
                  <Link to={item.link} className="flex justify-center items-center gap-3">
                    View Details <FaArrowRightLong className="mt-1 text-white" />
                  </Link>
                </button>
              </div>

            </Link>

            {/* Book Now Button */}
            < a href="tel:+918680986987" className="w-full flex justify-center items-center mb-0 px-2" >
              <button
                className="w-full py-2 my-2 text-primary bg-secondary rounded hover:bg-blue-700 font-bold transition-colors duration-300 hover:text-white shadow shadow-primary"
                onClick={() => window.trackConversion()}  // Add conversion tracking here
              >
                BOOK NOW
              </button>
            </a>

          </div>

        ))
        }
      </div >
    </div >
  );
};

export default Packagedetails;
