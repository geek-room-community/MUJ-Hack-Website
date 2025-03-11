"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { GiLaurelsTrophy } from "react-icons/gi"
import { FiMapPin, FiUsers, FiCode } from "react-icons/fi"
import { motion } from "framer-motion"
import data from "../../json/home.json"

const Home = () => {
  const targetDate = new Date(Date.UTC(2025, 2, 21, 3, 30, 0)) // March 21, 2025, 9:00 AM IST
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  // Mouse position effect for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Countdown logic
  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Counter animation
  const [count, setCount] = useState(0)
  const targetCount = data.regsiterations
  const duration = 3000

  useEffect(() => {
    const animateCounter = () => {
      const incrementPerFrame = targetCount / (duration / 16)
      let currentCount = 0

      const updateCount = () => {
        currentCount += incrementPerFrame
        if (currentCount >= targetCount) {
          clearInterval(interval)
          setCount(targetCount)
        } else {
          setCount(Math.floor(currentCount))
        }
      }

      const interval = setInterval(updateCount, 16)

      setTimeout(() => {
        clearInterval(interval)
        setCount(targetCount)
      }, duration)
    }

    animateCounter()
    return () => {
      setCount((prevCount) => (prevCount >= targetCount ? targetCount : prevCount))
    }
  }, [targetCount, duration])

  // TimerBlock component with TypeScript types
  const TimerBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B] to-[#F2686B] rounded-full blur-md opacity-70"></div>
        <div className="bg-[#351220] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center relative overflow-hidden border-2 border-[#F2989B]">
          <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#351220] to-[#4a1a2e]"></div>
          <div className="absolute inset-0 bg-[#F2989B]/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2989B]/20 via-transparent to-transparent"></div>
          <span className="text-2xl md:text-4xl font-bold text-[#F2989B] relative z-10 [text-shadow:_0_0_10px_rgba(242,152,155,0.7)]">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-xs md:text-sm font-medium text-[#F2989B] uppercase tracking-wider">{label}</span>
    </motion.div>
  )

  // Animated code brackets for decoration
  const CodeBracket = ({ left = true, top = true }: { left?: boolean; top?: boolean }) => (
    <motion.div
      className={`absolute ${left ? "left-0" : "right-0"} ${top ? "top-0" : "bottom-0"} text-[#F2989B]/20 text-8xl font-mono`}
      initial={{ opacity: 0, x: left ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {left ? "{" : "}"}
    </motion.div>
  )

  return (
    <div className="min-h-screen relative md:-mt-10 mb-40 overflow-x-hidden overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F2989B]/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#F2989B]/5 blur-3xl"></div>
      </div>

      {/* Animated code lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#F2989B]/20 to-transparent"
            style={{
              left: 0,
              top: `${10 + i * 8}%`,
              width: "100%",
            }}
            initial={{ x: "-100%", opacity: 0.3 }}
            animate={{
              x: "100%",
              opacity: [0.1, 0.2, 0.1],
              transition: {
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.5,
              },
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Particle effect */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-[#F2989B]/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 2 + 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <motion.header
          className="pt-8 px-6 flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <img
              src="/assets/grxmuj.png"
              alt="Logo"
              className="h-16 md:h-20 w-auto drop-shadow-[0_0_8px_rgba(242,152,155,0.5)]"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-[#F2989B] to-[#F2686B] text-[#351220] font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-[0_5px_15px_rgba(242,152,155,0.4)] hover:shadow-[0_8px_25px_rgba(242,152,155,0.6)] border border-[#F2989B]/20 relative overflow-hidden group"
              onClick={() => window.open("https://codemanipal.devfolio.co/", "_blank")}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center">
                <FiCode className="mr-2" />
                Register Now
              </span>
            </Button>
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <section className="mt-8 relative" ref={heroRef}>
          <div className="relative md:h-[80vh] h-[90vh] overflow-hidden rounded-3xl mx-4">
            {/* Parallax background */}
            <motion.div
              className="absolute inset-0 bg-[url('/assets/bannerBg.png')] bg-cover bg-center"
              style={{
                scale: 1.1,
                x: mousePosition.x * -20,
                y: mousePosition.y * -20,
              }}
              transition={{ type: "spring", damping: 15 }}
            ></motion.div>

            {/* Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#351220] via-[#351220]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>

            {/* Code brackets decoration */}
            <CodeBracket left={true} top={true} />
            <CodeBracket left={false} top={false} />

            {/* Floating glass elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#F2989B]/10 backdrop-blur-md border border-[#F2989B]/20 z-0"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#F2989B]/10 backdrop-blur-md border border-[#F2989B]/20 z-0"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Floating Info Bubbles - Only on Desktop */}
            {!isMobile && (
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute overflow-hidden top-[20%] left-[20%] w-44 h-44 rounded-full z-20"
                  animate={{
                    x: [0, 100, 200, 100, 0, -100, -200, -100, 0],
                    y: [0, 50, 100, 150, 200, 150, 100, 50, 0],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-full blur-md opacity-70"></div>
                  <div className="relative w-full h-full bg-[#351220]/90 backdrop-blur-md rounded-full border-2 border-[#F2989B]/50 flex flex-col items-center justify-center p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-2 rounded-full bg-[#F2989B]/20 mb-1">
                        <GiLaurelsTrophy className="text-3xl text-[#F2989B]" />
                      </div>
                      <h3 className="text-xs font-bold text-[#F2989B]/80 mb-1">PRIZE POOL</h3>
                      <p className="text-lg font-bold text-white text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                        {data.prizePool}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute overflow-hidden top-[50%] left-[60%] w-48 h-48 rounded-full z-20"
                  animate={{
                    x: [0, -100, -200, -100, 0, 100, 200, 100, 0],
                    y: [0, -50, -100, -50, 0, 50, 100, 50, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-full blur-md opacity-70"></div>
                  <div className="relative w-full h-full bg-[#351220]/90 backdrop-blur-md rounded-full border-2 border-[#F2989B]/50 flex flex-col items-center justify-center p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-2 rounded-full bg-[#F2989B]/20 mb-1">
                        <FiMapPin className="text-3xl text-[#F2989B]" />
                      </div>
                      <h3 className="text-xs font-bold text-[#F2989B]/80 mb-1">LOCATION</h3>
                      <p className="text-lg font-bold text-white text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                        {data.location}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute overflow-hidden top-[20%] left-[70%] w-44 h-44 rounded-full z-20"
                  animate={{
                    x: [0, -50, -100, -150, -200, -150, -100, -50, 0],
                    y: [0, 100, 200, 100, 0, -100, -200, -100, 0],
                  }}
                  transition={{
                    duration: 35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-full blur-md opacity-70"></div>
                  <div className="relative w-full h-full bg-[#351220]/90 backdrop-blur-md rounded-full border-2 border-[#F2989B]/50 flex flex-col items-center justify-center p-3 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-2 rounded-full bg-[#F2989B]/20 mb-1">
                        <FiUsers className="text-3xl text-[#F2989B]" />
                      </div>
                      <h3 className="text-xs font-bold text-[#F2989B]/80 mb-1">REGISTRATIONS</h3>
                      <p className="text-lg font-bold text-white text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                        {count}+
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                <div className="inline-block relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 blur-md rounded-lg"></div>
                  <div className="relative bg-[#351220]/80 px-4 py-1 rounded-lg border border-[#F2989B]/30 text-sm font-mono text-[#F2989B]">
                    MARCH 21-22, 2025
                  </div>
                </div>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-2 relative perspective-1000"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.span
                  className="text-white [text-shadow:_0_4px_8px_#000000] inline-block"
                  whileHover={{
                    rotateY: [0, 5, 0],
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  Code-
                </motion.span>
                <motion.span
                  className="relative inline-block"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute -inset-1 bg-[#F2989B] blur-xl rounded-full opacity-70"></span>
                  <motion.span
                    className="relative text-[#F2989B] [text-shadow:_0_0_20px_rgba(242,152,155,0.8)]"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(242,152,155,0.4)",
                        "0 0 20px rgba(242,152,155,0.8)",
                        "0 0 20px rgba(242,152,155,0.4)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    ए
                  </motion.span>
                </motion.span>
                <motion.span
                  className="text-white [text-shadow:_0_4px_8px_#000000] inline-block"
                  whileHover={{
                    rotateY: [0, -5, 0],
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  -Manipal
                </motion.span>
              </motion.h1>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F2989B] to-transparent my-4"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              />

              <motion.div
                className="relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="absolute -inset-2 bg-[#F2989B]/30 blur-lg rounded-lg"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 relative">
                  <span className="text-[#F2989B] [text-shadow:_0_0_10px_rgba(242,152,155,0.6)]">36-HOUR</span>{" "}
                  HACKATHON
                </h2>
              </motion.div>

              <motion.div
                className="flex space-x-6 md:space-x-10 mt-6 text-[#F2989B]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <TimerBlock value={timeLeft.days} label="Days" />
                <TimerBlock value={timeLeft.hours} label="Hours" />
                <TimerBlock value={timeLeft.minutes} label="Minutes" />
                <TimerBlock value={timeLeft.seconds} label="Seconds" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="relative -mt-28 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            ></motion.div>
          </div>
        </section>
        {/* Mobile Info Cards - Only on Mobile */}
        {isMobile && (
          <section className="px-6 py-8 mt-8">
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-xl blur-md opacity-70"></div>
                <div className="relative bg-[#351220]/90 backdrop-blur-md rounded-xl border-2 border-[#F2989B]/50 p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                  <div className="relative z-10 flex justify-center items-center">
                    <div className="p-3 rounded-full bg-[#F2989B]/20 mr-4">
                      <GiLaurelsTrophy className="text-3xl text-[#F2989B]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F2989B]/80 mb-1">PRIZE POOL</h3>
                      <p className="text-xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                        {data.prizePool}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-xl blur-md opacity-70"></div>
                <div className="relative bg-[#351220]/90 backdrop-blur-md rounded-xl border-2 border-[#F2989B]/50 p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                  <div className="relative z-10 flex justify-center items-center">
                    <div className="p-3 rounded-full bg-[#F2989B]/20 mr-4">
                      <FiMapPin className="text-3xl text-[#F2989B]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F2989B]/80 mb-1">LOCATION</h3>
                      <p className="text-xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                        {data.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2989B]/80 to-[#F2686B]/80 rounded-xl blur-md opacity-70"></div>
                <div className="relative bg-[#351220]/90 backdrop-blur-md rounded-xl border-2 border-[#F2989B]/50 p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/noise.png')] mix-blend-overlay opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#351220]/90 to-[#4a1a2e]/90"></div>

                  <div className="relative z-10 flex justify-center items-center">
                    <div className="p-3 rounded-full bg-[#F2989B]/20 mr-4">
                      <FiUsers className="text-3xl text-[#F2989B]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F2989B]/80 mb-1">REGISTRATIONS</h3>
                      <p className="text-xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">{count}+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Home