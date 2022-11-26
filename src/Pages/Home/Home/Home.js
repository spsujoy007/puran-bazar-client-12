import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllPhoneSec from '../AllPhonesSec/AllPhoneSec';
import BannerSection from '../BannerSection/BannerSection';
import PhoneCategories from '../PhoneCategories/PhoneCategories';
import SpacialDiscount from '../SpacialDiscount/SpacialDiscount';

const Home = () => {
    return (
        <div >
            {/* Banner items and categories in this  */}
            <div>
            <div className='md:flex'>
                <div className='flex-1 '>
                    <BannerSection></BannerSection>
                </div>
                <div className='flex-1 w-72 '>
                    <PhoneCategories></PhoneCategories>
                </div>
            </div>
            </div>
            
            {/* Extra section  */}
            {/* <ProductByCategory></ProductByCategor/ */}
            <AllPhoneSec></AllPhoneSec>
            <SpacialDiscount></SpacialDiscount>


        </div>
    );
};

export default Home;