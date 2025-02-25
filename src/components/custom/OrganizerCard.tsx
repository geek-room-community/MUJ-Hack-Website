import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LeadOrganizers = () => {
  const organizers = [
    { id: 1, image: "../../../assets/team_members/prathamBatra.jpg", name: "Pratham", linkedin: "https://www.linkedin.com/in/pratham1908/" },
    { id: 2, image: "../../../assets/team_members/SanidhyaGoel.jpg", name: "Sanidhya", linkedin: "https://www.linkedin.com/in/sanidhya-goel-2499991b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 3, image: "../../../assets/team_members/aditya.jpg", name: "Aditya", linkedin: "https://www.linkedin.com/in/adiii11" },
  ];

  return (
    <div className="text-center mt-[2rem] md:ml-14 p-4">
      <h1 className="md:text-[12rem] font-bebas text-8xl text-[#f8e8d9] font-bold mb-[2rem] md:mb-[5rem] text-center">
        ORGANIZERS
      </h1>

      {/* Desktop view with flex layout */}
      <motion.div
        className="hidden md:flex justify-center gap-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {organizers.map((organizer, index) => (
          <motion.div
            key={organizer.id}
            className={`${index === 0 || index === organizers.length - 1
              ? "w-64 h-96 xl:w-72 xl:h-[400px]"
              : "w-64 h-96 xl:w-72 xl:h-[400px]"
              } bg-transparent rounded-[100px] flex justify-center relative shadow-lg hover:shadow-2xl transition-all duration-300`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={organizer.image}
              alt={organizer.name}
              className="rounded-[100px] w-full h-full object-cover"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '8px',
                width: 'fit-content',
                maxWidth: '80%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              <a
                href={organizer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {organizer.name}
                <i className="fab fa-linkedin" style={{ fontSize: '18px', color: 'white' }}></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile view with smoother slider */}
      <div className="md:hidden">
        <Slider
          dots
          infinite
          speed={300}
          cssEase="cubic-bezier(0.25, 0.1, 0.25, 1)"
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1000}
          arrows={false}
          swipeToSlide={true}
          draggable={true}
          touchMove={true}
          customPaging={(i) => (
            <div className={`custom-dot ${i === 0 ? 'active' : ''}`}></div>
          )}
          appendDots={(dots) => (
            <div style={{ position: 'relative', marginTop: '20px' }}>
              <ul style={{ display: 'flex', justifyContent: 'center', padding: '0px', gap: '1px' }}> {dots} </ul>
            </div>
          )}
        >
          {organizers.map((organizer) => (
            <motion.div
              key={organizer.id}
              className="flex-shrink px-2 mx-auto w-44 h-64 bg-transparent rounded-[100px] flex justify-center relative slider-card shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="rounded-[100px] w-full h-full object-cover"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  color: 'grey',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  width: 'fit-content',
                  maxWidth: '80%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <a
                  href={organizer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {organizer.name}
                  <i className="fab fa-linkedin" style={{ fontSize: '12px', color: 'gray' }}></i>
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>

        <style>{`
          /* Gray color for inactive dots */
          .slick-dots li button:before {
            font-size: 10px;
            color: grey;
          }

          /* Pink color for active dot */
          .slick-dots li.slick-active button:before {
            color: #DA39AE; /* Pink color for active dot */
          }

          /* Pink custom-dot color */
          .custom-dot {
            width: 8px;
            height: 8px;
            background-color: grey;
            border-radius: 50%;
          }
          .slick-active .custom-dot {
            background-color: #DA39AE; /* Pink color for active custom dot */
          }

          /* Pink border for active card */
          .slick-center .slider-card {
            border: 2px solid pink;
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }

          /* Shadow effect */
          .slider-card, .md\\:w-52 {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Light shadow for cards */
          }
          .slider-card:hover, .md\\:w-52:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
          }

          /* Slide transition */
          .slick-slide {
            transition: transform 0.5s ease, opacity 0.5s ease;
          }

          .slick-slide-active {
            transform: translateX(0) scale(1); /* Active slide centered */
            opacity: 1; /* Full opacity for the active image */
          }

          .slick-slide-next,
          .slick-slide-prev {
            opacity: 0.5;  /* Slightly reduce opacity for previous and next images */
            transform: scale(0.95);
          }

          .slick-slide-next {
            transform: translateX(30px);
          }
          
          .slick-slide-prev {
            transform: translateX(-30px);
          }
        `}</style>
      </div>
    </div>
  );
};

export default LeadOrganizers;
