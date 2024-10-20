import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pac1Image from "../assets/madurai.jpg";
import pac2Image from "../assets/kodai2.jpg";
import pac3Image from "../assets/bamban.jpeg";


const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // Adjust the duration as needed
    });
  }, []);

  const settings = {
    dots: false, // Enable dots for navigation
    arrows: true, // Show navigation arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Smooth fade transition
  };

  const slidesData = [
    {
      heading: "Discover Madurai’s Cultural Heritage",
      description: "Home to the magnificent Meenakshi Temple.",
      img:pac1Image
    },
    {
      heading: "Explore the Beauty of Kodaikanal",
      description: "Serene hill station perfect for nature lovers.",
      img:pac2Image
    },
    {
      heading: "Visit the Holy City of Rameshwaram",
      description: "A sacred destination rich in history and spirituality.",
      img:pac3Image
    },
  ];

  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center bg-gray-100 mb-10 "
      data-aos="slide-left"
    >
      
      <div className="relative w-full min-h-[500px] flex justify-center items-center ">
      
      <Slider {...settings} className="w-full h-[500px]  flex items-center justify-center">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[500px] flex items-center justify-center"
          >

            {/* Overlay */}
            <div className="absolute inset-0 opacity-90 bg-cover bg-center w-full  h-[500px]"style={{backgroundImage:`url(${slide.img})`}}></div>
            
            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-4"style={{textShadow:"2px 2px 0px rgba(0,0,0,0.7)"}}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl text-center tracking-wide">
                {slide.heading}
              </h1>
              <p className="mt-4 text-lg md:text-xl  tracking-wider text-white text-center">{slide.description}</p>

              {/* Call to Action */}
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block lg:px-8 lg:py-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300  border-white border-[1px] tracking-wide"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default Banner;
