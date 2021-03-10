const form = document.querySelector("#form");
const input = document.querySelector("#input");
const message1 = document.querySelector("#error");
const message2 = document.querySelector("#message");

const axios = (location) => {
  message1.textContent = "loading .....";
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        console.log(data);
        message1.textContent = `The city of `;
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
