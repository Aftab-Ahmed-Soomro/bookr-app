import React from "react";
import Header from "../Header/Header";

const WorkPage = () => {

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
                <img className="w-full object-cover h-[180px] rounded-2xl" src="/Assets/imgs/clickMobile.jpg" alt="Search and Discover" />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold mb-3 leading-tight text-[#09307D]">
                Search & Discover
              </h3>
              <p className="text-[#747070] text-xs leading-relaxed">
              Open the Booked app and search for practitioners by name, specialty, or location. Browse profiles, services, and see real-time availability for those on our platform.
              </p>
            </div>
          </div>

          {/* Request AI Booking Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center rounded-2xl">
                <img className="w-full object-cover h-[180px] rounded-2xl" src="/Assets/imgs/internetOnEarth.jpg" alt="Request AI Booking" />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold mb-3 leading-tight text-[#09307D]">
              Get Confirmed & Stay Notified
              </h3>
              <p className="text-[#747070] text-xs leading-relaxed">
              You'll receive a notification in the app and an SMS once your appointment is confirmed (whether booked directly or by our AI). Manage all your appointments and receive reminders in one place.
              </p>
            </div>
          </div>

          {/* Our AI Assistant Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center rounded-2xl">
                <img className="w-full object-cover h-[180px] rounded-2xl" src="/Assets/imgs/robotComp.jpg" alt="AI Assistant" />
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold mb-3 leading-tight text-[#09307D]">
              Request AI Booking
              (Practitioner NOT on Booked)
              </h3>
              <p className="text-[#747070] text-xs leading-relaxed">
                Our intelligent AI assistant will then call the practitioner's office on your behalf. It will introduce itself, state your request, and try to find a suitable time based on your preferences.
              </p>
            </div>
          </div>

          {/* Get Confirmed & Stay Notified Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6">
                <h3 className="text-base font-bold text-[#09307D] mb-3 leading-tight">
                Select & Book (Practitioner on Booked)
                </h3>
                <p className="text-[#747070] text-xs leading-relaxed">
                Choose your desired service, date, and time from the practitioner's live calendar. Confirm your details, pay securely if required, and your appointment is booked instantly!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img className="w-full h-full object-cover rounded-y-2xl rounded-r-2xl" src="/Assets/imgs/mobilePass.png" alt="Notifications" />
              </div>
            </div>
          </div>

          {/* Select & Book Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <h3 className="text-base font-bold text-[#09307D] mb-3 leading-tight">
            Our AI Assistant Makes the Call
            </h3>
            <p className="text-[#747070] text-xs leading-relaxed">
            Our intelligent AI assistant will then call the practitioner's office on your behalf. It will introduce itself, state your request.
            </p>
          </div>
        </div>
        </div>
      </section>
      </div>

      {/* Practitioners Features Card Section */}
      <div className="bg-[#D4DEE7]">

      
      <div className="py-12 md:py-20 px-4 md:px-40 bg-[url('/Assets/imgs/lagao.jpg')] bg-cover bg-center rounded-t-[50px] md:rounded-t-[101px]">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">For Practitioners - Managing Your Practice</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl w-full">
          {/* First Row - 3 Cards */}
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-[300px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <img src="/Assets/imgs/dashboard.jpg" alt="Set Up Profile" className="w-full h-[150px] object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="font-bold text-[#09307D] text-base mb-2">Set Up Your Profile & Services</h3>
              <p className="text-[#747070] text-xs leading-relaxed">Sign up for Booked, complete your profile, list your services, set your prices, and define your working hours and availability in our easy-to-use web dashboard.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-[300px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <img src="/Assets/imgs/cali.png" alt="Manage Schedule" className="w-full h-[150px] object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="font-bold text-[#09307D] text-base mb-2">Manage Your Schedule Effortlessly</h3>
              <p className="text-[#747070] text-xs leading-relaxed">View and manage all appointments in your Booked calendar. Get notified of new bookings, reschedules, or cancellations.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-[300px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <img src="/Assets/imgs/rhytm.jpg" alt="Get Paid & Grow" className="w-full h-[150px] object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="font-bold text-[#09307D] text-base mb-2">Get Paid & Grow</h3>
              <p className="text-[#747070] text-xs leading-relaxed">Accept online payments via Stripe Connect. Utilize features like client subscriptions and demand forecasting to grow your practice.</p>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-[350px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <img src="/Assets/imgs/finger.jpg" alt="Clients Book You Online" className="w-full h-[150px] object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="font-bold text-[#09307D] text-base mb-2">Clients Book You Online (or via AI)</h3>
              <p className="text-[#747070] text-xs leading-relaxed">Clients can find you and book directly through the Booked app or your website plugin. For practitioners not fully set up on platform, our AI can still field booking requests, potentially filling your schedule.</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-[350px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <img src="/Assets/imgs/roboza.jpg" alt="Automate & Communicate" className="w-full h-[150px] object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="font-bold text-[#09307D] text-base mb-2">Automate & Communicate</h3>
              <p className="text-[#747070] text-xs leading-relaxed">Automated reminders reduce no-shows. Communicate securely with clients through the platform.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default WorkPage;