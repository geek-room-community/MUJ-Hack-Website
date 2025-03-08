"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Component() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="py-12 sm:py-16 bg-[#210F09] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // 🔥 Use inView here
      transition={{ duration: 1 }}
    >
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0  pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[90vw] sm:max-w-[80vw] mt-[3rem] relative z-10">
        <h2 className="md:text-[12rem] font-bebas text-8xl text-[#f8e8d9] font-bold mb-[4rem] md:mb-[6rem] text-center">
          Prize Pool
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* 2nd Prize - Silver (Desktop me pehle, Mobile me second) */}
          <PrizeCard
            title="2nd Prize"
            amount="revealing soon"
            icon="🥈"
            glowColor="#C0C0C0"
            borderColor="#C0C0C0"
            delay={0.3}
            className="md:w-[25%] lg:w-[22%] order-2 md:order-1" // 🟢 Mobile me 2nd, Desktop me 1st
          />

          {/* 1st Prize - Gold (Desktop me second, Mobile me pehla) */}
          <PrizeCard
            title="1st Prize"
            amount="revealing soon"
            icon="🏆"
            glowColor="#FFD700"
            borderColor="#FFD700"
            delay={0.5}
            className="md:w-[35%] lg:w-[30%] order-1 md:order-2" // 🟢 Mobile me 1st, Desktop me 2nd
          />

          {/* 3rd Prize - Bronze (Desktop me third, Mobile me third) */}
          <PrizeCard
            title="3rd Prize"
            amount="revealing soon"
            icon="🥉"
            glowColor="#CD7F32"
            borderColor="#CD7F32"
            delay={0.7}
            className="md:w-[25%] lg:w-[22%] order-3 md:order-3" // ✅ Mobile & Desktop dono me 3rd
          />
        </div>

        {/* Participation Prize */}
        <ParticipationCard />
      </div>
    </motion.section>
  );
}

function PrizeCard({
  title,
  amount,
  icon,
  glowColor,
  borderColor,
  className = "",
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.4,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0px 0px 20px ${glowColor}`, // Shadow Effect
      }}
      className={`relative flex-1 w-full md:max-w-[30%] lg:max-w-[25%] rounded-3xl overflow-hidden ${className}`} // 🟢 Add dynamic class
    >
      <div
        className="bg-[#210F09] rounded-3xl p-8 text-center transition-all duration-300 border-[3px]"
        style={{
          borderColor: borderColor,
          boxShadow: `0px 0px 20px ${glowColor} inset`, // 🔥 Fixed Spread Shadow
          overflow: "hidden", // ✅ Clipping Extra Shadow
        }}
      >
        {/* Icon with Glow */}
        <div
          className="text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full"
          style={{
            textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
            color: glowColor,
          }}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-4xl font-extrabold mb-6 text-white">{amount}</p>
      </div>
    </motion.div>
  );
}

function ParticipationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 100, delay: 1 }}
      whileHover={{ rotateY: 10, scale: 1.05 }}
      className="w-full max-w-lg mx-auto px-4"
    >
      <div className="bg-[#210F09] rounded-3xl shadow-lg p-8 text-center border-[3px] border-[#F2686B] hover:shadow-[0px_0px_15px_#F2686B] transition-all">
        {/* Icon with animated glow */}
        <motion.div
          className="text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full text-[#F2686B]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🎉
        </motion.div>

        <h3 className="text-3xl font-bold mb-3 text-[#F2686B]">
          revealing soon
        </h3>
        <p className="text-lg mb-4 text-white">
          Geek Room always brings something unique, right?
        </p>
        <p className="text-xl font-semibold mb-6 text-white">
          Here’s a special prize for the Best Freshers' Team to celebrate their
          brilliance!
        </p>

        <div className="mt-4">
          <span className="inline-block text-sm px-4 py-2 rounded-full font-semibold bg-[#F2686B] text-[#210F09] shadow-md">
            The Freshers’ Icon!
          </span>
        </div>
      </div>
    </motion.div>
  );
}
