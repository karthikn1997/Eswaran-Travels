import React from 'react'
import Hero from '../Home-Components/Hero'
import Packagedetails from '../Home-Components/Packagedetails'
import Banner from '../Home-Components/Banner'
import Tabsection from '../Components/Tabsection'
import Testimonial from '../Home-Components/Testimonial'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      <Hero />
      <Packagedetails/>
      <Banner/>
      <Tabsection/>
      <Testimonial/>
    </div>
  )
}

export default Home