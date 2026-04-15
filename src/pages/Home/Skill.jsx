import { useRef } from "react";
import { skills } from "../../services/json/skills";
import { techIcon } from "../../services/json/techIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skill = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  // reset refs
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      itemsRef.current,
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
        stagger: 0.15,
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
    <section ref={sectionRef} className="section-tab skill-sec">
      <div className="container">
        <div className="skill-cntn">
          {/* 🔥 Heading */}
          <div className="bnr-hdr" ref={addToRefs}>
            <h2 className="title2 select-none">
              <span className="hdr1">skills</span>
              <span className="hdr2">skills</span>
            </h2>
          </div>

          <ul>
            {skills.map(({ id, category, items }) => (
              <li
                ref={addToRefs}
                key={id}
                className="skill-list text-center flex justify-center items-center mb-2"
              >
                <span>{category}</span>
                <span>{items}</span>
              </li>
            ))}
          </ul>

          <div className="techCard">
            {techIcon.map(({ id, image, name }, i) => (
              <div
                ref={addToRefs}
                className="icons select-none"
                key={id}
                style={{ "--i": i + 1 }}
              >
                <img src={image} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
