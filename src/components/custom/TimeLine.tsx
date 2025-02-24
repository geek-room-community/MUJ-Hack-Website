import React, { useState } from 'react';

// import laptop from "/assets/DesktopTimeline.svg";
import { useEffect } from 'react';

interface Task {
  time: string;
  description: string;
  date: string;
}

interface DayContent {
  title: string;
  tasks: Task[];
}

const dayData: DayContent[] = [
  {
    title: 'Day 1',
    tasks: [
      { time: '09:00 AM', description: 'Entry for the participants', date: '21 February 2025' },
      { time: '10:00 AM', description: 'Breakfast', date: '21 February 2025' },
      { time: '10:45 AM', description: 'Hacking Starts', date: '21 February 2025' },
      { time: '11:30 AM', description: 'Coding Workshop', date: '21 February 2025' },
      { time: '13:30 PM', description: 'Lunch+Dance', date: '21 February 2025' },
      { time: '16:00 PM', description: 'Mentoring Round 1', date: '21 February 2025' },
      { time: '20:00 PM', description: 'Dinner', date: '21 February 2025' },
      { time: '00:00 PM', description: 'Midnight DJ', date: '21 February 2025' },
    ],
  },
  {
    title: 'Day 2',
    tasks: [
      { time: '06:00 AM', description: 'Early Morning Tea', date: '22 February 2025' },
      { time: '08:30 AM', description: 'Breakfast', date: '22 February 2025' },
      { time: '11:00 AM', description: 'Mentoring Round 2', date: '22 February 2025' },
      { time: '13:00 PM', description: 'Lunch', date: '22 February 2025' },
      { time: '15:00 PM', description: 'Result Declaration for top 15', date: '22 February 2025' },
      { time: '16:30 PM', description: 'Judgement Round Begins', date: '22 February 2025' },
      { time: '18:30 PM', description: 'Winner Declaration', date: '22 February 2025' },
    ],
  },
];

const TimeLine: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [isBetween768And900, setIsBetween768And900] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsBetween768And900(width >= 768 && width <= 900);
    };

    handleResize(); // Check width on initial load
    window.addEventListener('resize', handleResize); // Listen for window resize

    // Clean up listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4 mt-[7rem] sm:mt-[12rem] md:pl-24">
      <h1 className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas text-[#f8e8d9] font-bold text-center mb-[3rem]">
        EVENT SCHEDULE
      </h1>

      {/* Days Button for both horizontal and vertical views, hidden in between-768-900 view */}
      

      {/* Horizontal Timeline for larger screens */}
      <div className="relative mb-[5rem] hidden md:flex between-768-900:hidden">
        <div className="absolute bg-[#FFA6A9] h-1 top-1/2 left-[5rem] right-16 z-0 transform md:translate-y-[-4.5rem]"></div>
        {dayData[selectedDay].tasks.map((task, index) => (
          <div key={index} className="flex flex-col items-center relative px-4">
            <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10 relative -translate-y-1/2"></div>
            <div className="flex flex-col items-center mt-4">
              <span className="text-lg text-white font-bold text-center">{task.description}</span>
              <span className="text-xs text-white mt-1">{`${task.date} | ${task.time}`}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-[3rem] mb-8 md:block between-768-900:hidden">
        {dayData.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`px-6 py-2  font-bold rounded-[3rem] ${selectedDay === index ? 'bg-[#FFA6A9] text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            {day.title}
          </button>
        ))}
      </div>

      {/* Vertical Timeline for small screens */}


      <div className="block md:hidden relative mb-10 between-768-900:hidden">
        <div className="absolute bg-purple-600 w-1 left-[19%] z-0"></div>
        <div className="flex flex-col items-start justify-between pl-[15%] relative">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="relative flex justify-between items-start mb-8">
              <div className="flex-shrink-0 relative">
                <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>
                {index < dayData[selectedDay].tasks.length - 1 && (
                  <div className="absolute left-[50%] transform -translate-x-1/2 w-1 h-[9vh] bg-pink z-0"></div>
                )}
              </div>
              <div className="ml-4">
                <span className="text-lg text-white font-bold">{task.description}</span>
                <br />
                <span className="text-sm text-white mt-1">{`${task.date} | ${task.time}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Between 768-900 view without day buttons */}
     
      {isBetween768And900 && (
        <div className="between-768-900:flex between-768-900:space-x-8 between-768-900:justify-center">
          {dayData.map((day, dayIndex) => (
            <div key={dayIndex} className="between-768-900:w-1/2 relative">
              <h2 className="text-2xl font-bold text-pink mb-4 text-center">{day.title}</h2>
              <div className="relative mb-10">
                <div className="flex flex-col items-start pl-[25%] relative">
                  {day.tasks.map((task, index) => (
                    <div key={index} className="relative flex justify-start items-start mb-8">
                      <div className="flex-shrink-0 relative">
                        <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>
                        {index < day.tasks.length - 1 && (
                          <div className="absolute left-[50%] transform -translate-x-1/2 w-1 h-[7vh] bg-pink z-0"></div>
                        )}
                      </div>
                      <div className="ml-4">
                        <span className="text-lg text-white font-bold">{task.description}</span>
                        <br />
                        <span className="text-sm text-white mt-1">{`${task.date} | ${task.time}`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}



      {/* Image Section */}
      {/* <div className="text-center h-[15rem] w-full  md:mb-[10rem] mt-[8rem]"> 
        <picture>
          <source media="(min-width: 1024px)" srcSet={laptop} />
          <source media="(min-width: 768px)" srcSet={laptop} />
          <img
            src={laptop}
            alt="Event SVG"
            className="w-full h-auto mx-auto max-w-[1200px] block"
          />
        </picture>
      </div> */}
    </div>
  );
};

export default TimeLine;