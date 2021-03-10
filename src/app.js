const path = require("path");
const express = require("express");
const app = express();

//route
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "weather app",
    developer: "Idris Agboola",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "weather app",
    developer: "Idris Agboola",
  });
});
app.get("/help", (req, res) => {
  res.render("help");
});
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
