import PrimaryBtn from "../../Button/PrimaryBtn";

const Banner = () => {
  return (
    <section className="section-tab">
      <div className="container">
        <div className="bnr-hdr">
          <h1 className="title1 flex flex-col select-none">
            <span className="hdrTitle1">frontend</span>
            <span className="hdrTitle2">Developer</span>
          </h1>
          <div className="profileImg">
            <img src={"image/profileImg.png"} alt="Avijit Roy" />
          </div>
        </div>
        <PrimaryBtn name="Contact Me" />
      </div>
    </section>
  );
};

export default Banner;
