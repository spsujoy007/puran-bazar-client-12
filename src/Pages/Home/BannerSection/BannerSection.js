import React from "react";
import banner1 from '../../../assets/BannerImages/banner1.png';
import banner2 from '../../../assets/BannerImages/banner2.png';
import banner3 from '../../../assets/BannerImages/banner3.png';

const BannerSection = () => {
  return (
    <div className="carousel">

    {/* slide 1 ---------------- */}
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero h-96" style={{ backgroundImage: `url(${banner1})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="md:px-20">
      <h1 className="mb-5 text-5xl font-bold">This is a resale market <br/> for used phone</h1>
      <p className="mb-5">Pre-owned, used, second-hand, refurbished – there are a lot of names for mobile phones that aren’t brand new out of the box.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
    
  {/* slide 2 ---------------- */}
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero h-96" style={{ backgroundImage: `url(${banner2})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="md:px-20">
      <h1 className="mb-5 text-5xl font-bold">This is a resale market <br/> for used phone</h1>
      <p className="mb-5">Pre-owned, used, second-hand, refurbished – there are a lot of names for mobile phones that aren’t brand new out of the box.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* slide 3 ---------------- */}
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero h-96" style={{ backgroundImage: `url(${banner3})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="md:px-20">
      <h1 className="mb-5 text-5xl font-bold">This is a resale market <br/> for used phone</h1>
      <p className="mb-5">Pre-owned, used, second-hand, refurbished – there are a lot of names for mobile phones that aren’t brand new out of the box.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


</div>
  );
};

export default BannerSection;
