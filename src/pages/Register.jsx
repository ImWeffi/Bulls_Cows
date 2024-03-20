import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card border mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
            <h1 className="card-title register-heading">Registration Form</h1>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Enter username"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="inputEmail">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter password"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="inputPassword">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter email"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br/>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
