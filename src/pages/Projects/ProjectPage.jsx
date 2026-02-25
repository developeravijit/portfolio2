import { projectDetails } from "../../services/json/projectDetails";

const ProjectPage = () => {
  return (
    <section className="project-pageSec">
      <div className="container">
        <div className="projectPage-title">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">TAKE A LOOK WHAT I HAVE CREATED</span>
              <span className="hdr2">TAKE A LOOK WHAT I HAVE CREATED</span>
            </h2>
          </div>
        </div>
        <div className="projectPage-title2">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">Projects</span>
              <span className="hdr2">Projects</span>
            </h2>
          </div>
        </div>
        {projectDetails.map(({ id, image, number, content }, index) => (
          <div className="porjectPage-cntn" key={id}>
            <div
              className={`project-img  ${index % 2 !== 0 ? "reverse" : ""} `}
            >
              <img src={image} alt="" />
              <div className="project-nmbr">{number}</div>
            </div>
            {content.map(({ id, title, desc }) => (
              <div
                className={`cntn-box ${index % 2 !== 0 ? "reverse-cntn" : ""}`}
                key={id}
              >
                <h3 className="title3">{title}</h3>
                <p>
                  {desc.startsWith("https") ? (
                    <a href={desc} target="_blank" rel="noopener noreferrer">
                      {desc}
                    </a>
                  ) : (
                    desc
                  )}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
