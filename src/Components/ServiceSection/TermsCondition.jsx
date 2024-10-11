import React from 'react';

const TermsCondition = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto border h-auto px-5 py-6 md:px-8 lg:px-10 bg-white shadow-sm'>
        <h2 className='my-5 text-lg md:text-xl p-4 font-semibold tracking-wider text-primary bg-gradient-to-r from-blue-500 to-blue-200 rounded-md'>
          Important Information:
        </h2>
        <ul className='pl-6 list-disc tracking-wider text-gray-700 space-y-3'>
          <li className='text-green-600'>
            All online transactions with Eswaran Travels are fully secure and your payment details are encrypted.
          </li>
          <li>
            A confirmation message via email and SMS is sent, including the contact details of the driver or tour operator.
          </li>
          <li>
            Passengers should reach out to the driver or tour operator for any inquiries regarding pickup points or vehicle details.
          </li>
          <li>
            Please cooperate with the tour operator in case of delays due to traffic or other unforeseen circumstances.
          </li>
          <li>
            Arrive at the boarding point at least 10 minutes before departure.
          </li>
          <li>
            Passengers are responsible for their personal belongings throughout the journey.
          </li>
          <li>
            Pets and animals are strictly not allowed inside the vehicle during the trip.
          </li>
          <li>
            Smoking and consumption of alcohol are strictly prohibited on the bus.
          </li>
          <li>
            The management is not liable for any claims, damages, losses, or inconveniences during the trip.
          </li>
          <li>
            Eswaran Travels will not be held responsible for any natural or societal calamities.
          </li>
        </ul>

        <h2 className='my-5 p-4 text-lg md:text-xl font-semibold tracking-wider text-primary bg-gradient-to-r from-blue-500 to-blue-200 rounded-md'>
          Exclusions by Eswaran Travels:
        </h2>
        <ul className='pl-6 list-disc tracking-wider text-gray-700 space-y-3'>
          <li>Entry tickets at temples or tourist attractions are not included in the package.</li>
          <li>Meals and beverages are excluded from the package.</li>
          <li>GST is not included in the base fare of the package.</li>
        </ul>

        <h2 className='my-5 p-4 text-lg md:text-xl font-semibold tracking-wider text-primary bg-gradient-to-r from-blue-500 to-blue-200 rounded-md'>
          Important Notes:
        </h2>
        <ul className='pl-6 list-disc tracking-wider text-red-600 space-y-3'>
          <li>
            If the pickup or drop-off location is outside Madurai city limits, additional distance charges will apply for both pickup and drop-off, depending on the distance.
          </li>
          <li>Timings mentioned are approximate and subject to change based on the situation on the travel day.</li>
        </ul>
      </div>
    </>
  );
};

export default TermsCondition;
