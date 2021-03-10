const form = document.querySelector("#form");
const input = document.querySelector("#input");
const error = document.querySelector("#error");
const message = document.querySelector("#message");

const axios = (location) => {
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        error.textContent = data.error;
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  axios(location);
});
