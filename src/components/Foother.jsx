import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";



const Foother = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <div>
                <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-decoration-none lh-1"
              aria-label="Bootstrap"
            >
              <img src={logo} className="w-25" alt="" />
            </Link>
            <span className="mb-3 mb-md-0 ">
              © 2025 Foodie, Inc
            </span>
            </div>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            
            <li className="ms-3">
              <a className="" href="/" aria-label="Instagram">
                
              </a>
            </li>
            <li className="ms-3">
              <a className="" href="#" aria-label="Facebook">
                
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Foother;
