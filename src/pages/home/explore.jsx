import React from 'react'
import explore1 from '/explore-image-01.jpg'
import explore2 from '/explore-image-02.jpg'

const explore = () => {
  return (
    <section id="explore-section" className='container mx-auto px-4 py-16'>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">
            Explore Our Products
          </h2>
          <p className="text-gray-600 mb-4">
            You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.
          </p>
          <blockquote className="text-gray-600 mb-4">
            <i className="fas fa-quote-left text-2xl text-gray-400 mr-2">
            </i>
            You are not allowed to redistribute this template ZIP file on any other website.
          </blockquote>
          <p className="text-gray-600 mb-4">
            There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.
          </p>
          <p className="text-gray-600 mb-4">
            If this template is beneficial for your website or business, please kindly
            <a className="text-blue-500" href="#">
              support us
            </a>
             a little via PayPal. Please also tell your friends about our great website. Thank you.
          </p>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
            Discover More
          </button>
        </div>
        <div className="w-1/2 grid grid-cols-2">
          <div className="bg-gray-100 p-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">
              Leather Bags
            </h3>
            <p className="text-gray-500">
              Latest Collection
            </p>
            <img alt="Leather bags with various items" className="mt-4" height="500" src={explore1} width="500"/>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">
              Different Types
            </h3>
            <p className="text-gray-500">
              Over 304 Products
            </p>
            <img alt="Woman holding a bag" className="mt-4" height="500" src={explore2} width="500"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default explore