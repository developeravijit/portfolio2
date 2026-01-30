import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant";
import Hamberger from "../Button/Hamberger";
import { useState } from "react";

const Navbar = () => {
  const { open, setOpen } = useState(false);
  return (
    <header className="hdr-sec">
      <div className="container">
        <nav className="navbar flex justify-between items-center">
          <div className="logo">
            <img src={"image/logo4.png"} alt="Avijit" />
          </div>
          <div className="hamberger-btn">
            <Hamberger />
          </div>
          <div className="navbar-nav flex items-center">
            <ul
              className={`offcanvas ${open ? "active" : ""} flex items-center ml-auto`}
            >
              {navLinks.map(({ id, name, path }) => (
                <li key={id} className="nav-item">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-links ${isActive ? "active" : ""} flex flex-col`
                    }
                  >
                    <span className="animate-name1">{name}</span>
                    <span className="animate-name2">{name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
