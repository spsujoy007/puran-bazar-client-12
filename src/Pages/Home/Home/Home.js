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
                <aside className="w-full p-6 sm:w-60 text-gray-800">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600">Getting Started</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
				<a rel="noopener noreferrer" href="#">Migrations</a>
				<a rel="noopener noreferrer" href="#">Appearance</a>
				<a rel="noopener noreferrer" href="#">Mamba UI</a>
			</div>
		</div>
	</nav>
</aside>
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