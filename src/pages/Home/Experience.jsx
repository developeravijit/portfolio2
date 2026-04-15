import { useRef } from "react";
import { expItem } from "../../services/json/expItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const headerRef = useRef(null);

  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      headerRef.current,
      {
        y: 120,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      },
    );

    tl.from(
      ".grid-box",
      {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4",
    );

    tl.fromTo(
      itemsRef.current,
      {
        y: 140,
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
      },
      "-=0.2",
    );
  }, []);

  return (
    <section ref={sectionRef} className="exp-sec">
      <div className="container">
        <div ref={headerRef} className="exp-titleCntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">experience</span>
              <span className="hdr2">experience</span>
            </h2>
          </div>
        </div>

        <div className="grid-box">
          {expItem.map(({ id, title, company, date, details }) => (
            <div ref={addToRefs} className="exp-cntn" key={id}>
              <h3 className="title3">{title}</h3>
              <h4 className="title4">{company}</h4>
              <h4 className="title4">{date}</h4>

              <div className="exp-desc">
                {details.map(({ id, exp }) => (
                  <p key={id}>{exp}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
