const path = require("path");
const express = require("express");
const app = express();

console.log(path.join(__dirname, "../public"));
//route
app.use(express.static(path.join(__dirname, "../public")));
app.use("/help", express.static(path.join(__dirname, "../public/help.html")));
app.use("/about", express.static(path.join(__dirname, "../public/about.html")));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
