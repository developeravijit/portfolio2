import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projectSlides } from "../../services/json/projectSlides";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const carousel = (slider) => {
  const z = 350;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);
};

const animation = { duration: 40000, easing: (t) => t };

const Project = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const navigate = useNavigate();
  const isDragging = useRef(false);

  // reset refs
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const [sliderRef] = useKeenSlider(
    {
      dragStart: () => (isDragging.current = true),
      dragEnd: () => {
        setTimeout(() => (isDragging.current = false), 0);
      },
      drag: false,
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    [carousel],
  );

  // 🔥 SCROLL ANIMATION
  useGSAP(() => {
    if (window.innerWidth < 768) return;

    gsap.fromTo(
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
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset", // 🔁 repeat on scroll
        },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="project-sec">
      <div className="container">
        <div className="project-cntn">
          {/* 🔥 Heading */}
          <div className="bnr-hdr" ref={addToRefs}>
            <h2 className="title2 select-none">
              <span className="hdr1">Projects</span>
              <span className="hdr2">Projects</span>
            </h2>
          </div>
        </div>

        {/* 🔥 Button */}
        <div ref={addToRefs} className="project-btn relative z-10 mb-10">
          <PrimaryBtn name="Projects" onClick={() => navigate("/Projects")} />
        </div>

        {/* 🔥 Carousel */}
        <div ref={addToRefs} className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              {projectSlides.map(({ id, image, name }) => (
                <div className="carousel__cell" key={id}>
                  <img src={image} alt={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
