const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/Server");
const bodyParser = require("body-parser");
const { createuser, loginuser } = require("./controller/authController");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
// app.use(bodyParser());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

// const publicPath = path.join(__dirname, "public");

connectDB();
app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/public/Index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/public/About.html`);
});
app.get("/services", (req, res) => {
  res.sendFile(`${__dirname}/public/services.html`);
});
app.get("/signup", (req, res) => {
  res.sendFile(`${__dirname}/public/Signup.html`);
});
app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/login.html`);
});
app.get("/dashboard", (req, res) => {
  res.sendFile(`${__dirname}/public/dashboard.html`);
});
app.get("/analytics", (req, res) => {
  res.sendFile(`${__dirname}/public/Analytics.html`);
});
app.get("/withdraw", (req, res) => {
  res.render("Withdraw");
});
app.get("/deposit", (req, res) => {
  res.render("Deposit");
});
app.get("/profile", (req, res) => {
  res.render("Deposit");
});

app.post("/api/v1/user", createuser);
app.post("/api/v1/login", loginuser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
