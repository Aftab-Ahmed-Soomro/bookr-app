import React from "react";
import Header from "../Header/Header";
import { ArrowRight, Calendar, Clock, Shield, Smartphone, Star, Users } from "lucide-react";
import PrimaryButton from "../../Common/PrimaryButton";

const ClientsPage = () => {

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
            Your Appointments, Simplified
          </h1>
          <p className="w-full text-[#FFFFFF] md:w-[787px] px-4 text-center font-outfit font-normal text-base sm:text-lg md:text-xl line-height-[122%] mb-8">
            Booked makes finding, booking, and managing your appointments easier than ever. 
            Take control of your schedule with our intuitive app.
          </p>
        </div>
      </section>
      </div>

      {/* Hero Section */}
      <div className="bg-[#09307D]">
      
      <div className="py-12 md:py-20 px-4 md:px-50 bg-[#fff] rounded-t-[50px] md:rounded-t-[101px]">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Image Section */}
            <div>
                  <img className="w-[596px] h-[380px]" src="/Assets/imgs/client-using-phone.png" alt="" />
            </div>
            
            
            {/* Content Section */}
            <div className="w-full lg:w-3/5 p-6 lg:p-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#09307D] mb-4 leading-tight">
                Upgrade to Booked Client Plus for an Even Better Experience!
              </h1>
              <p className="text-[#747070] text-sm md:text-base mb-6 leading-relaxed">
                Early access to connected slots, AI practitioner recommendations, AI smart scheduling, unlimited appointment history, family account sharing and more!
              </p>
              <PrimaryButton text="Learn More About Client Plus" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="p-20 bg-white">
        <div className="bg-[#D4DEE7] backdrop-blur-sm rounded-[101px] shadow-xl p-6 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-8">
            
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">Book Anytime, Anywhere</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                No more waiting for office hours or worrying about the dog. Search and book appointments on your own timeline.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">Discover a Wide Range of Practitioners</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                Find healthcare, wellness, and personal care professionals in your area and beyond.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">Never Miss an Appointment</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                Get timely reminders via push notifications, SMS, and email for all your appointments.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">All Your Appointments In One Place</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                Manage your entire family's schedule, view past appointments, and keep track of important health information when needed.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">Unique AI Booking Assistance</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                If your preferred practitioner isn't available or doesn't offer what you need, our AI will help you search to find appointment slots that fit your preferences!
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-[#09307D] text-lg">Secure & Convenient</h3>
              </div>
              <p className="text-[#747070] text-sm leading-relaxed">
                Pay securely for services before appointments and communicate with practitioners through the app.
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center flex justify-center items-center">
            <PrimaryButton text="Download The Booked App Now!" />
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default ClientsPage; 