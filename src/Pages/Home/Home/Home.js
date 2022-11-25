import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllPhoneSec from '../AllPhonesSec/AllPhoneSec';
import BannerSection from '../BannerSection/BannerSection';
import PhoneCategories from '../PhoneCategories/PhoneCategories';
import SpacialDiscount from '../SpacialDiscount/SpacialDiscount';

const Home = () => {
    const category = useLoaderData();
    console.log(category)
    return (
        <div >
            {/* Banner items and categories in this  */}
            <div>
            <div className='md:flex'>
                <div className='flex-1 '>
                    <BannerSection></BannerSection>
                </div>
                <div className='flex-1 w-72 mt-5'>
                    <PhoneCategories></PhoneCategories>
                </div>
            </div>
            </div>
            <Link to='/' className='btn btn-secondary mt-10'>Btn</Link>
            
            {/* Extra section  */}
            <AllPhoneSec></AllPhoneSec>
            <SpacialDiscount></SpacialDiscount>


        </div>
    );
};

export default Home;