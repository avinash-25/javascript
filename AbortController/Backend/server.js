import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

const users = [
  {
    userName: "Avinash",
    age: 24,
    city: "Noida",
  },
  {
    userName: "Kanchan",
    age: 22,
    city: "Mathura",
  },
  {
    userName: "Ranjan",
    age: 21,
    city: "Delhi",
  },
];

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/users", (req, res) => {
  setTimeout(() => {
    res.status(200).json(users);
  }, 2000);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
