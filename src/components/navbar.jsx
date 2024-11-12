import React from 'react';
import logo from "/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <header className='font-sans'>
      <nav className="flex mt-6">
        <a href="/">
          <img src={logo} alt="Company Logo" className="ml-[400px]" />
        </a>
        <div className="flex ml-[300px] mt-3 space-x-10 font-bold">
          <a href="/">Home</a>
          <a href="/">Men&apos;s</a>
          <a href="/">Women&apos;s</a>
          <a href="/">Kid&apos;s</a>
          <div className="relative group">
                    <a href="#" className="hover:text-black">Pages <i className="fas fa-chevron-down"></i></a>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-[100px]" >Page 1</a>
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Page 2</a>
                    </div>
                </div>
            <div className="relative group">
                    <a href="#" className="hover:text-black">Features <i className="fas fa-chevron-down"></i></a>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-[130px]">Feature 1</a>
                        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Feature 2</a>
                    </div>
                </div>
          <a href="/">Explore</a>
          <div className='text-blue-400'>
          <SignedOut>
            <SignInButton />
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
          </div>
        </div>
    
      </nav>
      
    </header>
  );
};

export default Navbar;
