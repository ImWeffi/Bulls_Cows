import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");
    if (!values.username || !values.password || !values.email) {
      setError("Please fill in all fields");
      return;
    }
    if (values.password !== values.passwordCheck) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3002/register",
        values
      );
      console.log(response);
      setSuccessMessage("Successfully registered!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
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
                <label htmlFor="inputPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordCheck"
                  name="passwordCheck"
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
            {successMessage && (
              <div className="alert alert-success alert-sm" role="alert">
                {successMessage}
              </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
