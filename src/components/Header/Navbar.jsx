import { NavLink, useNavigate } from "react-router-dom";
import Hamberger from "../Button/Hamberger";
import { useEffect, useState } from "react";
import { navLinks } from "../../services/json/navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.classList.add("isOpen");
      document.documentElement.classList.add("isOpen");
    } else {
      document.body.classList.remove("isOpen");
      document.documentElement.classList.remove("isOpen");
    }
    return () => {
      document.body.classList.remove("isOpen");
      document.documentElement.classList.remove("isOpen");
    };
  }, [open]);

  return (
    <header className="hdr-sec">
      <div className="container">
        <nav className="navbar flex justify-between items-center">
          <div
            className="max-w-40 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={"image/logo5.png"}
              alt="Avijit"
              className="!object-cover"
            />
          </div>

          <div className="hamberger-btn ml-auto">
            <Hamberger open={open} setOpen={setOpen} />
          </div>
          <div
            className={`navbar-nav ${open ? "active" : ""} flex items-center`}
          >
            <ul className="offcanvas flex items-center ml-auto">
              {navLinks.map(({ id, name, path }) => (
                <li key={id} className="nav-item mr-6 last:mr-0">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-links ${isActive ? "active" : ""} text-[var(--secondary-color)] text-[clamp(1.5rem,1.2rem+0.8vw,1.6rem)] relative overflow-hidden tracking-[0.1em]`
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
