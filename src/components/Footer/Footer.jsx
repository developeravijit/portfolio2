import { footerLinks, socialMedia } from "../../constant";

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="footer-cntn">
          <div className="bnr-hdr">
            <h2 className="title2 select-none">
              <span className="hdr1">Contact</span>
              <span className="hdr2">Contact</span>
            </h2>
          </div>
        </div>
        <div className="contact-list">
          <ul className="flex justify-center items-center gap-7">
            {footerLinks.map(({ id, icon, name, link }) => (
              <li key={id} className="flex items-center ">
                <img src={icon} alt="Call" />
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="example-2 mt-5">
          {socialMedia.map(({ id, url, name, Icon }) => (
            <li className="icon-content" key={id}>
              <a href={url} aria-label={name} target="_blank">
                <div className="filled"></div>
                <Icon />
              </a>
              <div className="tooltip">{name}</div>
            </li>
          ))}
        </ul>
        <div className="footer-end mt-10 text-center uppercase select-none">
          Thank You
        </div>
      </div>
    </footer>
  );
};

export default Footer;
