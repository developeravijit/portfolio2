import { expItem } from "../../../constant";

const Experience = () => {
  return (
    <section className="exp-sec">
      <div className="container">
        <div className="exp-titleCntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">experience</span>
              <span className="hdr2">experience</span>
            </h2>
          </div>
        </div>
        <div className="grid-box">
          {expItem.map(({ id, title, company, date, details }) => (
            <div className="exp-cntn" key={id}>
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
