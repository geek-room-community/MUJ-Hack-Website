"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const leftCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.5,
      },
    },
  }

  const rightCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.5,
      },
    },
  }

  const participationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 1,
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      className="py-12 sm:py-16 bg-gradient-to-b from-primary/10 to-primary/5 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 max-w-[90vw] sm:max-w-[80vw] mt-[3rem]">
        <h2 className="md:text-[13rem] font-bebas text-8xl text-[#f8e8d9] font-bold mb-[4rem] md:mb-[6rem] text-center">
          Prize Pool
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 md:space-x-4">
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-1 w-full md:max-w-[30%] lg:max-w-[25%]"
          >
            <PrizeCard title="2nd Prize" amount="revealing soon" position="left" icon="🥈" />
          </motion.div>
          <motion.div
            className="flex-1 w-full md:max-w-[40%] lg:max-w-[30%] order-first md:order-none"
            initial={{ opacity: 0, scale: 1.2, y: -30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.3 },
              scale: { 
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              },
              y: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.5,
              }
            }}
          >
            <PrizeCard title="1st Prize" amount="revealing soon" position="center" icon="🏆" isFirst={true} />
          </motion.div>
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-1 w-full md:max-w-[30%] lg:max-w-[25%]"
          >
            <PrizeCard title="3rd Prize" amount="revealing soon" position="right" icon="🥉" />
          </motion.div>
        </div>
        <motion.div
          variants={participationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full max-w-lg mx-auto px-4"
        >
          <ParticipationCard />
        </motion.div>
      </div>
    </motion.section>
  )
}

function PrizeCard({
  title,
  amount,
  position,
  icon,
  isFirst = false,
}: {
  title: string
  amount: string
  position: "left" | "center" | "right"
  icon: string
  isFirst?: boolean
}) {
  return (
    <div
      className={`bg-zinc-900 rounded-3xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl
        ${isFirst ? "border-4 border-pink shadow-xl" : ""}
        ${position === "center" ? "md:-mt-8" : ""}
      `}
    >
      <div
        className={`text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full
          ${isFirst ? "bg-primary text-white" : "bg-accent/10 text-primary"}
        `}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-4xl font-extrabold mb-6 text-white">{amount}</p>
      <div className={`mt-4 ${position === "left" ? "text-left" : position === "right" ? "text-right" : "text-center"}`}>
        <span
          className={`inline-block text-sm px-4 py-2 rounded-full font-semibold
            ${isFirst ? "bg-primary text-pink" : "bg-primary text-pink"}
          `}
        >
          {position === "left" ? "Silver" : position === "right" ? "Bronze" : "Gold"}
        </span>
      </div>
    </div>
  )
}

function ParticipationCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl border-2 border-primary/30">
      <div className="text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full text-primary">
        🎉
      </div>
      <h3 className="text-3xl font-bold mb-3 text-pink">revealing soon</h3>
      <p className="text-lg mb-4 text-white">Geek Room always brings something unique, right?</p>
      <p className="text-xl font-semibold mb-6 text-white">
      Here’s a special prize for the Best Freshers' Team to celebrate their brilliance!
      </p>
      <div className="mt-4">
        <span className="inline-block text-sm px-4 py-2 rounded-full font-semibold bg-primary text-pink">
        The Freshers’ Icon!
        </span>
      </div>
    </div>
  )
}
