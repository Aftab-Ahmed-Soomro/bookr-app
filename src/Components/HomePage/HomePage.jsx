import React from "react";
import Header from "../Header/Header";
import Card from "../../Common/Card";
import Card2 from "../../Common/Card2";
import PrimaryButton from "../../Common/PrimaryButton";
import SectionHeader from "../../Common/SectionHeader";
import Section from "../../Common/Section";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#09307D] relative">
      <div className="bg-[url('/Assets/imgs/backgroundPic.png')] bg-cover bg-[center_23%]" style={{
        backgroundSize: '15% auto',
      }}>  
      <Header />
      {/* Hero Section */}
      <section className="text-white pt-20">
        <div className="container mx-auto px-4 flex justify-center items-center flex-col">
          <h1 className="text-center px-4 font-outfit font-bold text-2xl sm:text-3xl md:text-4xl line-height-[122%] tracking-[-0.06em] mb-4">
            Effortless Scheduling, Smarter Practice. Welcome to Booked
          </h1>
          <p className="w-full md:w-[787px] px-4 text-center font-outfit font-normal text-base sm:text-lg md:text-xl line-height-[122%] mb-8">
            The AI-powered platform that revolutionizes how practitioners
            connect with clients and manage their appointments. Spend less time
            on admin, more time on what you do best
          </p>
          <div className="mt-6 md:mt-10 px-4">
            {/* hero gif */}
            <img
              className="rounded-t-[20px] w-full max-w-[870px] h-auto"
              src="/Assets/imgs/bgGif.gif"
              alt="Dashboard Preview"
            />
          </div>
        </div>
      </section>
      </div>

      {/* Features Section */}
      <Section>
        <div className="bg-white border-[#D0E8FF] mb-20">
          <div className="absolute border-[3px] border-[#D0E8FF] rounded-[13px] top-205 left-1/2 -translate-x-1/2 max-w-[800px] w-[90%] flex flex-col sm:flex-row gap-4 justify-center items-center px-4 py-4 bg-white">
            <PrimaryButton text="Get Started Free" />
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-700 px-4 sm:px-6 py-3 rounded-full font-medium border-2 border-blue-700 transition-colors duration-200 shadow-md">
              Find Your Practitioner
            </button>
          </div>
        </div>
        
        <SectionHeader title="Reclaim Your Time, Grow Your Practice" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          <Card
            image={"/Assets/imgs/calculator.png"}
            title="Smart Scheduling"
            description="Say goodbye to phone tag. Our smart calendar, automated reminders, and AI booking assistant fill your schedule efficiently, reducing no-shows and administrative overhead."
          />
          <Card
            image={"/Assets/imgs/team.png"}
            title="Client Management"
            description="Optimize your availability with demand forecasting, offer client subscriptions, and seamlessly process payments with Stripe Connect"
          />
          <Card
            image={"/Assets/imgs/robot.png"}
            title="AI-Powered Assistance"
            description="Let our unique AI voice assistant handle booking calls for practitioners not yet on our platform, expanding your reach and client convenience."
          />
        </div>
        
        <div className="mt-8 md:mt-12 flex justify-center md:justify-start px-4 mb-20">
          <PrimaryButton text="Learn More About Practitioner Features" />
        </div>

        <SectionHeader title="Booking Made Simple, Anytime, Anywhere" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          <Card
            image={"/Assets/imgs/mobile.png"}
            title="Easy Appointment Booking"
            description="Find and book appointments with your preferred practitioners 24/7 through our intuitive mobile app. No more waiting on hold."
          />
          <Card
            image={"/Assets/imgs/bell.png"}
            title="Stay Organized"
            description="Manage all your appointments in one place, receive timely reminders, and communicate securely with your practitioners.seamlessly process payments with Stripe Connect"
          />
          <Card
            image={"/Assets/imgs/loading.png"}
            title="Discover & Connect"
            description="Search for a wide range of practitioners. Even if they're not on Booked, our AI can help you get an appointment."
          />
        </div>
        
        <div className="mt-8 md:mt-12 flex justify-center md:justify-end px-4">
          <PrimaryButton text="Download the Client App" />
        </div>
      </Section>

      {/* AI Section */}
      <div className="bg-white">
        <Section backgroundColor="bg-[#DBE3E9]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#09307D]">
                The Magic of AI Booking
              </h2>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-[#747070]">
                Can't find your practitioner on Booked? No problem! Our
                innovative AI assistant can call their office on your behalf,
                using your preferences to find and book an appointment for
                you. It's like having a personal booking assistant.
              </p>
              <PrimaryButton text="See How It Works" />
            </div>
            <div className="px-4">
              <img
                src="/Assets/imgs/AI.gif"
                alt="AI Booking"
                className="rounded-[30px] md:rounded-[25px] shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Trust Section */}
      <div className="bg-[#DBE3E9] bg-">
        <Section backgroundColor="bg-gray-50">
          <SectionHeader 
            title="Trusted by Professionals & Clients"
            description="Join hundreds of satisfied practitioners who have transformed their practice with our booking platform."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            <Card2
              initials="DJ"
              name="Dr. Jane D"
              designation="Physiotherapist"
              testimonial="The client management features have helped me provide much better care. I can easily access notes and history before each session."
              initialsColor="bg-[#D4DEE76B]"
              textColor="text-[#3D86FF]"
              nameColor="text-[#09307D]"
              bgColor="bg-[#FFFFFF]"
              designationColor="text-[#747070]"
              testimonialColor="text-[#8E8E8E]"
            />
            <Card2
              initials="AM"
              name="Alex M."
              designation="Client"
              testimonial="The client management features have helped me provide much better care. I can easily access notes and history before each session."
              initialsColor="bg-[#595D61]"
              textColor="text-[#FFFFFF]"
              nameColor="text-[#FFFFFF]"
              bgColor="bg-[#000000]"
              designationColor="text-[#FFFFFF]"
              testimonialColor="text-[#FFFFFF]"
            />
            <Card2
              initials="DJ"
              name="Dr. Jane D"
              designation="Physiotherapist"
              testimonial="The client management features have helped me provide much better care. I can easily access notes and history before each session."
              initialsColor="bg-[#D4DEE76B]"
              textColor="text-[#3D86FF]"
              nameColor="text-[#09307D]"
              bgColor="bg-[#FFFFFF]"
              designationColor="text-[#747070]"
              testimonialColor="text-[#8E8E8E]"
            />
          </div>
        </Section>
      </div>

      <div className="bg-[#F2F6FF] flex flex-col md:flex-row justify-between items-center py-8 md:py-10 px-4 md:px-40 gap-6">
        <h1 className="font-bold text-2xl md:text-3xl text-[#09307D] text-center md:text-left">
          Ready to Transform Your Scheduling?
        </h1>
        <PrimaryButton text="See How It Works" />
      </div>
    </div>
  );
};

export default HomePage; 