import React from 'react';
import logo from "/logo.png";
import cartlogo from "/shopping-bag.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useCart } from "../pages/home/CartContext";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const getCartCount = () => {
    return cart.length;
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = element.offsetTop - 80;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className='font-sans fixed top-0 left-0 right-0 bg-white z-50 shadow-md'>
      <nav className="flex items-center justify-between h-20 mx-auto px-4 md:px-10 max-w-7xl">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="h-10" />
        </a>
        
        <div className="flex items-center space-x-14 font-bold">
          <a href="/" className="hover:text-gray-700 transition-colors">Home</a>
          <button 
            onClick={() => scrollToSection('mens-section')} 
            className="hover:text-gray-700 transition-colors"
          >
            Men&apos;s
          </button>
          <button 
            onClick={() => scrollToSection('womens-section')} 
            className="hover:text-gray-700 transition-colors"
          >
            Women&apos;s
          </button>
          <button 
            onClick={() => scrollToSection('kids-section')} 
            className="hover:text-gray-700 transition-colors"
          >
            Kid&apos;s
          </button>
          <button 
            onClick={() => scrollToSection('explore-section')} 
            className="hover:text-gray-700 transition-colors"
          >
            Explore
          </button>
          <div className='text-blue-400'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="flex items-center">
          <img src={cartlogo} alt="" className='h-7'/>
          <a href="/cart" className="hover:text-gray-700 ml-2 font-bold transition-colors">
            Cart ({getCartCount()})
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
