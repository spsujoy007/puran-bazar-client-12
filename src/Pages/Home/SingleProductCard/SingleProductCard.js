import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
        category
      } = phone;

    return (
        <div className="">
  <div className="md:flex">
    {/* //for product image */}
    <div className='md:w-[30%]'>
        <img src={picture} className="w-full md:w-80 rounded-lg shadow-xl" alt=""/>
    </div>

    {/* For info */}
    <div className='w-[70%] md:mt-0 mt-10'>
    <div className="">
        <h1 className='text-3xl'>{name}</h1>
    </div>
      {/* <button className="btn btn-primary">Book now</button> */}
    </div>
  </div>
</div>
    );
};

export default SingleProductCard;