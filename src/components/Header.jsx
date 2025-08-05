import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const data = localStorage.getItem("authtoken");
  console.log(data);
  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "MyOrders", path: "/myorder" },
  ];
  // const shouldHide = ;
  // const shouldShowMyOrders = data && item.name === "MyOrders";
  // const shouldHideMyOrders = !data && item.name === "MyOrders";
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
                  <Link
                    className={`nav-link active fw-bold ${
                      data && (item.name === "Login" || item.name === "Signup")
                        ? "d-none"
                        : ""
                    } ${!data && item.name === "MyOrders" ? "d-none" : ""}`}
                    aria-current="page"
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {data ? (
            <div>
              <button
                className="btn btn-danger"
                onClick={()=>
                  localStorage.removeItem("authtoken") || window.location.reload() || (window.location.href = "/")
                }
              >
                Logout
              </button>
              <Link className="btn btn-success ms-2" to="/myorder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
