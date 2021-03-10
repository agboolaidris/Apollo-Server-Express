const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

//setup handlebar engine and view location
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../template/views"));
hbs.registerPartials(path.join(__dirname, "../template/partials"));
//setup static directory to serve
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "weather app",
    developer: "cristiano Ronaldo",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page!!!",
    developer: "Idris Agboola",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page!!!",
    developer: "David Beckham",
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
