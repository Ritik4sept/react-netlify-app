import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#hero");

  const navItems = [
    ["Program Overview", "#whatisaiksham"],
    ["Delivery Model", "#delivery-model"],
    ["Training Topics", "#training"],
    ["Learn", "#why"],
    ["Timeline", "#timeline"],
    ["Team Structure", "#leadership"],
    ["Launch", "#engagement"],
    ["Measurement", "#measurement"],
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow bg-white">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img src="/assets/logo.png" width={200} alt="AIKSHAM" />
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {navItems.map(([label, link]) => (
              <li className="nav-item" key={label}>
                <a
                  className={`nav-link ${
                    activeLink === link ? "active-nav-link" : ""
                  }`}
                  href={link}
                  onClick={() => setActiveLink(link)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
