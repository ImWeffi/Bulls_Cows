import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Rules.css";

const Rules = () => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const accordions = document.querySelectorAll('[data-bs-toggle="collapse"]');
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
        const target = document.querySelector(
          accordion.getAttribute("data-bs-target")
        );
        if (target.classList.contains("show")) {
          target.classList.remove("show");
        } else {
          target.classList.add("show");
        }
      });
    });
  }, []);

  const [question, setQuestion] = useState({
    title: "",
    email: "",
    text: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const submitQuestion = () => {
    if (!question.title || !question.email || !question.text) {
      setError("Please fill in all fields");
      setShowError(true);
      return;
    }

    if (!validateEmail(question.email)) {
      setError("Please enter a valid email address");
      setShowError(true);
      return;
    }

    fetch("http://localhost:3002/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Question submitted successfully");
          setQuestion({ title: "", email: "", text: "" });
          setSuccessMessage("Question submitted successfully");
          setShowError(false);
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          console.error("Failed to submit question");
        }
      })
      .catch((error) => {
        console.error("Error occurred while submitting question:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="rulesAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What is the "Bulls and Cows" game?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#rulesAccordion"
                >
                  <div className="accordion-body">
                    "Bulls and Cows" is a logical game for two players, where
                    one player thinks of a four-digit number, and the other
                    player must guess this number.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do you play "Bulls and Cows"?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#rulesAccordion"
                >
                  <div className="accordion-body">
                    The player makes a guess, and the first player reveals the
                    number of "bulls" (correct digits in correct positions) and
                    "cows" (correct digits in incorrect positions). The goal of
                    the player is to guess the hidden number in the minimum
                    number of moves.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the rules of "Bulls and Cows"?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#rulesAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>The hidden number consists of four digits.</li>
                      <li>Digits cannot be repeated in the hidden number.</li>
                      <li>
                        The hidden number cannot consist null in the hidden
                        number.
                      </li>
                      <li>
                        The game continues until the player guesses the number.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-left mt-3">
              <h3 className="text-center mb-4">Ask us a question!</h3>
              {showError && (
                <div className="alert alert-danger " role="alert">
                  {error}
                </div>
              )}
              {successMessage && (
                <div className="alert alert-success alert-sm" role="alert">
                  {successMessage}
                </div>
              )}
              <div className="col-md-8">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter a title of question"
                    value={question.title}
                    onChange={handleInputChange}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={question.email}
                    onChange={handleInputChange}
                  />
                  <label>Your question</label>
                  <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    rows="2"
                    placeholder="Enter your question here"
                    value={question.text}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-8">
                <br />
                <button className="btn btn-primary" onClick={submitQuestion}>
                  Submit Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rules;
