import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import { projectSlides } from "../../services/json/projectSlides";
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
  const isDragging = useRef(false);
  const navigate = useNavigate();

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
  return (
    <section className="project-sec">
      <div className="container">
        <div className="project-cntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">Projects</span>
              <span className="hdr2">Projects</span>
            </h2>
          </div>
        </div>
        <div className="project-btn relative z-10 mb-10">
          <PrimaryBtn name="Projects" onClick={() => navigate("/Projects")} />
        </div>
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              {projectSlides.map(({ id, image, url, name }) => (
                <div
                  className="carousel__cell"
                  key={id}
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   if (isDragging.current) return;
                  //   window.open(url, "_blank");
                  // }}
                >
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
