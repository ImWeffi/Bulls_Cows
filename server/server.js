const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: 3306, //change port on yours
  password: "",
  database: "bullscows",
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  const checkUserSql = "SELECT * FROM users WHERE username = ?";
  const checkUserValues = [username];

  db.query(checkUserSql, checkUserValues, (checkUserErr, checkUserResult) => {
    if (checkUserErr) {
      console.error("Error occurred during user check:", checkUserErr);
      return res
        .status(500)
        .json({ error: "An error occurred during registration" });
    }

    if (checkUserResult.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const sql =
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
      const values = [username, password, email];

      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error occurred during registration:", err);
          return res
            .status(500)
            .json({ error: "An error occurred during registration" });
        }
        console.log("User registered successfully");
        return res
          .status(200)
          .json({ message: "User registered successfully" });
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const checkUserSql = "SELECT * FROM users WHERE username = ?";
  const checkUserValues = [username];

  db.query(checkUserSql, checkUserValues, (checkUserErr, checkUserResult) => {
    if (checkUserErr) {
      console.error("Error occurred during user check:", checkUserErr);
      return res.status(500).json({ error: "An error occurred during login" });
    }

    if (checkUserResult.length === 0) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const user = checkUserResult[0];
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    return res
      .status(200)
      .json({ message: "Login successful", user_id: user.user_id });
  });
});

app.post("/api/results", (req, res) => {
  const { user_id, guess, bulls, cows, timer } = req.body;

  const sql =
    "INSERT INTO game_history (user_id, guess, bulls, cows, timer, created_at) VALUES (?, ?, ?, ?, ?, current_timestamp())";
  const values = [user_id, guess, bulls, cows, timer];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error occurred during saving game result:", err);
      return res
        .status(500)
        .json({ error: "An error occurred during saving game result" });
    }
    console.log("Game result saved successfully");
    return res.status(201).json({ message: "Game result saved successfully" });
  });
});
app.get("/api/history", (req, res) => {
  const { user_id } = req.query;

  const sql = "SELECT * FROM game_history WHERE user_id = ?";
  const values = [user_id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching game history:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching game history" });
    }
    return res.status(200).json(results);
  });
});

app.get("/api/leaderboard", (req, res) => {
  const sortBy = req.query.sortBy || "timer";

  const sql = `
    SELECT game_history.user_id, users.username, game_history.bulls, game_history.timer 
    FROM game_history 
    INNER JOIN users ON game_history.user_id = users.user_id
    ORDER BY ${sortBy} 
    LIMIT 10
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching leaderboard:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching leaderboard" });
    }
    return res.status(200).json(results);
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
