import React from 'react';

const Itinerary = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#070F4E]">Tour Itinerary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Day 1: Arrival and City Tour</h3>
            <p>Arrive in Madurai and explore the city's iconic landmarks, including the Meenakshi Temple and Thirumalai Nayakkar Mahal.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Day 2: Cultural Experience</h3>
            <p>Enjoy a day filled with cultural activities, including traditional dance performances and a visit to local markets.</p>
          </div>
          {/* Add more days as needed */}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
