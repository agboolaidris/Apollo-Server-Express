const form = document.querySelector("#form");
const input = document.querySelector("#input");
const message1 = document.querySelector("#error");
const message2 = document.querySelector("#message");

const axios = (location) => {
  message1.textContent = "loading .....";
  message2.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.msg;
        message2.textContent = data.location;
      }
    });
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  axios(location);
});
