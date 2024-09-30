import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emoji from "./../assets/emoji.png";

const HomeTestimonial = () => {
  const [active, setActive] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and small screens
        settings: {
          slidesToShow: 1, // Show 2 slides
        },
      },
      {
        breakpoint: 1024, // For laptops and medium screens
        settings: {
          slidesToShow: 2, // Show 3 slides
        },
      },
    ],
  };

  const testimonials = [
    {
      img: emoji,
      h: "Karthikeyan",
      p: '"I recently booked a tour package with Eswaran Travels for  Madurai to Kodaikanal, and I must say, it was an unforgettable experience! From the beginning, the team was very professional and attentive, ensuring that all our travel needs were met."',
    },
    {
      img: emoji,
      h: "Naveen Kumar",
      p: '"Kodaikanal was serene, and our accommodation offered breathtaking views of the hills. The itinerary was perfectly balanced between sightseeing and leisure time, allowing us to explore famous spots like Coakers Walk, Bryant Park, and the mesmerizing Pillar Rocks."',
    },
    {
      img: emoji,
      h: "Aananthi",
      p: '" Rameshwaram was a spiritual journey, and Eswaran Travels made sure we had a hassle-free experience with the temple visits. The guides were knowledgeable, offering insightful stories and history, enhancing our overall experience."',
    },
  ];

  return (
    <div className="  w-full flex flex-col justify-center items-center py-20 text-center gap-10 px-10">
      <h2 className="lg:text-5xl text-3xl font-bold  text-secondary pb-3" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }}>
        Testimonial
      </h2>
      <div
        className="w-full h-full lg:w-[80%] lg:h-auto gap-5 rounded-xl cursor-pointer "
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        <Slider {...settings}>
          {testimonials.map((image, index) => (
            <div
              key={index}
              className=" rounded-xl border-2 border-primary flex justify-center items-center max-w-[350px] lg:h-[550px] lg:py-14 lg:px-10 py-5 px-3 gap-10"
            >
              <div className="flex justify-center items-center lg:mb-5 ">
                <img
                  src={image.img}
                  // alt={`Image ${index + 1}`}
                  className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-cover rounded-full mb-5 border-2  border-secondary p-2 border-primary hover:scale-[1.2] transfrom transition-all"
                />
              </div>

              <div className="lg:pb-5">
                <h2 className="lg:text-2xl text-xl text-[#070F4E] font-bold text-darkred  tracking-wider mb-3">
                  {image.h}
                </h2>
                <h2 className="lg:text-base text-sm text-gray-600 tracking-wider leading-noraml">
                  {image.p}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
