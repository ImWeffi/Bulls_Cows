import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3002/register", values)
      .then((res) => console.log("Registered!"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card border mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
            <h1 className="card-title register-heading">Registration Form</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  name="username"
                  placeholder="Enter username"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
