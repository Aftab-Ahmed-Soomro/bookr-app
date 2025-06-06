import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white py-2 sm:py-4 relative">
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold flex gap-2 items-center">
            <img className="w-[28px] h-[24px] sm:w-[35px] sm:h-[30px]" src="/Assets/imgs/callIcon2.png" alt="Logo" />
            <h1 className='text-2xl sm:text-3xl font-extrabold pointer'>
              BOOKR
            </h1>
          </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <Link to="/features" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Features
          </Link>
          <Link to="/practitioners" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Practitioners
          </Link>
          <Link to="/clients" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Clients
          </Link>
          <Link to="/work" className="text-sm hover:text-gray-200 transition-colors duration-200">
            How It Works
          </Link>
          <Link to="/about" className="text-sm hover:text-gray-200 transition-colors duration-200">
            About
          </Link>
          <Link to="/blog" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Blog
          </Link>
          <Link to="/career" className="text-sm hover:text-gray-200 transition-colors duration-200">
            Career
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <button className="px-3 py-1.5 text-white border border-white rounded-[8px] text-sm font-bold hover:bg-white hover:text-[#09307D] transition-colors duration-200">
            Log in
          </button>
          <button className="px-3 py-1.5 bg-[#1957BD] text-white rounded-[8px] text-sm font-bold hover:bg-[#1648a1] transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden fixed inset-0 bg-[#09307D] z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6 space-y-4">
              <Link 
                to="/features" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/practitioners" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Practitioners
              </Link>
              <Link 
                to="/clients" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link 
                to="/work" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/about" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/career" 
                className="block text-base sm:text-lg font-medium hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
            </nav>
          </div>
          <div className="px-4 py-6 space-y-3 border-t border-white/10">
            <button className="w-full py-2 text-white border border-white rounded-[8px] text-sm sm:text-base font-bold hover:bg-white hover:text-[#09307D] transition-colors duration-200">
              Log in
            </button>
            <button className="w-full py-2 bg-[#1957BD] text-white rounded-[8px] text-sm sm:text-base font-bold hover:bg-[#1648a1] transition-colors duration-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;