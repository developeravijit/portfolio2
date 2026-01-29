import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar py-7">
        <div className="container">
          <div className="navbar-nav flex">
            <ul className="flex items-center ml-auto">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
