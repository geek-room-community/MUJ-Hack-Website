import "./App.css";
import Home from "./components/custom/Home";
import AboutUs from "./components/custom/AboutUs";
import Faq from "./components/custom/FAQ";
// import MentorCard from "./components/custom/MentorCard";
import Navbar from "./components/custom/Navbar";
import ProblemStatement from "./components/custom/ProblemStatement";
import TimeLine from "./components/custom/TimeLine";
import { HashRouter as Router } from "react-router-dom";
import { useRef } from "react";
import ScrollHandler from "./components/custom/ScrollHandler";
import Footer from "./components/custom/Footer";
import Sponsors from "./components/custom/Sponsor";
import Prizes from "./components/custom/PrizePool";
import Judge from "./components/custom/Judge";
import LeadOrganizers from "./components/custom/OrganizerCard";

function App() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const problemStatementRef = useRef<HTMLDivElement | null>(null);
  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const prizePoolRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const mentorCardRef = useRef<HTMLDivElement | null>(null);
  const JudgeRef = useRef<HTMLDivElement | null>(null);
  const LeadOrganizersRef = useRef<HTMLDivElement | null>(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar
          scrollRefs={{
            home: homeRef,
            about: aboutUsRef,
            timeline: timelineRef,
            problems: problemStatementRef,
            sponsors: sponsorsRef,
            prizes: prizePoolRef,
            faq: faqRef,
            team: mentorCardRef,
            judge: JudgeRef,
            leadOrganizers: LeadOrganizersRef,
          }}
        />

        <ScrollHandler
          refs={{
            home: homeRef,
            about: aboutUsRef,
            timeline: timelineRef,
            problems: problemStatementRef,
            sponsors: sponsorsRef,
            prizes: prizePoolRef,
            faq: faqRef,
            team: mentorCardRef,
          }}
        />
        <main className="flex-grow">
          <div id="home" ref={homeRef} className="xl:mt-10">
            <Home />
          </div>
          <div
            id="about"
            ref={aboutUsRef}
            className="mt-[2rem] sm:mt-[-3rem] min-w-1024:mt-[-5rem]"
          >
            <AboutUs />
          </div>
          <div id="timeline" ref={timelineRef} className="">
            <TimeLine />
          </div>
          <div
            id="problems"
            ref={problemStatementRef}
            className="min-h-[70dvh] h-fit"
          >
            <ProblemStatement />
          </div>
          <div id="prizes" ref={prizePoolRef} className="h-[25rem]">
            <Prizes />
          </div>
          <div id="judge" ref={JudgeRef} className="md:h-[75rem] h-[55rem] mt-[90rem] md:mt-[70rem] sm:mt-[95rem] lg:mt-[55rem] pt-10">
            <Judge />
          </div>
          <div id="LeadOrganizers" ref={LeadOrganizersRef} className="h-100">
            <LeadOrganizers />
          </div>
          <div id="sponsors" ref={sponsorsRef} className="h-auto ">
            <Sponsors />
          </div>
          <div id="faq" ref={faqRef} className="h-[90rem] sm:h-[85rem]">
            <Faq />
          </div>
          {/* <div id="team" ref={mentorCardRef} className="h-screen">
            <MentorCard />
          </div> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
