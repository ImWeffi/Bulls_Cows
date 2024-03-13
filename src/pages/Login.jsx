import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card border mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
            <h1 className="card-title login-heading">Login Form</h1>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  placeholder="Enter username"
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
                />
                <br />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            <a href="/register">not registered yet?</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
