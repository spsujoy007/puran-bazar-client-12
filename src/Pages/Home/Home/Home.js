import React from 'react';
import AllPhoneSec from '../AllPhonesSec/AllPhoneSec';
import BannerSection from '../BannerSection/BannerSection';
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
                <div className='flex-1 w-72'>
                </div>
            </div>
            </div>
            
            {/* Extra section  */}
            <AllPhoneSec></AllPhoneSec>
            <SpacialDiscount></SpacialDiscount>


        </div>
    );
};

export default Home;