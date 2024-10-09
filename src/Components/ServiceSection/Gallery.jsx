import React from 'react';
import maduraiG from '../../assets/maduraiG.jpg';
import maduraiG2 from '../../assets/maduraiG2.jpg';
import maduraiG3 from '../../assets/maduraiG3.jpg';
import maduraiG4 from '../../assets/maduraiG4.jpg';
import maduraiG6 from '../../assets/maduraiG6.jpg';
import maduraiimg from '../../assets/maduraiimg.jpeg';

const Gallery = () => {
  return (
    <>
      <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
        {/* First large image spanning 2 columns and 2 rows */}
        <div className='relative h-[250px] lg:h-[520px] col-span-1 sm:col-span-2 row-span-2 bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiG} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>

        {/* Smaller image 1 */}
        <div className='relative h-[250px] bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiG2} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>

        {/* Smaller image 2 */}
        <div className='relative h-[250px] bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiG3} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>

        {/* Smaller image 3 */}
        <div className='relative h-[250px] bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiG4} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>

        {/* Second large image spanning 2 columns and 2 rows */}
        <div className='relative h-[250px] lg:h-[520px] col-span-1 sm:col-span-2 row-span-2 bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiimg} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>

        {/* Smaller image 4 */}
        <div className='relative h-[250px] bg-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-95'>
          <img src={maduraiG6} alt="" className='w-full h-full object-cover absolute z-10 hover:opacity-80' />
        </div>
      </div>
    </>
  );
};

export default Gallery;
