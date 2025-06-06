import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-white px-4 sm:px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className='w-[20px] h-[20px] sm:w-[33px] sm:h-[33px]' src="/Assets/imgs/callIcon2.png" alt="Call Icon" />
          <h1 className='font-extrabold text-2xl sm:text-[32px] text-white line-height-[122%] ml-2'>BOOKR</h1>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a href="/features" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Features
          </a>
          <a href="/practitioners" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Practitioners
          </a>
          <a href="/clients" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Clients
          </a>
          <a href="/work" className="text-sm hover:text-gray-200 transition-colors duration-200">
            How It Works
          </a>
          <a href="#" className="text-sm hover:text-gray-200 transition-colors duration-200">
            About
          </a>
          <a href="#" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Blog
          </a>
          <a href="#" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Career
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-white border border-white rounded-[8px] text-sm font-bold hover:bg-white hover:text-[#09307D] transition-colors duration-200">
            Log in
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1957BD] text-white rounded-[8px] text-sm font-bold hover:bg-[#1648a1] transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#09307D] z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img className='w-[20px] h-[20px]' src="/Assets/imgs/callIcon.png" alt="Call Icon" />
            <h1 className='font-extrabold text-2xl text-white line-height-[122%] ml-2'>BOOKR</h1>
          </div>
          <button 
            className="p-2 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transform rotate-45 translate-y-2"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 opacity-0"></div>
            <div className="w-6 h-0.5 bg-white transform -rotate-45 -translate-y-2"></div>
          </button>
        </div>
        <nav className="px-4 py-6 space-y-4">
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Features
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Practitioners
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Clients
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            How It Works
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            About
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Blog
          </a>
          <a href="#" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Career
          </a>
        </nav>
        <div className="px-4 py-6 space-y-4">
          <button className="w-full py-2 text-white border border-white rounded-[8px] font-bold hover:bg-white hover:text-[#09307D] transition-colors duration-200">
            Log in
          </button>
          <button className="w-full py-2 bg-[#1957BD] text-white rounded-[8px] font-bold hover:bg-[#1648a1] transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;