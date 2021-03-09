const express = require("express");
const app = express();

//route
app.get("/", (req, res) => {
  res.send("<h1>Weather App!!!</h1>");
});
app.get("/about", (req, res) => {
  res.send([
    {
      name: "kekere",
      age: 12,
    },
    {
      name: "basit",
      age: 30,
    },
  ]);
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
