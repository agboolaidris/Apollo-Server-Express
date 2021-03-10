const axios = require("axios");

const weather = (city, callback) => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e96146d3a186a7f0d764b4cd78d4e335`;
  axios
    .get(URL)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      const data = err.response?.data.message;
      if (!data) {
        callback("enable to connect to the server");
      } else {
        callback(data);
      }
    });
};

module.exports = weather;
