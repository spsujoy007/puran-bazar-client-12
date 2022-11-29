import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../AllPhonesSec/PhoneCard';

const ProductByCategory = () => {

    
    const category = useLoaderData();

    return (
        <div>
            <hr />
            
            <div className='mt-5 grid grid-cols-2 gap-5'>
            {
                category.map(phone => <PhoneCard
                    key={phone._id}
                    phone={phone}
                ></PhoneCard>)
            }
            </div>
        </div>
    );
};

export default ProductByCategory;