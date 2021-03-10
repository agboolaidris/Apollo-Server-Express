const path = require("path");
const express = require("express");
const app = express();

//route
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
