const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "bullscows",
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  const values = [username, password, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error occurred during registration:", err);
      return res
        .status(500)
        .json({ error: "An error occurred during registration" });
    }
    console.log("User registered successfully");
    return res.status(200).json({ message: "User registered successfully" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  const values = [username, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Login failed:", err);
      // return res.json({ error: "An error occurred during login" });
    }
    if (result.length === 1) {
      console.log("Login successful");
      // return res.status(200).json({ message: "Login successful" });
    } else {
      console.log("Invalid username or password");
      // return res.json({ error: "Invalid username or password" });
    }
  });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

db.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Database connected successfully");
  }
});
