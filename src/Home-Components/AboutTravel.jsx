import React from 'react';
import travels1 from "../assets/travels1.jpg";
import 'aos/dist/aos.css'; // Import AOS styles for scroll animations
import AOS from 'aos'; // Import AOS for scroll animation

const EswaranTravelsSection = () => {
  // Initialize AOS for scroll animations
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 lg:py-20 py-10 px-4 sm:px-10">
      {/* Section Title */}
      <h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[#070F4E] pb-8 sm:pb-10"
        data-aos="fade-up"
      >
        Welcome to Eswaran Travels
      </h2>

      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 px-4">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img 
            src={travels1} 
            alt="Eswaran Travels" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            Eswaran Travels has been providing exceptional travel experiences for over a decade. We are committed to delivering top-notch services to our customers, ensuring their journeys are safe, comfortable, and memorable.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            Our fleet of vehicles is well-maintained, and we offer a wide range of travel solutions to suit your needs. Whether it’s for business, leisure, or family vacations, Eswaran Travels has got you covered.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            With a focus on exceptional customer service and a passion for travel, we aim to make every trip not just a vacation, but a cherished memory.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a 
              href="/contact" // Replace with the actual contact link
              className="inline-block bg-[#FACC15] text-[#070F4E] text-sm sm:text-base lg:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-full shadow-xl hover:bg-[#070F4E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EswaranTravelsSection;
