import React from 'react';

const TourPackage = ({ packageData }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Package header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{packageData.destination}</h1>

      {/* Package image */}
      <div className="w-full h-72 mb-6">
        <img
          src={packageData.imageUrl}
          alt={packageData.destination}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Package details */}
      <div className="bg-white rounded-lg shadow-lg p-6 lg:flex lg:space-x-10">
        {/* Left side: main information */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Package Details</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Duration:</span> {packageData.duration}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> ${packageData.price}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Description:</span> {packageData.description}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>

        {/* Right side: highlights */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {packageData.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const tourPackageData = {
    destination: 'Bali, Indonesia',
    duration: '7 Days, 6 Nights',
    price: '1200',
    description:
      'Explore the beautiful beaches, vibrant culture, and stunning landscapes of Bali. This all-inclusive package offers the perfect balance of relaxation and adventure.',
    imageUrl:
      'https://images.unsplash.com/photo-1576675782861-2b3dbf96ec84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGJhbGl8ZW58MHx8fHwxNjAyMjEyMzM2&ixlib=rb-1.2.1&q=80&w=1080',
    highlights: [
      'Visit the famous Tanah Lot temple at sunset',
      'Snorkeling in crystal clear waters at Nusa Penida',
      'Explore Ubud’s cultural hub and its lush rice terraces',
      'Relax at Seminyak’s stunning beaches',
      'Enjoy a traditional Balinese massage',
    ],
  };

  return <TourPackage packageData={tourPackageData} />;
};

export default App;
