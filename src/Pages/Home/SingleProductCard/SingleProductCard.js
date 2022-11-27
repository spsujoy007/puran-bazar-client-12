import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

const SingleProductCard = () => {
    
    const phone = useLoaderData();
    console.log(phone);
    const {
        _id,
        name,
        picture,
        sellername,
        location,
        resaleprice,
        yearsofuse,
        originalprice,
        description,
        email
      } = phone;

    return (
        <div className="">
  <div className="md:flex">
    {/* //for product image */}
    <div className='md:w-[35%]'>
        <img src={picture} className="w-full md:w-80 rounded-lg" alt=""/>
    </div>
    
    {/* For info */}
    <div className='md:w-[65%] md:mt-0 mt-10'>
    <div className="">
        <h1 className='text-3xl mb-2'>{name}</h1>
        <hr />
    </div>
      <p className='md:mr-24 mt-5'>{description}</p>
      <div className='p-3 shadow-md md:w-1/2 rounded-xl'>
      <p className='mt-1 flex items-center'><span className='text-secondary mr-3'>Location:</span> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>

    <div className=''>
    <div className='md:flex justify-between text-xl'>
    <p>Resale Price: ৳{resaleprice}</p>
    <p className='text-gray-400 lowercase'>Original Price: <s >৳{originalprice}</s></p>
    </div>
    <p className='text-secondary mt-2'>Use: ({yearsofuse} years)</p>
    </div>
      </div>

      {/* user information */}
      <div className='mt-3 p-3 shadow-md rounded-xl md:w-1/2 flex items-center'>
        <h1 className='text-2xl uppercase font-semibold '>Seller: <span className='text-secondary'>{sellername}</span></h1>
        <FaCheckCircle className='text-blue-500 ml-2 text-xl'></FaCheckCircle>
      </div>

      <div className="md:flex justify-end">
        <button className="btn btn-primary mt-5 md:px-20">Book now</button>
      </div>

    </div>
  </div>
</div>
    );
};

export default SingleProductCard;