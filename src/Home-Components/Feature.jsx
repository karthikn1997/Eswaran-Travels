import React from 'react';

// Sample destination data
const destinations = [
  {
    img: 'path_to_kodaikanal_image.jpg', // Replace with actual image paths
    title: 'Kodaikanal',
    description: 'Explore the lush hills and serene lakes of Kodaikanal.',
  },
  {
    img: 'path_to_rameshwaram_image.jpg', // Replace with actual image paths
    title: 'Rameshwaram',
    description: 'Visit the sacred temples and stunning beaches of Rameshwaram.',
  },
  {
    img: 'path_to_madurai_image.jpg', // Replace with actual image paths
    title: 'Madurai',
    description: 'Discover the rich history and culture of Madurai.',
  },
  {
    img: 'path_to_ooty_image.jpg', // Replace with actual image paths
    title: 'Ooty',
    description: 'Experience the charm of Ooty with its beautiful gardens and hills.',
  },
];

const FeaturedDestinations = () => {
  return (
    <div className="py-20 px-6 sm:px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-[#070F4E] pb-10">
        Featured Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={destination.img} alt={destination.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#070F4E]">{destination.title}</h3>
              <p className="text-gray-600">{destination.description}</p>
              <button className="mt-4 bg-[#FACC15] text-[#070F4E] px-4 py-2 rounded-md shadow-md hover:bg-[#070F4E] hover:text-white transition-colors">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
