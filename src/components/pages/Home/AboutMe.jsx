import SecondaryBtn from "../../Button/SecondaryBtn";

const AboutMe = () => {
  return (
    <section className="section-tab abt-sec">
      <div className="container">
        <div className="content">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">about me</span>
              <span className="hdr2">about me</span>
            </h2>
          </div>
          <p>
            Frontend Developer with hands-on experience building responsive,
            production-ready websites using HTML, CSS, Bootstrap, Tailwind CSS,
            and JavaScript. Completed a frontend internship delivering 22–25
            production-ready webpages aligned with real-world deployment
            standards in collaboration with UI/UX, React, and Node.js teams.
            Recognized as Best Performer at Webskitters Academy and eager to
            contribute to scalable frontend projects.
          </p>
          <SecondaryBtn name="Download CV" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
