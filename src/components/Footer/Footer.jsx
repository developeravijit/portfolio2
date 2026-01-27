import { footerLinks } from "../../constant";

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="contact-box">
          <span className="hdr1">Contact</span>
          <span className="hdr2">Contact</span>
        </div>
        <div className="contact-list">
          <ul className="flex justify-center items-center gap-7">
            {footerLinks.map(({ id, icon, name }) => (
              <li key={id} className="flex items-center ">
                <img src={icon} alt="Call" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
