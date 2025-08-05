import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    // all state handling 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [try1, setTry1] = useState("");
    const Navigate = useNavigate()
    // handling function 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const response = await data.json();
            if(response.message === "Login successful"){
              Navigate("/"); // Redirect to home page on successful login
              window.location.reload(); // Reload the page to reflect changes
              alert(response.message);
              localStorage.setItem("authtoken", response.auth);
              console.log(localStorage.getItem("authtoken"));
            }else{
              setTry1("try again.");
            }
        }catch(err){
            console.error("Error during signup:", err);
        }
    }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        
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
          {try1 ? try1 : "Log In"}
        </button>
        <p className="my-3">
            Don't you have an account?
            <Link to="/signup" className="fs-6 text-decoration-none ms-3 ">
                signup
            </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
