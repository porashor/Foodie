import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "contact", path: "/contact" },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="w-25" src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {nav.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link active fw-bold" aria-current="page" to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
