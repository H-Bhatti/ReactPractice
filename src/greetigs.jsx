import React from "react";

const currentDate = new Date().getHours();
const inlineCSS = {
  color: "Black",
};

function Greting(currentDate) {
  if (currentDate >= 1 && currentDate <= 11) {
    inlineCSS.color = "green";
    return <span style={inlineCSS}>Good Morning</span>;
  }
  if (currentDate >= 12 && currentDate <= 19) {
    inlineCSS.color = "Blue";
    return <span style={inlineCSS}>Good Evening</span>;
  }
  inlineCSS.color = "red";
  return <span style={inlineCSS}>Good Night</span>;
}

export default Greting;
