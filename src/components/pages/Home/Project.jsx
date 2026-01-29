import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { projectSlides } from "../../../constant";
import { useRef } from "react";
import PrimaryBtn from "../../Button/PrimaryBtn";
const carousel = (slider) => {
  const z = 300;
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
const Project = () => {
  const isDragging = useRef(false);

  const [sliderRef] = useKeenSlider(
    {
      dragStart: () => (isDragging.current = true),
      dragEnd: () => {
        setTimeout(() => (isDragging.current = false), 0);
      },
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel],
  );
  return (
    <section className="section-tab project-sec">
      <div className="container">
        <div className="project-btn mb-2.5">
          <PrimaryBtn name="Projects" />
        </div>
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              {projectSlides.map(({ id, image, url }) => (
                <div
                  className="carousel__cell"
                  key={id}
                  onClick={() => {
                    if (isDragging.current) return;
                    window.open(url, "_blank");
                  }}
                >
                  <img src={image} alt="" />
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
