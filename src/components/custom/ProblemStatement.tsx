"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Lock, Clock } from "lucide-react"
import { CardContent } from "../CardContent"
import { rippleEffect } from "@/utils/rippleEffect"
import { problemStatements as originalProblemStatements, CHANGE_DURATION } from "@/json/problem-statements"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

const problemStatements = [...originalProblemStatements]

const ProblemStatement = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<number | null>(null)

  rippleEffect(titleRef, containerRef)

  const startAutoChange = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      goToNext()
    }, CHANGE_DURATION)
  }, [])

  const stopAutoChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    setCurrent(api.selectedScrollSnap())

    startAutoChange()

    return () => {
      stopAutoChange()
      api.off("select", onSelect)
    }
  }, [api, startAutoChange, stopAutoChange])

  const handleInteraction = useCallback(() => {
    stopAutoChange()
    startAutoChange()
  }, [startAutoChange, stopAutoChange])

  const goToNext = () => {
    if (!api) return
    const nextIndex = (current + 1) % problemStatements.length
    api.scrollTo(nextIndex)
    setCurrent(nextIndex)
    handleInteraction()
  }

  const goToPrev = () => {
    if (!api) return
    const prevIndex = (current - 1 + problemStatements.length) % problemStatements.length
    api.scrollTo(prevIndex)
    setCurrent(prevIndex)
    handleInteraction()
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center py-16 select-none"
      style={{ background: "#210F09" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="relative w-full">
          <h1
            ref={titleRef}
            className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas font-bold text-center mb-[3rem] relative z-10"
            style={{ color: "#f8e8d9" }}
          >
            PROBLEM STATEMENTS
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[30%] bg-[#f8e8d9]/5 blur-3xl rounded-full z-0"></div>
        </div>

        <div className="w-full max-w-6xl md:mr-[35rem] px-4 py-[2.5rem] grid grid-cols-1 md:grid-cols-[80px_1fr_80px] gap-4">
          <div className="hidden md:flex md:items-center md:justify-center">
            <button
              onClick={goToPrev}
              className="bg-[#f8e8d9]/10 hover:bg-[#f8e8d9]/20 border border-[#f8e8d9]/20 rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition-all duration-300 group"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 text-[#f8e8d9] group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Carousel
              className="w-full h-full max-w-md lg:max-w-none"
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              onMouseEnter={stopAutoChange}
              onMouseLeave={startAutoChange}
              onTouchStart={stopAutoChange}
              onTouchEnd={startAutoChange}
            >
              <CarouselContent className="h-full flex items-center">
                {problemStatements.map((statement, index) => (
                  <CarouselItem key={index} className="lg:basis-4/5 xl:basis-2/5 p-2">
                    <div
                      className={`transition-all duration-500 rounded-xl relative overflow-hidden h-[400px] ${
                        index === current
                          ? "scale-100 opacity-100 shadow-[0_0_25px_rgba(248,232,217,0.15)]"
                          : "scale-90 opacity-30"
                      } pointer-events-none`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#210F09]/80 to-[#210F09]/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 border border-[#f8e8d9]/10 rounded-xl">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-[#f8e8d9]/20 blur-md animate-pulse"></div>
                          <div className="relative bg-[#210F09] p-4 rounded-full border border-[#f8e8d9]/30">
                            <Lock className="w-10 h-10 text-[#f8e8d9]" />
                          </div>
                        </div>
                        <span className="text-[#f8e8d9] text-2xl mt-6 font-bold tracking-wider">REVEALING SOON</span>
                        <div className="flex items-center mt-3 text-[#f8e8d9]/70">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">Stay tuned</span>
                        </div>

                        <div className="mt-8 px-6 py-3 border border-[#f8e8d9]/20 rounded-lg bg-[#f8e8d9]/5 backdrop-blur-md">
                          <h3 className="text-[#f8e8d9] text-lg font-medium mb-1">Problem #{index + 1}</h3>
                          <p className="text-[#f8e8d9]/60 text-sm">
                            This challenge will test your creativity and problem-solving skills
                          </p>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg blur-lg">
                        <CardContent {...statement} className="h-full pointer-events-none" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center">
            <button
              onClick={goToNext}
              className="bg-[#f8e8d9]/10 hover:bg-[#f8e8d9]/20 border border-[#f8e8d9]/20 rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition-all duration-300 group"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 text-[#f8e8d9] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-4">
          {problemStatements.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index)
                setCurrent(index)
                handleInteraction()
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#f8e8d9] scale-125" : "bg-[#f8e8d9]/30 hover:bg-[#f8e8d9]/50"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemStatement

