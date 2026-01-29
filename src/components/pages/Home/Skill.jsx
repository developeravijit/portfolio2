import { skills, techIcon } from "../../../constant";

const Skill = () => {
  return (
    <section className="section-tab abt-sec">
      <div className="container">
        <div className="skill-cntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">skills</span>
              <span className="hdr2">skills</span>
            </h2>
          </div>
          <ul>
            {skills.map(({ id, category, items }) => (
              <li
                key={id}
                className="skill-list flex justify-center items-center mb-2"
              >
                <span>{category}</span>
                <span>{items}</span>
              </li>
            ))}
          </ul>
          <div className="techCard">
            {techIcon.map(({ id, image, name }, i) => (
              <div className="icons select-none" key={id} style={{ "--i": i + 1 }}>
                <img src={image} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
