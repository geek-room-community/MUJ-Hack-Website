import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollHandler: React.FC<{ refs: { [key: string]: React.RefObject<HTMLDivElement> } }> = ({ refs }) => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const sections = [
      { ref: refs.home, path: "/" },
      { ref: refs.about, path: "/about" },
      { ref: refs.timeline, path: "/timeline" },
      { ref: refs.problems, path: "/problems" },
      { ref: refs.prizes, path: "/prizes" },
      { ref: refs.faq, path: "/dontknow" },
      { ref: refs.team, path: "/team" },
    ];

    const options = {
      root: null, 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = sections.find(section => section.ref.current === entry.target)?.path;
          if (path) {
            navigate(path);
          }
        }
      });
    }, options);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current); 
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigate, refs]);

  return null;
};

export default ScrollHandler;
