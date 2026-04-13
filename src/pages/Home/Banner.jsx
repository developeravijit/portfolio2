import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-28.5 section-tab">
      <div className="container">
        <div className="relative my-[50px]">
          <h1 className="title1 flex flex-col select-none">
            <span className="hdrTitle1">backend</span>
            <span className="hdrTitle2">Developer</span>
          </h1>
          <div className="profileImg max-w-[300px] absolute bottom-[80%] right-[30%] translate-x-[50%] translate-y-[50%]">
            <img src={"image/profileImg.png"} alt="Avijit Roy" />
          </div>
        </div>
        <PrimaryBtn name="Contact Me" onClick={() => navigate("/contact")} />
      </div>
    </section>
  );
};

export default Banner;
