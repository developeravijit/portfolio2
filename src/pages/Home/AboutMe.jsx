import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  // reset refs
  contentRef.current = [];

  const addToRefs = (el) => {
    if (el && !contentRef.current.includes(el)) {
      contentRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      contentRef.current,
      {
        y: 120,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-tab abt-sec">
      <div className="container">
        <div className="abt-content">
          <div className="bnr-hdr" ref={addToRefs}>
            <h2 className="title2 select-none">
              <span className="hdr1">about me</span>
              <span className="hdr2">about me</span>
            </h2>
          </div>

          <p ref={addToRefs}>
            Frontend Developer with hands-on experience building responsive,
            production-ready websites using HTML, CSS, Bootstrap, Tailwind CSS,
            and JavaScript. Completed a frontend internship delivering 22–25
            production-ready webpages aligned with real-world deployment
            standards in collaboration with UI/UX, React, and Node.js teams.
            Recognized as Best Performer at Webskitters Academy and eager to
            contribute to scalable frontend projects.
          </p>

          <div ref={addToRefs}>
            <SecondaryBtn name="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
