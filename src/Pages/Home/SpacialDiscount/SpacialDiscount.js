import React from 'react';
import discountImg  from '../../../assets/discount.png'

const SpacialDiscount = () => {
    return (
        <section className="bg-gray-100 text-gray-800 my-20">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/3"
        >
            <img src={discountImg} alt="" />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12 my-auto">
          
          <h2 className="text-3xl font-semibold leading-none">
            Spacial discount in used phones
          </h2>
          <p className="mt-4 mb-8 text-sm">
            You can sale or buy products with extra comission from now. Lets take some discount.
          </p>
          <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-orange-600 text-gray-50">
            Get Discount
          </button>
        </div>
      </div>
    </section>
    );
};

export default SpacialDiscount;