import React, { useEffect } from "react";
import rameshwaram from "../../assets/rameshwaram.jpg";
import { FaLongArrowAltLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Gallery from "../ServiceSection/Gallery";
import { Link } from "react-router-dom";

const MaduraiPackage = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { id: 1, title: "Agni Theertham" },
    { id: 2, title: "Ramanatha Swamy Temple" },
    { id: 3, title: "Ramar patham" },
    { id: 4, title: "Kothanda Ramar Temple" },
    { id: 5, title: "Dhanuskodi" },
    { id: 6, title: "Ram Setu Bridge(India's last land)" },
    { id: 7, title: "House of Kalam" },
    { id: 8, title: "Rama Theertham (Sri Ram Temple)" },
    { id: 9, title: "Sri Panchamuki Hanuman Temple" },
    { id: 10, title: "Dr.ABJ Abdul Kalam Memorial & Bamban Bridge" },
  ];

  const items2 = [
    {
      id: 1,
      price: "1400",
      rating: 4.5,
      description:
        "Rameshwaram is a serene and sacred town located on Pamban Island, off the southeastern coast of Tamil Nadu, India. It is renowned for its rich spiritual significance, picturesque landscapes, and historical importance.",
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
    <div className="lg:w-full h-auto gap-10 lg:p-10 py-5 px-5 border-[1px] border-primary">
      <h2 className="text-center lg:text-3xl text-xl font-bold tracking-wider bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400 text-primary py-2 rounded-t-md lg:mb-2">
        3. Madurai - Rameshwaram Tour Package
      </h2>
      <img
        src={rameshwaram}
        alt="Rameshwaram Tour"
        className="lg:w-full lg:h-[500px] h-[250px] object-cover rounded-b-md"
      />
      <section className="lg:w-full flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
        {items2.map(({ id, price, rating, description }) => (
          <div
            key={id}
            className="lg:w-1/2 w-full h-auto lg:h-[380px] shadow-lg p-5 lg:p-5 text-center lg:text-left rounded-lg border-[1px] border-primary"
          >
            <h2 className="lg:text-2xl text-xl font-semibold text-gray-900 mb-4">
              Package Details
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Price:</span> ₹{price} / per
              person
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 py-5">
              {renderStars(rating)}
              <span className="font-thin text-sm"> (4.5) Top Rating</span>
            </div>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Description:</span> {description}
            </p>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Book Now
            </button>
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
        <div className="lg:w-1/2 h-auto lg:h-[380px] shadow-lg p-5 lg:px-10 lg:text-lg text-medium leading-relaxed text-gray-700 rounded-lg border-[1px] border-primary">
          <h2 className="lg:text-2xl text-xl font-semibold text-primary tracking-wider mb-5">
            Popular places:
          </h2>
          <ul className="list-disc ml-5">
            {items.map((item) => (
              <li key={item.id} className="tracking-wide">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full lg:h-auto gap-2 lg:mt-20 mt-10">
        <h2 className="text-center lg:text-3xl text-xl font-bold text-primary lg:pb-10 mb-5 tracking-wider">
          Gallery of Madurai - Rameshwaram
        </h2>
        <Gallery />
      </div>
      <div className="flex justify-center items-center py-5">
        <button className="lg:mt-10 bg-primary text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out">
          <Link to="/" className="flex items-center gap-3">
            <FaLongArrowAltLeft className="" /> Go Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MaduraiPackage;
