import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Model from "./Model";
import MyCart from "../screens/MyCart";
import { Context } from "../test/Context";
import defaultImage from "../assets/profileAvater.png"
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const maindata = localStorage.getItem("authtoken");
  const {state} = useContext(Context);
  const itemNumber = state.length;
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
                      maindata &&
                      (item.name === "Login" || item.name === "Signup")
                        ? "d-none"
                        : ""
                    } ${!maindata && item.name === "MyOrders" ? "d-none" : ""}`}
                    aria-current="page"
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {maindata ? (
            <div className="d-flex gap-2 align-items-center">
              <button>Log</button>
              <button
                className="btn ms-2 text-white"
                onClick={() => setShowModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <Badge>{itemNumber == 0 ? "" : itemNumber}</Badge>
              </button>
              <Link to="/profile"><img src={defaultImage} alt="" className="square-25" style={{width:"35px", height:"35px", borderRadius: "50%"}}/></Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
      {showModal && (
        <Model onClose={() => setShowModal(false)}>
          <MyCart/>
        </Model>
      )}
    </div>
  );
};

export default Header;
