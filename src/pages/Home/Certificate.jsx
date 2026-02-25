import { certificate } from "../../services/json/certificate";


const Certificate = () => {
  return (
    <section className="certificate-sec">
      <div className="container">
        <div className="certificate-titleCntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">Certifications</span>
              <span className="hdr2">Certifications</span>
            </h2>
          </div>
        </div>
        <div className="cert-cntn">
          {certificate.map(({ id, title, company, year, desc }) => (
            <div className="row cert-row items-center" key={id}>
              <div className="col-30">
                <div className="exp-cntn">
                  <h4 className="title4">{title}</h4>
                  <h4 className="title4">{company}</h4>
                  <h4 className="title4">{year}</h4>
                </div>
              </div>
              <div className="col-70">
                <div className="cert-details">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
