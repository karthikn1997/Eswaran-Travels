import React from 'react'
import Hero from '../Home-Components/Hero'

const Home = () => {
  return (
    <div className="p-2 sm:p-6 flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      <Hero />
    </div>
  )
}

export default Home