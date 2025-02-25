// import image1 from "/assets/aihello.png";
// import image2 from "/assets/aptos.png";
// import image3 from "/assets/balamsiq.png";
// import image4 from "/assets/beeceptor.png";
// import image5 from "/assets/Devfolio.svg";
import image6 from "/assets/ethindia.png";
// import image7 from "/assets/interview buddy.png";
// import image8 from "/assets/polygon.png";
// import image9 from "/assets/unifest.png";
// import image10 from "/assets/wolfram.png";
// import image11 from "/assets/pathway.png";
// import image12 from "/assets/appwrite.png";
// import codecrafter from "/assets/codecrafter.svg";
// import MLH from "/assets/mlh-logo-color.png";
// import cyborgs from "/assets/Cyborgs.png";
// import devDisplay from "/assets/devDisplay2.png";
// import exploit from "/assets/exploit.png";
// import kaizen from "/assets/kaizen.jpg";
// import techSavvy from "/assets/Tech Savvy.png";
// import techLeads from "/assets/techLeads.png";
// import devArmy from "/assets/thedevArmy.png";
// import webForge from "/assets/webForge.png";
// import groq from "/assets/GROQ.jpg";
// import quilshield from "/assets/quilshield.png";
// import neoappAi from "/assets/neoappAI.png";
// import github from "/assets/GitHub.png";
// import reactive from "/assets/Reactive.png";
// import cloudCraft from "/assets/cloudCraft.jpg";
// import reinaiScience from "/assets/reinaiScience.jpg";

// import { FaExternalLinkAlt } from "react-icons/fa";

const Sponsors = () => {
  const categories = {
    Bronze: [
      { src: image6, url: "https://ethindia.devfolio.co" },
    ]
  };

  const formatCategoryName = (name: string) => {
    return name.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="md:text-[13rem] mt-[0.1rem] font-bebas text-8xl text-[#f8e8d9] font-bold mb-[4rem] md:mb-[6rem] text-center">
        SPONSORS
      </h1>

      {Object.entries(categories).map(([category, sponsors]) => (
        <div
          key={category}
          className="w-full max-w-6xl px-4 sm:px-6 mb-12 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bebas text-pink mb-6 text-center">
            {formatCategoryName(category)}
          </h2>
          <div
            className={`flex flex-wrap justify-center ${
              sponsors.length === 1 ? "items-center w-full" : "gap-4 sm:gap-6"
            }`}
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center ${
                  sponsors.length === 1
                    ? "w-full h-56 sm:w-96"
                    : "h-56 w-[45%] sm:w-80"
                }`}
              >
                <img
                  src={sponsor.src}
                  alt={`${category} Sponsor ${index + 1}`}
                  className="w-full p-5 h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* <h1 className="md:text-[13rem] font-bebas text-[6.4rem] text-[#f8e8d9] font-bold mb-[4rem] md:mb-[6rem] text-center mt-[9rem]">
        PARTNERS
      </h1>

      <div className="flex justify-center items-center mb-2">
        <div className="w-full h-48 sm:h-52 bg-white rounded-3xl shadow-lg overflow-hidden p-14">
          <img
            src={MLH}
            alt={`Partner MLH`}
            className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="my-2 space-x-3 text-white mb-12">
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <span className="font-bold">Read the MLH Code of Conduct</span>
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className="w-full px-4 sm:px-6 mb-12 flex flex-wrap items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center m-2 md:m-4  h-44 md:h-56 w-[calc(50%-1rem)] sm:w-80"
          >
            <img
              src={partner.src}
              alt={`partner ${index + 1}`}
              className="w-full  p-3 md:p-5  h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Sponsors;
