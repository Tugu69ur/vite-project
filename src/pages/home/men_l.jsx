import React from 'react';
import men1 from '/men-01.jpg';
import men2 from '/men-02.jpg';
import men3 from '/men-03.jpg';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";

const MenLatest = () => {
  return (
    <section className='mt-[170px] ml-[400px]'>
      <h2 className="text-3xl font-bold">
        Men&apos;s Latest
      </h2>
      <p className="text-gray-500">
        Details to details is what makes Hexashop different from the other themes.
      </p>
      <div className="relative mt-8">
        <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2">
          <button className="bg-white border border-gray-300 rounded-full p-2">
            <GrFormPrevious />
          </button>
        </div>
        <div className="flex space-x-4 overflow-hidden">
          <div className="">
            <img alt="Man sitting on stairs wearing a black jacket and ripped jeans" className="w-full h-auto" height="400" src={men1} width="300" />
            <h3 className="mt-4 text-lg font-bold">
              Classic Spring
            </h3>
            <p className="text-gray-500">
              $120.00
            </p>
            <div className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={ FaRegStar } />
                
              ))}
            </div>
          </div>
          <div className="">
            <img alt="Man standing in front of a wooden fence wearing a denim jacket" className="w-full h-auto" height="400" src={men2} width="300" />
            <h3 className="mt-4 text-lg font-bold">
              Air Force 1 X
            </h3>
            <p className="text-gray-500">
              $90.00
            </p>
            <div className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={ FaRegStar } />
              ))}
            </div>
          </div>
          <div className="">
            <img alt="Man standing on a street wearing a black sweater and gray pants" className="w-full h-auto" height="400" src={men3} width="300" />
            <h3 className="mt-4 text-lg font-bold">
              Love Nana ‘20
            </h3>
            <p className="text-gray-500">
              $150.00
            </p>
            <div className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={ FaRegStar } />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-[310px] top-1/2 transform -translate-y-1/2">
          <button className="bg-white border border-gray-300 rounded-full p-2">
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenLatest;
