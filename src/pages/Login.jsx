import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3002/login", {
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card border mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
            <h1 className="card-title login-heading">Login Form</h1>
            <br />
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            {error && <div className="alert alert-danger">{error}</div>}
            <Link to="/register">Not registered yet?</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
