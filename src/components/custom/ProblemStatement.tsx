import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { CardContent } from "../CardContent";
import { rippleEffect } from "@/utils/rippleEffect";
import { problemStatements as originalProblemStatements, CHANGE_DURATION } from "@/json/problem-statements";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

const problemStatements = [...originalProblemStatements];

const ProblemStatement = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  rippleEffect(titleRef, containerRef);

  const startAutoChange = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, CHANGE_DURATION);
  }, []);

  const stopAutoChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap());

    startAutoChange();

    return () => {
      stopAutoChange();
      api.off("select", onSelect);
    };
  }, [api, startAutoChange, stopAutoChange]);

  const handleInteraction = useCallback(() => {
    stopAutoChange();
    startAutoChange();
  }, [startAutoChange, stopAutoChange]);

  const goToNext = () => {
    if (!api) return;
    const nextIndex = (current + 1) % problemStatements.length;
    api.scrollTo(nextIndex);
    setCurrent(nextIndex);
    handleInteraction();
  };

  const goToPrev = () => {
    if (!api) return;
    const prevIndex = (current - 1 + problemStatements.length) % problemStatements.length;
    api.scrollTo(prevIndex);
    setCurrent(prevIndex);
    handleInteraction();
  };

  return (
    <div ref={containerRef} className="py-12 h-fit grid grid-rows-[auto_1fr_auto] select-none">
      <h1
        ref={titleRef}
        className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas text-[#f8e8d9] font-bold text-center mb-[3rem]"
      >
        PROBLEM STATEMENTS
      </h1>

      <div className="max-w-6xl px-4 md:ml-[-5.49rem] py-[2.5rem] h-fit grid grid-cols-1 md:grid-cols-[50px_1fr_50px] gap-2">
        <div className="hidden md:flex md:items-center">
          <button
            onClick={goToPrev}
            className="bg-white/60 border border-black/10 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-black" />
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
            <CarouselContent className="h-full flex items-center md:ml-[-5.1rem]">
              {problemStatements.map((statement, index) => (
                <CarouselItem key={index} className="lg:basis-4/5 xl:basis-2/5">
                  <div
                    className={`transition-all duration-300 rounded-lg shadow-lg relative overflow-hidden  ${
                      index === current
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-30"
                    } pointer-events-none`}
                  >
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10">
                      <Lock className="w-12 h-12 text-white" />
                      <span className="text-white text-lg mt-2 font-bold">REVEALING SOON</span>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg blur-lg">
                      <CardContent {...statement} className="h-full pointer-events-none" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:flex md:items-center">
          <button
            onClick={goToNext}
            className="bg-white/60 border border-accent/10 rounded-full h-fit p-2 shadow-md z-50 hidden md:block"
            aria-label="Next card"
          >
            <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-black" />
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {problemStatements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
              setCurrent(index);
              handleInteraction();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-pink scale-125"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemStatement;
