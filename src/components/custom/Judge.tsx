import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import user from "/assets/Judges/user.jpg";

interface Judge {
  img: string;
  name: string;
  linkedin: string;
  role?: string;
}

const judges: Judge[] = [
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/namannn04",
  },
  {
    img: user,
    name: "Revealing Soon",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    img: user,
    name: "Revealing Soon",
    role: "Judge",
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
      <div className="hidden lg:block mb-16 relative">
  <div className="max-w-7xl mx-auto relative">
    <div className="flex flex-wrap justify-center items-center gap-8 xl:gap-12">
      {judges.map((judge, index) => (
        <div
          key={index}
          className="relative overflow-hidden flex justify-center items-center rounded-2xl glassy-div group 
        w-64 h-80 xl:w-72 xl:h-96
        shadow-lg transition-all duration-500 hover:scale-105 hover:z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10 pointer-events-none"></div>
          
          <img
            src={judge.img || "/placeholder.svg"}
            alt={judge.name}
            className="h-full w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                {judge.name}
              </h3>
              {judge.linkedin && (
                <a
                  href={judge.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-50 inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 pointer-events-auto"
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

          <div className="absolute inset-0 border border-pink-500/30 rounded-2xl z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Mobile View */}
      <div className="lg:hidden overflow-hidden">
        <Swiper
          effect="cards"
          grabCursor={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Autoplay, Pagination, EffectCards]}
          className="w-[85%] h-[450px] sm:h-[500px] md:h-[550px] mx-auto mb-16"
        >
          {judges.map((judge, index) => (
            <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  src={judge.img || "/placeholder.svg"}
                  alt={judge.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {judge.name}
                    </h3>
                    {judge.linkedin && (
                      <a
                        href={judge.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
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
      </div>
    </div>
  );
}
