import { useRef } from "react";
import { certificate } from "../../services/json/certificate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Certificate = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowRef = useRef([]);

  rowRef.current = [];

  const addToRefs = (el) => {
    if (el && !rowRef.current.includes(el)) {
      rowRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset", // 🔁 repeat
      },
    });

    // 🔥 HEADER
    tl.fromTo(
      headerRef.current,
      {
        y: 60,
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

    // 🔥 CONTAINER (fix layout jump)
    tl.from(
      ".cert-cntn",
      {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4",
    );

    // 🔥 ROWS (stagger animation)
    tl.fromTo(
      rowRef.current,
      {
        y: 100,
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
      },
      "-=0.2",
    );
  }, []);

  return (
    <section ref={sectionRef} className="certificate-sec">
      <div className="container">
        {/* 🔥 HEADER */}
        <div ref={headerRef} className="certificate-titleCntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">Certifications</span>
              <span className="hdr2">Certifications</span>
            </h2>
          </div>
        </div>

        {/* 🔥 ROWS */}
        <div className="cert-cntn">
          {certificate.map(({ id, title, company, year, desc }) => (
            <div ref={addToRefs} className="row cert-row items-center" key={id}>
              <div className="col-30">
                <div className="exp-cntn">
                  <h4 className="title4">{title}</h4>
                  <h4 className="title4">{company}</h4>
                  <h4 className="title4">{year}</h4>
                </div>
              </div>

              <div className="col-70">
                <div className="cert-details">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
