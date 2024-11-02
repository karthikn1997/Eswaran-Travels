import React, { useEffect } from "react";
import kodaikanal from "../../assets/Kodaikanal.jpg";
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
    { id: 1, title: "Manjalaru Dam View" },
    { id: 2, title: "Silver Cascade Falls" },
    { id: 3, title: "Kurunji Andavar Temple" },
    { id: 4, title: "Upper Lake View & Rose Garden" },
    { id: 5, title: "Moir Point & Pine Forest " },
    { id: 6, title: "Guna Cave & Pillar Rock" },
    { id: 7, title: "Green Valley View Point" },
    { id: 8, title: "Pambar Water Falls" },
    { id: 9, title: "Bryant Park" },
    { id: 10, title: "Kodai Lake" },
  ];

  const items2 = [
    {
      id: 1,
      price: "1300",
      rating: 4.5,
      description:
        "Kodaikanal, often referred to as the Princess of Hill Stations, is a popular hill resort town located in the Dindigul district of Tamil Nadu, India. It is famous for its scenic beauty, cool climate, and serene atmosphere, making it a favorite destination for travelers seeking peace and natural beauty.",
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
    <div className="lg:w-full h-auto gap-10 lg:p-10 p-5 border-[1px] border-primary">
      <h2 className="text-center lg:text-3xl text-xl font-bold tracking-wider bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400  rounded-t-lg lg:mb-2 text-primary py-2">
        2. Madurai - Kodaikanal Tour Package
      </h2>

      {/* Responsive Image Section */}
      <img
        src={kodaikanal}
        alt="Kodaikanal Tour"
        className="w-full h-[300px] lg:h-[500px] object-cover "
      />

      {/* Package Details & Popular Places */}
      <section className="w-full flex flex-col lg:flex-row lg:justify-between gap-5 mt-10">
        {items2.map(({ id, price, rating, description }) => (
          <div
            key={id}
            className="lg:w-1/2 h-auto shadow-lg p-5 text-center lg:text-left text-gray-700 bg-white rounded-lg border-[1px] border-primary"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Package Details</h2>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ₹{price} / per person
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 py-2">
              {renderStars(rating)}
              <span className="text-sm font-thin">(4.5) Top Rating</span>
            </div>
            <p className="mb-4">
              <span className="font-semibold">Description:</span> {description}
            </p>
            
            <a href="tel:+918680986987">
              <button onClick={() => window.trackConversion()} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Book Now
              </button>
            </a>
          </div>
        ))}

        {/* Popular Places Section */}
        <div className="lg:w-1/2 h-auto shadow-lg p-5 bg-white rounded-lg border-[1px] border-primary">
          <h2 className="text-2xl font-semibold text-primary mb-5 tracking-wider">
            Popular Places:
          </h2>
          <ul className="list-disc pl-5">
            {items.map((item) => (
              <li key={item.id} className="mb-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="w-full h-auto gap-5 py-5 lg:mt-10">
        <h2 className="text-center lg:text-3xl text-xl font-bold text-primary mb-10">
          Gallery of Madurai - Kodaikanal
        </h2>
        <Gallery />
      </div>

      <div>
        <TermsCondition />
      </div>

      {/* Go Back Button */}
      <div className="flex justify-center items-center mt-10">
        <Link to="/" className="flex items-center gap-3">
          <button className="bg-primary text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out flex items-center gap-3">
            <FaLongArrowAltLeft /> Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MaduraiPackage;
