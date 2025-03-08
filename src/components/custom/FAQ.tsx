import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the interface for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

// Define the faqs array with the FAQ type
const faqs: FAQ[] = [
  {
    question: "What is Code-ए-Manipal and what makes it unique?",
    answer:
      "Code-ए-Manipal is a groundbreaking hackathon jointly organized by Manipal University, Jaipur and Geek Room. It provides a unique experience, redefining the boundaries of creativity and technology, transcending conventional hackathons.",
  },
  {
    question: "How can I participate in Code-ए-Manipal?",
    answer:
      "You can register on our official website. After registration, you will receive further instructions via email.",
  },
  {
    question: "What are the eligibility criteria for participants?",
    answer:
      "All are welcome to participate, whether you are currently enrolled in a college or university or a working professional. All skill levels are welcome.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any necessary software tools, and a collaborative spirit. Food and drinks will be provided.",
  },
  {
    question: "Are inter-college teams allowed to participate?",
    answer:
      "Yes, inter-college teams are allowed. You can form a team with students from different colleges or universities.",
  },
  {
    question: "Can I participate solo?",
    answer:
      "While we encourage participation as a team (as you'll get networking opportunities and it's always fun with friends) you can participate solo",
  },
  {
    question: "Will there be wifi available at the venue?",
    answer: "Yes, ofcourse! (even we can't survive without internet😭)",
  },
  {
    question: "It is my first hackathon, what's something I should know?",
    answer:
      "Hackathons are not only meant for winning (although that is the goal) but they provide you with so many networking opportunities (our community core members met in hacks too). Win or lose you'll definitely learn something, so come from a learning mindset and you will have fun along the way (we promise 😁)",
  },
  {
    question: "Will there be enough charging ports available?",
    answer:
      "We will definitely ensure the availability of charging ports for every team (we've been to enough hacks and we know how that can be a problem 😚)",
  },
  {
    question: "Do I need to bring food, snacks and all?",
    answer:
      "Nahh, we're your hosts for the duration of the hack, all food and snacks will be on us!",
  },
  {
    question: "I have already applied but my application is not approved yet?",
    answer:
      "Be patient, we've got so many registrations, we are still in the process of accepting teams, just hold on for some time",
  },
  {
    question: "Will our travel expenses be covered 👉👈?",
    answer:
      "While we wish we could cover all of you guy's travel expenses, we cannot reimburse for travel costs. Food and accommodation is on us for the duration of the hack 😊",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-14 md:pl-14">
      <h2 className="md:text-[13rem] text-[6.4rem] font-bebas text-[#f8eadd] font-bold mb-[3rem] md:mb-[5rem] text-center">
        FAQS
      </h2>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-[#f8eadd] rounded-3xl overflow-hidden shadow-lg">
              <button
                className="w-full text-left p-7 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-[#210F09] text-lg md:text-2xl pr-8">
                  {faq.question}
                </span>
                <div className="bg-primary rounded-full p-1.5 flex-shrink-0">
                  <ChevronDown
                    className={`w-8 h-8 text-[#f8eadd] transition-transform duration-200 ${
                      expandedIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                expandedIndex === index
                  ? "max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="mt-3 bg-gray-600/20 bg-opacity-40 rounded-3xl p-7 shadow-lg transform transition-all duration-700 ease-in-out">
                <p className="text-white text-base md:text-lg font-semibold">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
