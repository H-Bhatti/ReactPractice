import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const name = "Hammad Bhatti";
// const randomImage1 = "https://picsum.photos/300/200";
// const randomImage2 = "https://picsum.photos/300/300";
// const randomImage3 = "https://picsum.photos/300/400";
// const link = "https://github.com/H-Bhatti";

const currentDate = new Date().getHours();
const inlineCSS = {
  color: "Black",
};

function Greting(currentDate) {
  if (currentDate >= 1 && currentDate <= 11) {
    inlineCSS.color = "green";
    return "Good Morning";
  }
  if (currentDate >= 12 && currentDate <= 19) {
    inlineCSS.color = "Blue";
    return "Good Evening";
  }
  inlineCSS.color = "red";
  return "Good Night";
}

ReactDOM.render(
  <>
    <h1 className="heading">
      AYYYYYy yOOOOOOO, <span style={inlineCSS}>{Greting(currentDate)}</span>
    </h1>
  </>,
  document.getElementById("root")
);
