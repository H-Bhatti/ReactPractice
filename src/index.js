import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Hammad Bhatti";
const randomImage1 = "https://picsum.photos/300/200";
const randomImage2 = "https://picsum.photos/300/300";
const randomImage3 = "https://picsum.photos/300/400";
const link = "https://github.com/H-Bhatti";

const currentDate = new Date();
console.log(currentDate.toLocaleString());
ReactDOM.render(
  <>
    <h1 className="heading">My name is {name} click on the third image</h1>
    <div className="timeDiv">
      <p>Date is:: {currentDate.toLocaleDateString()}</p>
      <p>Time is : {currentDate.toLocaleTimeString()}</p>
    </div>
    <div className="imgDiv">
      <img src={randomImage1} alt="random Image" className="img" />
      <img src={randomImage2} alt="random Image" className="img" />
      <a href={link} target="_newTab">
        <img src={randomImage3} alt="random Image" className="img" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
