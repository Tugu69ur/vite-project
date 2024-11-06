import React from 'react';
import banner from '/left-banner-image.jpg';
import banner1 from '/baner-right-image-01.jpg';
import banner2 from '/baner-right-image-02.jpg';
import banner3 from '/baner-right-image-03.jpg';
import banner4 from '/baner-right-image-04.jpg';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative bg-cover bg-center h-96">
        <img src={banner} alt="" className="ml-4 mt-[80px] w-[1000px]" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 ml-16 mt-[450px]">
          <h1 className="text-6xl font-bold text-white">We Are Hexashop</h1>
          <p className="text-white mt-6 text-10 font-bold">Awesome, clean & creative HTML5 Template</p>
          <a href="#" className="mt-6 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black">
            Purchase Now!
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 ml-5 sm:grid-cols-2 gap-6 mt-20">
        {[banner1, banner2, banner3, banner4].map((image, index) => (
          <div key={index} className="relative bg-cover bg-center">
            <img src={image} alt="" className="w-[1000px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-xl font-bold text-white">{["Women", "Men", "Kids", "Accessories"][index]}</h2>
              <p className="text-white mt-2">
                {["Best Clothes For Women", "Best Clothes For Men", "Best Clothes For Kids", "Best Trend Accessories"][index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
