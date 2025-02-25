import logo from "/assets/grxmuj.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-zinc-300 py-10 w-screen mt-[54rem] rounded-t-[50px] -ml-[50vw] -mr-[50vw] left-1/2 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <img
            src={logo}
            alt="MUJ Logo"
            className="h-32 w-auto mx-auto mb-4"
          />
          <p className="text-base md:text-lg lg:text-xl">
            Code-ए-Manipal, a groundbreaking hackathon by{" "}
            <a
              href="https://jaipur.manipal.edu/"
              className="text-pink-400 hover:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              LearnIT Manipal University Jaipur
            </a>{" "}
            and{" "}
            <a
              href="https://www.geekroom.in/"
              className="text-pink-400 hover:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geek Room
            </a>
            , redefines creativity and technology. Join us in the pursuit of
            innovation, transcending traditional hackathons.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 border-b-2 border-pink-500 inline-block">
            Useful Links
          </h3>
          <ul className="list-none space-y-3">
            <li>
              <a
                href="https://linktr.ee/geekroom"
                className="text-base md:text-lg lg:text-xl transition-colors duration-200 ease-in-out text-zinc-300 hover:text-pink-400"
              >
                Linktree
              </a>
            </li>
            <li>
              <a
                href="https://codemanipal.devfolio.co/"
                className="text-base md:text-lg lg:text-xl transition-colors duration-200 ease-in-out text-zinc-300 hover:text-pink-400"
              >
                Devfolio
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 border-b-2 border-pink-500 inline-block">
            Contact Us
          </h3>
          <address className="not-italic text-sm md:text-base lg:text-lg">
            Manipal University Jaipur,<br/>
            Dehmi Kalan, Off Jaipur-Ajmer Expressway,<br/>
            Jaipur, Rajasthan-303007.
          </address>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="mailto:community@geekroom.in" aria-label="Email">
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}
                ></i>
              </span>
            </a>
            <a
              href="https://x.com/geek__room_"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}
                ></i>
              </span>
            </a>
            <a
              href="https://www.instagram.com/_geek.room/"
              aria-label="Instagram"
            >
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i
                  className="fa-brands fa-instagram"
                  style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}
                ></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/code-kshetra/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center p-3 transition duration-200 ease-in-out transform hover:scale-110 hover:text-pink-400">
                <i
                  className="fa-brands fa-linkedin-in"
                  style={{ color: "#ff00bb", opacity: 0.7, fontSize: "1.5rem" }}
                ></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
