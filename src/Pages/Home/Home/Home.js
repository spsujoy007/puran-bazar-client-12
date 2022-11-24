import React from 'react';
import BannerSection from '../BannerSection/BannerSection';

const Home = () => {
    return (
        <div>
            <div>
            <div className='flex'>
                <div className='flex-1 h-[50vh]'>
                    <BannerSection></BannerSection>
                </div>
                <div className='flex-none w-72'>
                    hello
                </div>
            </div>
            </div>

        </div>
    );
};

export default Home;