import React from "react";
import Header from "../Header/Header";
import { Shield } from "lucide-react";
import PrimaryButton from "../../Common/PrimaryButton";

const WorkPage = () => {
  const features = [
    "Save Time & Reduce Administrative Burden",
    "Increase Bookings & Reduce No-Shows",
    "Enhance Client Communication & Satisfaction",
    "Streamline Payments & Financial Tracking",
    "Gain Valuable Insights for Growth",
    "Offer Flexible Booking Options (Online, AI-Assisted)"
  ];

  return (
    <div className="min-h-screen  relative">
      <div className="bg-[url('/Assets/imgs/backgroundPic.png')] bg-[#09307D] bg-cover bg-[center_23%] pb-20" style={{
        backgroundSize: '15% auto',
      }}>  
      <Header />
      {/* Hero Section */}
      <section className="text-white pt-20">
        <div className="container mx-auto px-4 flex justify-center items-center flex-col">
          <h1 className="text-center px-4 font-outfit font-bold text-2xl sm:text-3xl md:text-4xl line-height-[122%] tracking-[-0.06em] mb-4">
            The Smart Way to Manage & Grow Your Practice
          </h1>
          <p className="w-full text-[#FFFFFF] md:w-[787px] px-4 text-center font-outfit font-normal text-base sm:text-lg md:text-xl line-height-[122%] mb-8">
            Booked is more than just a scheduling tool. It's your all-in-one platform to streamline operations, <br />
            enhance client experience, and unlock your practice's full potential.
          </p>
        </div>
      </section>
      </div>

      {/* Features Section */}
      <div className="bg-[#09307D]">
      <section className="py-12 md:py-20 px-4 md:px-50 bg-[#D4DEE7] rounded-t-[50px] md:rounded-t-[101px]">
        <div className="container mx-auto">
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#09307D]">
          {/* Search & Discover Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center rounded-2xl">
                <img className="w-full object-cover h-[204px] rounded-2xl" src="/Assets/imgs/clickMobile.jpg" alt="Search and Discover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3 leading-tight text-[#09307D]">
                Search & Discover
              </h3>
              <p className="text-[#747070] text-sm leading-relaxed">
              Open the Booked app and search for practitioners by name, specialty, or location. Browse profiles, services, and see real-time availability for those on our platform.
              </p>
            </div>
          </div>

          {/* Request AI Booking Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center rounded-2xl">
                <img className="w-full object-cover h-[204px] rounded-2xl" src="/Assets/imgs/internetOnEarth.jpg" alt="Request AI Booking" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3 leading-tight text-[#09307D]">
              Get Confirmed & Stay Notified
              </h3>
              <p className="text-[#747070] text-sm leading-relaxed">
              You'll receive a notification in the app and an SMS once your appointment is confirmed (whether booked directly or by our AI). Manage all your appointments and receive reminders in one place.
              </p>
            </div>
          </div>

          {/* Our AI Assistant Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center rounded-2xl">
                <img className="w-full object-cover h-[204px] rounded-2xl" src="/Assets/imgs/robotComp.jpg" alt="AI Assistant" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3 leading-tight text-[#09307D]">
              Request AI Booking
              (Practitioner NOT on Booked)
              </h3>
              <p className="text-[#747070] text-sm leading-relaxed">
                Our intelligent AI assistant will then call the practitioner's office on your behalf. It will introduce itself, state your request, and try to find a suitable time based on your preferences.
              </p>
            </div>
          </div>

          {/* Get Confirmed & Stay Notified Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#09307D] mb-3 leading-tight">
                  Get Confirmed & Stay Notified
                </h3>
                <p className="text-[#747070] text-sm leading-relaxed">
                  You'll receive a notification in the app and an SMS once your appointment is confirmed (whether booked directly or by our AI). Manage all your appointments and receive reminders in one place.
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <img className="w-full max-w-[255px] h-auto object-contain" src="/Assets/imgs/notification.jpg" alt="Notifications" />
              </div>
            </div>
          </div>

          {/* Select & Book Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <h3 className="text-lg font-bold text-[#09307D] mb-3 leading-tight">
              Select & Book (Practitioner on Booked)
            </h3>
            <p className="text-[#747070] text-sm leading-relaxed">
              Choose your desired service, date, and time from the practitioner's calendar. Confirm your details, pay securely if required, and your appointment is booked instantly!
            </p>
          </div>
        </div>
        </div>
      </section>
      </div>

      {/* Client Features Section */}
      <div className="bg-[#D4DEE7]">

      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 md:py-20 px-4 md:px-50 bg-[#fff] rounded-t-[50px] md:rounded-t-[101px]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Key Features
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <img className="w-[20px] h-[20px]" src="/Assets/imgs/secureIcon.png" alt="" />
                    </div>
                    <p className="text-[#747070] text-base md:text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-col gap-4">
              <button className="group text-[#09307D] bg-white border-2 border-[#09307D] px-6 py-3 w-[230px]  rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                Request A Demo
                <img className="w-[25px] sm:w-[35px] h-[26px] sm:h-[36px] rotate-[51.01deg]" src="/Assets/imgs/lookup.png" alt="" />
              </button>

              <PrimaryButton text="See Our Practitioner Plans & Get Started Free" />
              
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Network lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                <line x1="50" y1="60" x2="150" y2="120" stroke="#60a5fa" strokeWidth="1" className="animate-pulse" />
                <line x1="150" y1="120" x2="250" y2="80" stroke="#60a5fa" strokeWidth="1" className="animate-pulse delay-300" />
                <line x1="250" y1="80" x2="350" y2="140" stroke="#60a5fa" strokeWidth="1" className="animate-pulse delay-700" />
                <line x1="80" y1="200" x2="180" y2="160" stroke="#60a5fa" strokeWidth="1" className="animate-pulse delay-1000" />
                <line x1="180" y1="160" x2="320" y2="200" stroke="#60a5fa" strokeWidth="1" className="animate-pulse delay-500" />
              </svg>
              
              {/* Central shield */}
              <div className="relative z-10 flex items-center justify-center h-48 md:h-64">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse scale-150"></div>
                  
                  {/* Shield container */}
                  <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-2xl">
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                    
                    {/* Lock icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-20 rounded-lg p-2 mt-2">
                        <div className="w-4 h-3 border-2 border-white rounded-sm"></div>
                        <div className="w-6 h-4 bg-white bg-opacity-60 rounded-b-md mt-0.5"></div>
                        <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm animate-float">
                <div className="w-3 h-3 bg-blue-400 rounded"></div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm animate-bounce">
                <div className="w-4 h-2 bg-blue-300 rounded"></div>
              </div>
              
              <div className="absolute top-1/4 left-6 bg-white bg-opacity-10 rounded-lg p-1 backdrop-blur-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default WorkPage;