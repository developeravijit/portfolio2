const Banner = () => {
  return (
    <div className="bnr-wrpr">
      <div className="container">
        <div className="bnr-hdr">
          <h1 className="title1 flex flex-col">
            <span className="hdrTitle1">frontend</span>
            <span className="hdrTitle2">Developer</span>
          </h1>
          <div className="profileImg">
            <img src={"image/profileImg.png"} alt="Avijit Roy" />
          </div>
        </div>
        <div className="buttonBox flex justify-center">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-2"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className="text">Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-1"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
