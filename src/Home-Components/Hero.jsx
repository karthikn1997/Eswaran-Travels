import React, { useEffect } from "react";
import HeroBg from "../assets/hero-bg.png";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "../assets/hero-1.png";
import Hero2 from "../assets/hero-2.png";
import Hero3 from "../assets/hero-3.png";

import { FaRegArrowAltCircleDown } from "react-icons/fa";

function scrollToSection() {
  const section = document.getElementById("target-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="w-full min-h-[70vh] p-1 sm:p-5">
      <section className="relative min-h-[70vh] w-full flex flex-col-reverse lg:flex-row items-center justify-center hero-section bg-[#070f4e] border-2 border-yellow-500 ">
        {/* 
      <div className="absolute inset-0 mx-auto bg-cover bg-center animate-bg-image"
      style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}} 
      ></div> */}

        <div className="px-8 lg:p-20 flex flex-col justify-center items-center lg:items-start">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 text-center lg:text-left"
            data-aos="slide-right"
            data-aos-delay="300"
          >
            Discover Unforgettable Journeys with{" "}
            <span
              className="text-yellow-400 font-extrabold"
              style={{ textShadow: "2px 2px black" }}
            >
              Eswaran Travels
            </span>
          </h1>
          <p
            className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left"
            data-aos="slide-left"
            data-aos-delay="300"
          >
            Discover iconic landmarks with our personalized travel packages.
          </p>
          <button
            onClick={scrollToSection}
            className=" sm:w-auto bg-gradient-to-r from-[#005AB3] via-gray-900 to-black hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition duration-300 border-[1px] border-gray-800 whitespace-nowrap mb-5"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-3 font-bold text-lg sm:text-xl text-white hover:text-black">
              <span className="text-base sm:text-lg lg:text-2xl text-white">
                Book Now
              </span>
              <span className="text-xl sm:text-2xl animate-bounce">
                <FaRegArrowAltCircleDown className="text-yellow-400" />
              </span>
            </div>
          </button>
        </div>

        <div
          className="relative z-10 text-center px-5 w-full lg:w-[60%] mt-4 sm:mt-10"
          data-aos="slide-left"
        >
          <Slider {...settings}>
            <div>
              <img
                src={Hero1}
                className="w-full sm:w-[80%] mx-auto mt-8"
                alt=""
              />
            </div>

            <div>
              <img
                src={Hero2}
                className="w-full sm:w-[80%] mx-auto mt-8"
                alt=""
              />
            </div>

            <div>
              <img
                src={Hero3}
                className="w-full sm:w-[80%] mx-auto mt-6"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Hero;
