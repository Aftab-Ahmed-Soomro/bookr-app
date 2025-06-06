import React from "react";
import Header from "../Header/Header";
import Card from "../../Common/Card";
import SectionHeader from "../../Common/SectionHeader";
import FeatureCards from "../../Common/FeatureCards";

const FeaturePage = () => {
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
            Powerful Features, Seamless Experience
          </h1>
          <p className="w-full text-[#FFFFFF] md:w-[787px] px-4 text-center font-outfit font-normal text-base sm:text-lg md:text-xl line-height-[122%] mb-8">
            Discover how Booked empowers both practitioners and clients with <br />
            cutting-edge tools designed for efficiency and convenience.
          </p>
        </div>
      </section>
      </div>

      {/* Features Section */}
      <div className="bg-[#09307D]">
      <section className="py-12 md:py-20 px-4 md:px-50 bg-white rounded-t-[50px] md:rounded-t-[101px]">
        <div className="container mx-auto">
          <SectionHeader title="Streamline Your Practice, Maximize Your Potential" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 mb-28">
            <Card
              image={"/Assets/imgs/calendar.png"}
              title="Intelligent Calendar Management"
              description="Manage your availability with ease. Set working hours, block off time, and view your schedule by day, week, or month. Our intuitive interface makes scheduling and rescheduling a breeze."
            />
            <Card
              image={"/Assets/imgs/bellPlus.png"}
              title="Automated Reminders & Notifications"
              description="Reduce no-shows significantly with automated appointment reminders sent to clients via email, SMS, and even voice call. Keep clients informed every step of the way."
            />
            <Card
              image={"/Assets/imgs/photoshop.png"}
              title="AI Voice Booking Assistant (Receiving Calls)"
              description="Even if you're not actively managing your Booked calendar, our AI can receive booking requests from clients using Booked, helping you fill your schedule without lifting a finger."
            />
            <Card
              image={"/Assets/imgs/folder.png"}
              title="Client Management (CRM)"
              description="Keep all your client information organized. View appointment history,manage notes, and communicate securely through the platform.le by day, week, or month. Our intuitive interface makes scheduling and rescheduling a breeze."
            />
            <Card
              image={"/Assets/imgs/notebook.png"}
              title="Stripe Connect Payment Integration"
              description="Securely accept payments foryour services directly through Booked. Offer pre-payment options and manage transactions with ease."
            />
            <Card
              image={"/Assets/imgs/scan.png"}
              title="Client Subscription Management"
              description="Create and manage recurring subscriptionplans for your clients (e.g., wellness packages, monthly retainers) to build loyalty and predictable revenue."
            />
            <Card
              image={"/Assets/imgs/mind.png"}
              title="Demand Forecasting (AI-Powered)"
              description="Gain insights into your booking patterns and predict future demand. Optimize your schedule and pricing strategies based on data-driven recommendations."
            />
            <Card
              image={"/Assets/imgs/home.png"}
              title="Website Booking Plugin"
              description="Allow clients to book appointments directly from your existing website with our easy-to-embed booking widget."
            />
            <Card
              image={"/Assets/imgs/trading.png"}
              title="Reporting & Analytics"
              description="Track key performance indicators, generate financial reports, and understand your client demographics to make informed business decisions."
            />
          </div>
        </div>
      </section>
      </div>

      {/* Client Features Section */}
      <div className="bg-white">

      
      <section className="py-12 md:py-20 px-4 md:px-50 bg-[url('/Assets/imgs/trustedBg.png')] bg-cover bg-[center_23%] rounded-t-[50px] md:rounded-t-[101px] bg-no-repeat bg-opacity-[20%]" style={{
        backgroundSize: '200% auto',
      }}>
        <div className="container mx-auto">
          <SectionHeader title="Your Appointments, Your Way" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 mt-20">
            <FeatureCards
              image={"/Assets/imgs/search.png"}
              title="Easy Search & Discovery"
              description="Find practitioners by specialty, name, or location. Browse profiles, view services, and check availability in real-time."
            />
            <FeatureCards
              image={"/Assets/imgs/24.png"}
              title="24/7 Online Booking"
              description="Book appointments anytime, anywhere, directly from your smartphone. No more phone tag or waiting for office hours."
            />
            <FeatureCards
              image={"/Assets/imgs/router.png"}
              title="AI Voice Booking Request"
              description="Can't find a practitioner on our platform or prefer a phone call? Request our AI assistant to call their office and book an appointment based on your preferences."
            />
            <FeatureCards
              image={"/Assets/imgs/save.png"}
              title="Easy Search & Discovery"
              description="Find practitioners by specialty, name, or location. Browse profiles, view services, and check availability in real-time."
            />
            <FeatureCards
              image={"/Assets/imgs/bel.png"}
              title="Timely Reminders"
              description="Never miss an appointment again with automated reminders via push notification, SMS, and email."
            />
            <FeatureCards
              image={"/Assets/imgs/security.png"}
              title="Secure In-App Communication"
              description="Communicate securely with your practitioners directly through the app."
            />
            <FeatureCards
              image={"/Assets/imgs/star.png"}
              title="Subscription Management"
              description="Manage your subscriptions to practitioner plans and your Booked Client Plus plan all in one place."
            />
            <FeatureCards
              image={"/Assets/imgs/profile.png"}
              title="Family Account Linking (Booked Client Plus)"
              description="Manage appointments and profiles for your family members under one convenient account."
            />
            <FeatureCards
              image={"/Assets/imgs/not.png"}
              title="Early Access to Cancelled Slots (Booked Client Plus)"
              description="Get priority notifications when a desired appointment slot opens up due to a cancellation."
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default FeaturePage; 