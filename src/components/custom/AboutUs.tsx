import React from "react";
import "../../App.css";
const AboutUs: React.FC = () => {
  return (
    <>
      <div className="p-4 md:pl-24 h-full w-full">
        <h1 className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas text-[#f8e8d9] font-bold text-center mb-[2rem]">
          About Us
        </h1>
        <p className="font-bold text-white text-xl leading-relaxed mb-[2rem]">
          Code-ए-Manipal, a thrilling 36-hour hackathon set for February 2025,
          invites tech enthusiasts to an electrifying journey of innovation.
          Tackle challenging coding problems, showcase your skills, and grab the
          opportunity to win amazing swags and prizes. Level up your coding
          expertise, network with industry leaders, and make your mark on the
          future of technology!
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:ml-6 mt-6">
        <div className="grid grid-cols-5 grid-rows-7 md:w-[45%] gap-3">
          <div className="bg-slate-400 col-span-3 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab5.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl  hover:scale-110 transition-all duration-300 ease-in-out "
            />
          </div>
          <div className="bg-slate-900 col-span-2 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/Logo Text.png"
              alt="Logo"
              className="w-full p-4 h-full object-contain rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out "
            />
          </div>
          <div className="bg-slate-400 col-span-2 row-span-4 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab3.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-3 row-span-4 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab4.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        <div className="grid grid-cols-9 grid-rows-5 md:w-[55%] gap-3">
          <div className="bg-slate-400 col-span-3 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab8.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-6 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-2 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab6.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-5 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/ab1.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="bg-slate-900 col-span-2 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer">
            <img
              src="/assets/Main Logo.png"
              alt="Logo"
              className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
