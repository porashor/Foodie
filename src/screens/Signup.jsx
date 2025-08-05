import React, {useState} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    // all state handling 
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    // handling function 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: fullname,
                    email,
                    location,
                    password,
                }),
            });
            const response = await data.json();
            // if(response.status === "success"){
            //     alert("Signup successful!");
            // }else{
            //     alert("Signup failed: "+ response.errors[0].value + " is " + response.errors[0].msg);
            // }
            console.log(response);
        }catch(err){
            console.error("Error during signup:", err);
        }
    }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            aria-describedby="fullnameHelp"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Your address
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            aria-describedby="locationHelp"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="my-3">
            Already have an account?
            <Link to="/login" className="fs-6 text-decoration-none ms-3 ">
                Login
            </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
