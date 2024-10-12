import React, { useEffect } from "react";
import maduraiimg from "../../assets/maduraiimg.jpeg";
import { FaLongArrowAltLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Gallery from "../ServiceSection/Gallery";
import { Link } from "react-router-dom";
import TermsCondition from "./TermsCondition";

const MaduraiPackage = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { id: 1, title: "Meenakshi Amman Temple" },
    { id: 2, title: "Koodal Azhagar Kovil" },
    { id: 3, title: "Thirumalai Nayak Palace" },
    { id: 4, title: "Gandhi Memorial Museum" },
    { id: 5, title: "Teppakulam Mariyamman Temple" },
    { id: 6, title: "Palamuthir solai Murugan temple" },
    { id: 7, title: "Kallazhagar Perumal Temple (Alagar Kovil)" },
    { id: 8, title: "Subramaniya Swamy Temple (Thiruparankunram)" },
  ];

  const items2 = [
    {
      id: 1,
      price: "750",
      rating: 4.5,
      description:
        "Often referred to as the Athens of the East due to its cultural and historical significance, Madurai is famous for its rich heritage, bustling bazaars, and monumental architecture with an all-inclusive tour package.",
    },
  ];

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
    <div className="w-full lg:p-10 p-5 gap-10 border-[1px] border-primary">
      <h2 className="text-center text-xl lg:text-3xl font-bold tracking-wider bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400 text-primary py-2 rounded-t-lg lg:mb-2">
        1. Madurai Tour Package
      </h2>

      <img
        src={maduraiimg}
        alt="Madurai Tour"
        className="w-full lg:h-[500px] h-[300px] object-cover rounded-b-md shadow-md"
      />

      <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 py-10">
        {items2.map(({ id, duration, price, rating, description }) => (
          <div
            key={id}
            className="w-full lg:w-1/2  h-auto lg:h-[380px] text-center lg:text-left shadow-lg p-5 rounded-md border-[1px] border-primary"
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 ">
              Package Details
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Price:</span> ₹{price} / per
              person
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 py-2 lg:py-5">
              {renderStars(rating)}
              <span className="font-thin text-sm">(4.5) Top Rating</span>
            </div>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Description:</span> {description}
            </p>
            <a href="tel:+918680986987">
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Book Now
              </button>
            </a>
            {/* <h2 className="font-medium pt-3 mb-3 lg:mb-0 text-gray-600">Package includes:</h2>
            <div className="w-full tracking-wide text-white lg:px-5 lg:py-1 lg:my-2 bg-gradient-to-b from-blue-500 to-blue-400 shadow-md  rounded-md">
             
              <ul className="list-disc flex lg:flex-row flex-col items-center gap-3 lg:gap-10 p-3 text-base">
                <li>Fuel Cost</li>
                <li>Toll</li>
                <li>Parking</li>
                <li>Driver Beta</li>
              </ul>
            </div> */}
          </div>
        ))}

        <div className="w-full lg:w-1/2  h-auto lg:h-[380px] p-5 rounded-md shadow-lg text-gray-700 leading-relaxed border-[1px] border-primary">
          <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-5">
            Popular places in Madurai:
          </h2>
          <ul className="list-disc pl-5">
            {items.map((item) => (
              <li key={item.id} className="tracking-wide mb-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full py-5">
        <h2 className="text-center text-xl lg:text-3xl font-bold text-primary tracking-wider mb-5 lg:pb-10">
          Gallery of Madurai
        </h2>
        <Gallery />
      </div>

      <div>
        <TermsCondition />
      </div>

      <div className="flex justify-center items-center py-5">
        <Link
          to="/"
          className="bg-primary text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out flex items-center gap-2"
        >
          <FaLongArrowAltLeft /> Go Back
        </Link>
      </div>
    </div>
  );
};

export default MaduraiPackage;
