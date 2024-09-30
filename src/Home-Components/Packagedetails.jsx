import React from "react";
// import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from "react-icons/fa";
import pac1Image from "../assets/pac-1.jpeg";
import pac2Image from "../assets/pac-2.jpeg";

const Packagedetails = () => {
  const gridItems = [
    {
      id: 1,
      icon: <FaLongArrowAltRight />,
      title: "Madurai One day Package",
      description:
        'Madurai, often referred to as the "Temple City" or the "Athens of the East," is famous for its stunning Meenakshi Amman Temple.',
      img: pac1Image,
    },
    {
      id: 2,
      icon: <FaLongArrowAltRight />,
      title: "Madurai to Kodaikanal",
      description:
        "Kodaikanal, features a cool climate, beautiful landscapes, and attractions like Kodaikanal Lake,nature lover perfect for nature lovers.",
      img: pac2Image,
    },
    {
      id: 3,
      icon: <FaLongArrowAltRight />,
      title: "Madurai to Rameshwaram",
      description:
        "Rameshwaram is renowned for its historical and spiritual significance and is a key pilgrimage destination for Hindus.",
      img: pac1Image,
    },
    {
      id: 4,
      icon: <FaLongArrowAltRight />,
      title: "Specific package",
      description: "Explore the best wonderful Tour Package with us that takes you through the breathtaking  Kodaikanal, Rameshwaram,  Madurai. ",
      img: pac2Image,
    },
  ];
  return (
    <>
      <div className="container mx-auto p-4 lg:py-20 ">
        <h2
          className="text-center lg:text-4xl text-2xl font-bold tracking-wider text-secondary lg:pb-16 lg:py-0 py-5"
          style={{ textShadow: "2px 3px 1px rgba(0, 0, 0, 0.7)" }}
        >
          Tour Package
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border-2 "
            >
              <img
                className="w-full h-52 object-cover transform transition-all duration-300 hover:scale-[1.05]"
                src={item.img}
                alt=""
              />
              <div className="p-5 h-auto">
                <h3 className="text-base font-semibold flex justify-left items-center gap-5 text-primary">
                  <span className="text-secondary font-semibold ">
                    {item.icon}
                  </span>
                  {item.title}
                </h3>
                <p className="lg:text-base text-sm text-gray-600 mt-2 tracking-wide">{item.description}</p>
              </div>
              <div className="flex justify-center items-center mb-5"><button className='lg:px-10 px-5 py-1 lg:py-2  text-center lg:text-base text-sm font-semibold rounded-lg bg-[#070F4E] text-white hover:scale-[1.05] transform transition-all tracking-wide'>Package Details</button></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Packagedetails;

//border-[#070F4E] border-2 p-5

{
  /* <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridItems.map((item) => (
          <motion.div 
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: item.id * 0.2 }} // Delay animations based on ID
            whileHover={{ scale: 1.05 }} // Add subtle hover scaling
          >
            <motion.img
              className="w-full h-40 object-cover"
              src={item.img}
              alt={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="p-4">
              <motion.h3 className="text-lg font-semibold"
                whileHover={{ color: "#3b82f6" }} // Change color on hover
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div> */
}
