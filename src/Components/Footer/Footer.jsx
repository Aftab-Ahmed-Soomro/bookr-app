import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <footer className="bg-[#09307D] text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Side - Company Info */}
            <div className="space-y-8 sm:space-y-12">
              {/* Logo */}
              <div>
                <div className="flex items-center mb-2">
                  <img 
                    className='w-[28px] h-[28px] sm:w-[36.74px] sm:h-[36.74px]' 
                    src="/Assets/imgs/callIcon.png" 
                    alt="Call Icon" 
                  />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold ml-2">BOOKR</h2>
                </div>
                <p className="text-white font-medium text-lg sm:text-xl lg:text-2xl">From Thirtiin Inc</p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-white text-sm sm:text-base font-medium">to@thirtin.com</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us Now</h3>
                  <p className="text-white text-sm sm:text-base font-medium">844 447 0707</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Location</h3>
                <p className="text-white text-sm sm:text-base font-medium">
                  Thirtin inc. 1200 Bay St, Toronto, M5R 2A5
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="mt-8 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact Us</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm sm:text-base"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Submit Now
                  <span>🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-blue-700 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">PRODUCTS</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Features</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Practitioners</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">For clients</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">How It Works</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">RESOURCES</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Blog</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Career</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Company 1 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">COMPANY</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Acuity</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Calendly</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Google</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Jane</a></li>
              </ul>
            </div>

            {/* Company 2 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">COMPANY</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Acuity</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Calendly</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Google</a></li>
                <li><a href="#" className="text-white text-sm sm:text-base hover:text-gray-200 transition-colors">Bookr VS Jane</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-700 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs sm:text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs sm:text-sm transition-colors">Info Use Consent</a>
            </div>
            <div className="text-[#B6BCCDBD] text-xs sm:text-sm text-center sm:text-right">
              © 2025 Bookr - All right reserve
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;