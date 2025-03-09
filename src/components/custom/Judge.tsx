import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import user from "/assets/Judges/user.jpg";

interface Judge {
  img: string;
  name: string;
  linkedin: string;
}

const judges: Judge[] = [
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
];

export default function Judge(): JSX.Element {
  return (
    <div className="container mx-auto px-4 h-auto sm:px-6 lg:px-8 text-white">
      <div className="text-center mt-9 mb-12 lg:mt-12 lg:mb-16">
        <h1 className="md:text-[13rem] font-bebas text-8xl mt-[3rem] sm:mt-[1.5rem] text-[#f8e8d9] font-bold mb-[2rem] md:mb-[5rem] text-center">
          JUDGES
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-10 mb-12">
        {judges.map((judge, index) => (
          <div
            key={index}
            className={`relative overflow-hidden flex justify-center items-center rounded-2xl glassy-div ${
              index === 1 || index === judges.length - 2
                ? "w-48 h-72 xl:w-56 xl:h-80"
                : "w-64 h-80 xl:w-72 xl:h-96"
            } shadow-lg tilt-effect`}
          >
            <img
              src={judge.img}
              alt={judge.name}
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-md flex items-center space-x-2">
              <span>{judge.name}</span>
              {judge.linkedin && (
                <a
                  href={judge.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M20.447 3H3.553A1.553 1.553 0 002 4.553v14.894C2 20.403 3.197 21 4.553 21H20.44c1.356 0 2.553-.598 2.553-2.553V4.553A1.553 1.553 0 0020.447 3zm-11.61 15H5.337V9.6h3.5v8.4zm-1.74-9.603a2.032 2.032 0 110-4.063 2.032 2.032 0 010 4.063zM19.1 18h-3.499v-4.6c0-1.2-.4-2.014-1.395-2.014-.763 0-1.209.513-1.409 1.01-.072.177-.09.422-.09.67v4.933H9.3c.042-8.034 0-8.9 0-8.9h3.499v1.36a3.294 3.294 0 013.056-1.74c2.274 0 3.744 1.483 3.744 4.13V18z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (Uniform Card Size) */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1.0}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="lg:hidden"
      >
        {judges.map((judge, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mb-10">
              {/* All cards have the same size in mobile view */}
              <div
                className={`relative overflow-hidden flex justify-center items-center rounded-2xl glassy-div w-72 h-96 sm:w-80 sm:h-96 md:w-96 md:h-112 shadow-lg tilt-effect`}
              >
                <img
                  src={judge.img}
                  alt={judge.name}
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-md flex items-center space-x-2">
                  <span>{judge.name}</span>
                  {judge.linkedin && (
                    <a
                      href={judge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M20.447 3H3.553A1.553 1.553 0 002 4.553v14.894C2 20.403 3.197 21 4.553 21H20.44c1.356 0 2.553-.598 2.553-2.553V4.553A1.553 1.553 0 0020.447 3zm-11.61 15H5.337V9.6h3.5v8.4zm-1.74-9.603a2.032 2.032 0 110-4.063 2.032 2.032 0 010 4.063zM19.1 18h-3.499v-4.6c0-1.2-.4-2.014-1.395-2.014-.763 0-1.209.513-1.409 1.01-.072.177-.09.422-.09.67v4.933H9.3c.042-8.034 0-8.9 0-8.9h3.499v1.36a3.294 3.294 0 013.056-1.74c2.274 0 3.744 1.483 3.744 4.13V18z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS */}
      <style>{`
        .glassy-div {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        .tilt-effect {
          transform: perspective(1000px) rotateX(2.5deg) rotateY(5deg);
        }
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 9px;
          bottom: 15px;
        }
        .swiper-pagination-bullet {
          background-color: grey;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          background-color: #DA39AE;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .swiper-slide-active {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          transform: scale(1);  /* Center active image */
        }

        /* Custom transition for the mobile swiper to create the effect of images coming from left and right */
        .swiper-slide-next {
          transform: translateX(30px) scale(0.95);  /* Next slide comes from right */
        }
        
        .swiper-slide-prev {
          transform: translateX(-30px) scale(0.95);  /* Previous slide comes from left */
        }

        .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .swiper-slide-active {
          transform: translateX(0) scale(1);  /* Active slide centered */
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.5;  /* Slightly reduce opacity for previous and next images */
        }

        .swiper-slide-active {
          opacity: 1;  /* Full opacity for the active image */
        }

        /* Ensure the previous and next slides don't merge and are clearly spaced */
        .swiper-slide-prev, .swiper-slide-next {
          z-index: 0;
        }
        .swiper-slide-active {
          z-index: 10;
        }
      `}</style>
    </div>
  );
}