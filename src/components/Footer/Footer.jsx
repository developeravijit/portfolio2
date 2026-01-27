import { footerLinks, socialMedia } from "../../constant";

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
        <ul className="example-2">
          {socialMedia.map(({ id, url, name, Icon }) => (
            <li className="icon-content" key={id}>
              <a href={url} aria-label={name}>
                <div className="filled"></div>
                <Icon />
              </a>
              <div className="tooltip">{name}</div>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
