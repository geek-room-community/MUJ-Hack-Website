import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GiLaurelsTrophy } from "react-icons/gi";
import { FiMapPin, FiUsers } from "react-icons/fi";
import data from "../../json/home.json";

const Home = () => {
  const targetDate = new Date(Date.UTC(2025, 2, 21, 3, 30, 0)); // March 21, 2025, 9:00 AM IST

  // Countdown logic
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Counter animation
  const [count, setCount] = useState(0);
  const targetCount = data.regsiterations;
  const duration = 3000;

  useEffect(() => {
    const animateCounter = () => {
      const incrementPerFrame = targetCount / (duration / 16);
      let currentCount = 0;

      const updateCount = () => {
        currentCount += incrementPerFrame;
        if (currentCount >= targetCount) {
          clearInterval(interval);
          setCount(targetCount);
        } else {
          setCount(Math.floor(currentCount));
        }
      };

      const interval = setInterval(updateCount, 16);

      setTimeout(() => {
        clearInterval(interval);
        setCount(targetCount);
      }, duration);
    };

    animateCounter();
    return () => {
      setCount((prevCount) =>
        prevCount >= targetCount ? targetCount : prevCount
      );
    };
  }, [targetCount, duration]);

  // TimerBlock component with TypeScript types
  const TimerBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#351220] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 border-[#F2989B]">
        <span className="text-2xl md:text-4xl font-bold text-[#F2989B]">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm font-medium text-[#F2989B]">{label}</span>
    </div>
  );

  

  return (
    <div className="min-h-screen relative -mt-10 mb-40 overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#F2989B] filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#F2989B] filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#F2989B] filter blur-2xl"></div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 px-6 flex justify-between items-center">
          <img
            src="/assets/grxmuj.png"
            alt="Logo"
            className="h-16 md:h-20 w-auto"
          />
          <Button
            className="bg-[#F2989B] hover:bg-[#F2686B] text-[#351220] font-bold px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            onClick={() =>
              window.open("https://codemanipal.devfolio.co/", "_blank")
            }
          >
            Register
          </Button>
        </header>

        {/* Hero Section */}
        <section className="mt-8 relative">
          <div className="relative h-[70vh] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/bannerBg.png')] rounded-2xl bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#351220] via-transparent to-transparent"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 [text-shadow:_0_4px_8px_#000000]">
                Code-<span className="text-[#F2989B]">ए</span>-Manipal
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-[#F2989B] mb-6 [text-shadow:_0_4px_8px_#000000]">
                The Ultimate 36-Hour Hackathon
              </h2>
              
              <div className="flex space-x-4 md:space-x-8 mt-10 text-[#F2989B]">
                <TimerBlock value={timeLeft.days} label="Days" />
                <TimerBlock value={timeLeft.hours} label="Hours" />
                <TimerBlock value={timeLeft.minutes} label="Minutes" />
                <TimerBlock value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="relative -mt-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#F2989B] rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Prize Pool */}
                <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[#351220]/20">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-[#351220] text-[#F2989B]">
                      <GiLaurelsTrophy className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#351220]">PRIZE POOL</h3>
                      <p className="text-2xl font-bold text-white">{data.prizePool}</p>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[#351220]/20">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-[#351220] text-[#F2989B]">
                      <FiMapPin className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#351220]">LOCATION</h3>
                      <p className="text-lg font-bold text-white">{data.location}</p>
                    </div>
                  </div>
                </div>
                
                {/* Registrations */}
                <div className="flex-1 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-[#351220] text-[#F2989B]">
                      <FiUsers className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#351220]">REGISTRATIONS</h3>
                      <p className="text-2xl font-bold text-white">{Math.floor(count)}+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F2989B] mb-6">
              Ready to Code, Collaborate & Conquer?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join India's most exciting collegiate hackathon and showcase your skills in this 36-hour coding marathon. Build innovative solutions, win amazing prizes, and network with tech enthusiasts!
            </p>
            <Button
              className="bg-[#F2989B] hover:bg-[#F2686B] text-[#351220] font-bold px-10 py-6 text-xl rounded-full transform transition-transform duration-300 hover:scale-105"
              onClick={() =>
                window.open("https://codemanipal.devfolio.co/", "_blank")
              }
            >
              Register Now
            </Button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Home;