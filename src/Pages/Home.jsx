import React from  'react'
import Hero from '../Home-Components/Hero'
import AboutTravel from '../Home-Components/AboutTravel'
import Packagedetails from '../Home-Components/Packagedetails'
import Banner from '../Home-Components/Banner'
import Tabsection from '../Components/Tabsection'
import ChooseUs from '../Home-Components/ChooseUs'
import Testimonial from '../Home-Components/Testimonial'

import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      <Hero />
      <AboutTravel/>
      <Packagedetails/>
      <Banner/>
      <div>
      <Tabsection/>
      <div className='flex justify-center items-center'>
  <Link 
    to='/services' 
    className="text-center  sm:w-[60%] md:w-[40%] lg:w-[20%] py-2 px-4 lg:py-3 lg:text-lg text-sm font-medium text-white bg-[#070F4E] rounded-lg tracking-wider hover:bg-secondary transition-all duration-500 active:bg-[#050c3a] flex justify-center items-center gap-3 lg:gap-5 shadow-lg lg:mb-16 mb-5"
  >
    Click for More <FaArrowCircleDown className='text-md lg:text-xl' />
  </Link>
</div>

      </div>
      <ChooseUs/>
      <Testimonial/>
    </div>
  )
}

export default Home