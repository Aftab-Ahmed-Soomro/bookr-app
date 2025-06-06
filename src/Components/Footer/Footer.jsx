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
    <footer className="bg-[#09307D] text-white px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32">
      {/* Main Footer Content */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Side - Company Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Logo */}
              <div>
                <div className="flex items-center mb-1.5">
                  <img 
                    className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]' 
                    src="/Assets/imgs/callIcon.png" 
                    alt="Call Icon" 
                  />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold ml-2">BOOKR</h2>
                </div>
                <p className="text-white font-medium text-base sm:text-lg lg:text-xl">From Thirtiin Inc</p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5">Email Us</h3>
                  <p className="text-white text-sm sm:text-base font-medium">to@thirtin.com</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5">Call Us Now</h3>
                  <p className="text-white text-sm sm:text-base font-medium">844 447 0707</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5">Location</h3>
                <p className="text-white text-sm sm:text-base font-medium">
                  Thirtin inc. 1200 Bay St, Toronto, M5R 2A5
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="mt-6 lg:mt-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us</h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-[4px] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
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
      <div className="border-t border-blue-700 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Products */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">PRODUCTS</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Features</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Practitioners</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">For clients</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">How It Works</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">RESOURCES</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Blog</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Career</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Company 1 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">COMPANY</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Acuity</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Calendly</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Google</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Jane</a></li>
              </ul>
            </div>

            {/* Company 2 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">COMPANY</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Acuity</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Calendly</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Google</a></li>
                <li><a href="#" className="text-white text-xs sm:text-sm hover:text-gray-200 transition-colors">Bookr VS Jane</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-700 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs transition-colors">Terms & Conditions</a>
              <a href="#" className="text-[#B6BCCDBD] hover:text-white text-xs transition-colors">Info Use Consent</a>
            </div>
            <div className="text-[#B6BCCDBD] text-xs text-center sm:text-right">
              © 2025 Bookr - All right reserve
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;