import React from "react";
import ReactDOM from "react-dom";

const name = "Hammad Bhatti";
const randomImage1 = "https://picsum.photos/200/200";
const randomImage2 = "https://picsum.photos/300/300";
const randomImage3 = "https://picsum.photos/200/300";
const link = "https://github.com/H-Bhatti";

const currentDate = new Date();
console.log(currentDate.toLocaleString());
ReactDOM.render(
  <>
    <h1 contentEditable="true">My naame is {name} click on the third image</h1>
    <p>Date is:: {currentDate.toLocaleDateString()}</p>
    <p>Time is : {currentDate.toLocaleTimeString()}</p>
    <img src={randomImage1} alt="random Image" />
    <img src={randomImage2} alt="random Image" />
    <a href={link} target="_newTab">
      <img src={randomImage3} alt="random Image" />
    </a>
  </>,
  document.getElementById("root")
);
