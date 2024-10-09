import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "./../assets/quote.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-25px] md:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#070F4E] bg-[#FACC15] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#070F4E] hover:text-[#FACC15] transition-all"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-25px] md:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#070F4E] bg-[#FACC15] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#070F4E] hover:text-[#FACC15] transition-all"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const HomeTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Use custom next arrow
    prevArrow: <PrevArrow />,  // Use custom prev arrow
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small devices
        },
      },
      {
        breakpoint: 1024, // For medium devices
        settings: {
          slidesToShow: 2, // Show 2 slides on medium devices
        },
      },
    ],
  };

  const testimonials = [
    {
      img: quote,
      h: "Karthikeyan",
      p: "I recently booked a tour package with Eswaran Travels for Madurai to Kodaikanal, and I must say, it was an unforgettable experience! From the beginning, the team was very professional and attentive, ensuring that all our travel needs were met.",
    },
    {
      img: quote,
      h: "Naveen Kumar",
      p: "I signed up for a tour package with Eswaran Travels for a trip to Kodaikanal, and it was an absolutely magical experience! The town's mist-covered hills and lush greenery were breathtaking. Eswaran Travels ensured everything went smoothly.",
    },
    {
      img: quote,
      h: "Aananthi",
      p: "I organized a trip with Eswaran Travels for a trip to Rameshwaram, and it was an unforgettable spiritual journey! Eswaran Travels ensured a seamless experience, allowing us to focus on the spiritual significance of the trip without any worries.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-20 text-center gap-10 px-6 sm:px-10 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h2
        className="lg:text-5xl text-3xl font-bold text-[#070F4E]"
        style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.5)" }}
      >
        Testimonial
      </h2>
      <div className="w-full h-full lg:w-[90%] relative px-2 lg:px-5">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white gap-6 px-4 py-10 transition-all transform shadow-md rounded-md"
            >
              <div className="flex justify-center items-center py-5">
                <img
                  src={testimonial.img}
                  alt={testimonial.h}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] object-cover rounded-full border-4 border-[#FACC15] p-4 text-secondary"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#070F4E] py-2">
                  {testimonial.h}
                </h3>
                <p className="text-gray-600 text-sm lg:text-lg max-w-[700px] leading-relaxed">
                  "{testimonial.p}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
