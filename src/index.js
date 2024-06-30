import React from "react";
import ReactDOM from "react-dom";

const name = "Hammad Bhatti";

const currentDate = new Date();
console.log(currentDate.toLocaleString());
ReactDOM.render(
  <>
    <h1>My naame is {name} </h1>
    <p>Date is:: {currentDate.toLocaleDateString()}</p>
    <p>Time is : {currentDate.toLocaleTimeString()}</p>
  </>,
  document.getElementById("root")
);
