const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const weather = require("./utils/weather");
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

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) return res.send({ msg: "address is required in the URL" });
  weather(address, (error, { name: location, main } = {}) => {
    if (error) {
      return res.send({ msg: error });
    } else {
      res.send({
        location,
        pressure: main.pressure,
        temperature: main.temp,
        humidity: main.humidity,
      });
    }
  });
});

app.get("/product", (req, res) => {
  const { search, rating } = req.query;
  if (!search) return res.send({ msg: "search is required in the URL" });
  console.log(req.query);
  res.send({ product: [] });
});

app.get("/help/*", (req, res) => {
  res.render("NotFound", {
    article: "Help Article",
    developer: "Loniel Messi",
  });
});

app.get("*", (req, res) => {
  res.render("NotFound", {
    article: "Page",
    developer: "Loniel Messi",
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
