import React from 'react';
import AllPhoneSec from '../AllPhonesSec/AllPhoneSec';
import BannerSection from '../BannerSection/BannerSection';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import PhoneCategories from '../PhoneCategories/PhoneCategories';
import SpacialDiscount from '../SpacialDiscount/SpacialDiscount';

const Home = () => {
    return (
        <div >
            {/* Banner items and categories in this  */}
            <div>
            <div className='md:flex'>
                <div className='md:flex-1 '>
                    <BannerSection></BannerSection>
                </div>
                <div className='md:flex-1 md:w-72 mt-10 md:mt-0'>
                    <PhoneCategories></PhoneCategories>
                </div>
            </div>
            </div>
            
            {/* Extra section  */}
            {/* <ProductByCategory></ProductByCategor/ */}
            <AllPhoneSec></AllPhoneSec>
            <SpacialDiscount></SpacialDiscount>
            <MeetOurTeam></MeetOurTeam>

        </div>
    );
};

export default Home;