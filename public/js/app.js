console.log("hhhhhhhhhhhhhhh");
alert("hello");
fetch("https://localhost:3000/weather").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});
