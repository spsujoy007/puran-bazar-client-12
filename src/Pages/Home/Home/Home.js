import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import SpacialDiscount from '../SpacialDiscount/SpacialDiscount';

const Home = () => {
    return (
        <div >
            {/* Banner items and categories in this  */}
            <div>
            <div className='flex'>
                <div className='flex-1 '>
                    <BannerSection></BannerSection>
                </div>
                <div className='flex-1 w-72'>
                    hello
                </div>
            </div>
            </div>
            
            {/* Extra section  */}
            <SpacialDiscount></SpacialDiscount>


        </div>
    );
};

export default Home;