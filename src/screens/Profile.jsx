import React from "react";
import { jwtDecode } from "jwt-decode";
import defaultImage from "../assets/profileAvater.png";
import Prev from "../components/Prev";



const Profile = () => {
  const auth = localStorage.getItem("authtoken");
  const dataJWT = jwtDecode(auth);
  return (
    <div className="my-5" style={{minHeight:"100vh"}}>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About {dataJWT? dataJWT.name : ""}</h3>
                <p>
                  {dataJWT
                    ? `Hi! I'm ${dataJWT.name} and I'm ${dataJWT.role}`
                    : ""}
                </p>
                <div>
                  <div>
                    <p>Name : </p><p>{dataJWT.name}</p>
                  </div>
                  <div>
                    <p>Email : </p><p>{dataJWT.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                {" "}
                <img
                  src={defaultImage}
                  title=""
                  alt=""
                  className="w-75 h-75 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Prev data={dataJWT}/>
      </section>
    </div>
  );
};

export default Profile;
