import React from 'react';

const Social = () => {
  return (
    <div>
      <div className="text-center ml-11 mb-16">
        <h2 className="text-4xl font-bold mb-2">Social Media</h2>
        <p className="text-gray-500">
          Details to details is what makes Hexashop different from the other themes.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-16 w-[1800px]">
        {[
          "https://storage.googleapis.com/a1aa/image/Q1WClzwvJH6NA5seOwiaVxHEh1qLU21eF9yBnmwxqpfxFRbnA.jpg",
          "https://storage.googleapis.com/a1aa/image/0WfVz1jE2T1eyUXh6Scbs3cGsTuhl9xCFfWfSz8oOVOULi2OB.jpg",
          "https://storage.googleapis.com/a1aa/image/DJQYyBz77DoGAtxMkfnfpmcB3POhD8VYx105MWf65FGlFRbnA.jpg",
          "https://storage.googleapis.com/a1aa/image/S2TFXdfaDK20KSffVoelsdDQxnuq4KwZo7eQt4y9EfJ0sIa7E.jpg",
          "https://storage.googleapis.com/a1aa/image/xeuP9BBi5Zwf5kMXnPSAQ7ixvPERO0Qo4sKdPzkL9AfyFRbnA.jpg",
          "https://storage.googleapis.com/a1aa/image/9prAFuTheI0XaaozM27w1lly9W4RcHLQrLckWtGff97sFRbnA.jpg",
        ].map((src, index) => (
          <img
            key={index}
            alt={`Image ${index + 1}`}
            className="w-48 h-48 object-cover"
            height="200"
            src={src}
            width="200"
          />
        ))}
      </div>

      <div className="text-center mb-16 w-[1800px]">
        <h2 className="text-3xl font-bold mb-2">
          By Subscribing To Our Newsletter You Can Get 30% Off
        </h2>
        <p className="text-gray-500 mb-4">
          Details to details is what makes Hexashop different from the other themes.
        </p>
        <div className="flex justify-center space-x-4">
          <input
            className="border border-gray-300 p-2 w-64"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="border border-gray-300 p-2 w-64"
            placeholder="Your Email Address"
            type="email"
          />
          <button className="bg-gray-800 text-white p-2">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-wrap w-[1600px] ml-[150px]">
        {[
          { title: 'Store Location:', info: 'Sunny Isles Beach, FL 33160, United States' },
          { title: 'Work Hours:', info: '07:30 AM - 9:30 PM Daily' },
          { title: 'Phone:', info: '010-020-0340' },
          { title: 'Email:', info: 'info@company.com' },
          { title: 'Office Location:', info: 'North Miami Beach' },
          { title: 'Social Media:', info: 'Facebook, Instagram, Behance, Linkedin' },
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
