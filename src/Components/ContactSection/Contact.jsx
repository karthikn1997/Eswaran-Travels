import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import bg4 from '../../assets/bg4.jpeg'

import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full mx-auto bg-center bg-white rounded-lg">
      <div
        className="w-full lg:h-[450px] h-[300px] bg-center bg-cover object-cover"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full lg:h-[450px] h-[300px] bg-primary bg-opacity-20 backdrop-blur-[1px] bg-center bg-cover object-cover text-center lg:pt-44 pt-32">
          <h2
            className="lg:text-5xl text-3xl font-bold text-white tracking-wider"
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Contact Us
          </h2>
        </div>
      </div>

      <div className="lg:py-20 py-5">
        <h1 className="lg:text-3xl text-xl font-bold mb-6 text-center text-primary tracking-wider">
          Contact Us
        </h1>

        <div className="mb-8 flex flex-col justify-center items-center" data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
          <p className="lg:text-base text-sm px-5 mb-4 text-center text-primary tracking-wider">
            We'd love to hear from you! Here’s how you can reach us:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:py-10 gap-16 lg:px-20 py-3">
            <div className="flex flex-col justify-center items-center">
              <MdLocationPin className="lg:text-5xl text-3xl text-secondary text-center mb-5" />
              <p className="text-primary text-sm font-medium text-center">
                Location
                <br />
                Sarada Nagar, Madurai - 625017
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaPhone className="lg:text-5xl text-3xl text-secondary mb-5" />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Phone
                <br />
                8680986987
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <IoMdMail className="lg:text-5xl text-3xl text-secondary text-center mb-5" />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Email
                <br />
                admin@eswarantravels.com
              </p>
            </div>
          </div>
        </div>

        {/* Google Form Embed */}
        <div
          className="max-w-4xl mx-auto shadow-md shadow-primary border-2 lg:py-10 lg:px-10 py-5 px-0 rounded-lg border-primary mb-5 bg-slate-300 "
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
          style={{ height: "100%", overflow: "visible" }} // Full height container, allow overflow for page scrolling
        >
          <h2 className="lg:text-2xl text-xl font-semibold mb-4 text-primary text-center tracking-wider">
            Send Us a Message
          </h2>
          {/* <div className="w-full h-full">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScNwRqQbyrLG29_3vE-2fa6LU6kLRF_BcwZk0rcxdZ-qLv2gw/viewform?embedded=true"
      width="100%" // Full width on all screen sizes
      // height="" // Set the height to a large enough value to ensure no iframe scroll
      className="border-none rounded-lg min-h-auto h-[1400px] md:h-[1200px]"
      // style={{ height: "1550px" }} // Make sure it is taller than the outer container
    >
      Loading…
    </iframe>
  </div> */}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
