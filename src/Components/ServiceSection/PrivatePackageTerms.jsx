import React from 'react';

const TermsCondition = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto lg:border h-auto px-5 py-6 md:px-8 lg:px-10 bg-white shadow-sm p-5'>
        <h2 className='my-5 text-lg md:text-xl p-4 font-semibold tracking-wider text-primary bg-gradient-to-r from-blue-500 to-blue-200 rounded-md'>
          Important Information:
        </h2>
        <ul className='pl-6 list-disc tracking-wider text-gray-700 space-y-3'>
          <li>
            Starting & closing kms,hrs will be calculated from our office to office.
          </li>
          <li>
            Driver food expences = Rs.200 / day
          </li>
          <li>
            All types of Vehicles & Any outstation trip available.
          </li>
          <li>
            South India tour package available.
          </li>
          <li>
            Payment mode - Advance & spot payment.
          </li>
          <li>
            Tariff may vary upon diesel prices.
          </li>
          <li>
           During tour packages the timing costrain for sightseeing in 8:00 am to 8:00 pm.
          </li>
        </ul>
      </div>
    </>
  );
};

export default TermsCondition;
