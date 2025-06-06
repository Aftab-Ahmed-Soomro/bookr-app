import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center gap-2'>
        <Link to="/" className="text-2xl font-bold">
          <img className="w-[35px] h-[30px]" src="/Assets/imgs/callIcon2.png" alt="Logo" />
        </Link>
        <h1 className='text-3xl font-extrabold'>
          BOOKR
        </h1>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 bg-[#09307D] z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold">
            <img className="w-[120px] h-[40px]" src="/Assets/imgs/logo.png" alt="Logo" />
          </Link>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-4">
          <Link to="/features" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Features
          </Link>
          <Link to="/practitioners" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Practitioners
          </Link>
          <Link to="/clients" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Clients
          </Link>
          <Link to="/work" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            How It Works
          </Link>
          <Link to="/about" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            About
          </Link>
          <Link to="/blog" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Blog
          </Link>
          <Link to="/career" className="block text-lg font-medium hover:text-gray-200 transition-colors duration-200">
            Career
          </Link>
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