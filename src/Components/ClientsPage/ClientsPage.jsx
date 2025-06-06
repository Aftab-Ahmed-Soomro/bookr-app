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
      
      <div className="py-8 md:py-12 px-4 md:px-6 bg-[#fff] rounded-t-[50px] md:rounded-t-[101px]">
          <div className="container max-w-screen-md mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Image Section */}
              <div>
                <img className="w-[400px] h-[250px]" src="/Assets/imgs/client-using-phone.png" alt="" />
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-4 lg:p-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#09307D] mb-3 leading-tight">
                  Upgrade to Booked Client Plus for an Even Better Experience!
                </h1>
                <p className="text-[#747070] text-xs md:text-sm mb-4 leading-relaxed">
                  Early access to connected slots, AI practitioner recommendations, AI smart scheduling, unlimited appointment history, family account sharing and more!
                </p>
                <PrimaryButton text="Learn More About Client Plus" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-12 px-24 bg-white">
          <div className="bg-[#D4DEE7] backdrop-blur-sm rounded-[101px] shadow-xl p-4 lg:py-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 px-4">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">Book Anytime, Anywhere</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
                  No more waiting for office hours or worrying about the dog. Search and book appointments on your own timeline.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">Discover a Wide Range of Practitioners</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
                  Find healthcare, wellness, and personal care professionals in your area and beyond.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">Never Miss an Appointment</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
                  Get timely reminders via push notifications, SMS, and email for all your appointments.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">All Your Appointments In One Place</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
                  Manage your entire family's schedule, view past appointments, and keep track of important health information when needed.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">Unique AI Booking Assistance</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
                  If your preferred practitioner isn't available or doesn't offer what you need, our AI will help you search to find appointment slots that fit your preferences!
                </p>
              </div>

              {/* Feature Card 6 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-[#09307D] text-base">Secure & Convenient</h3>
                </div>
                <p className="text-[#747070] text-xs leading-relaxed">
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