import React, { Component } from "react";
import "./style.css";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

class DarkMode extends Component {
  render() {
    return (
      <>
        <div className="">
          <div>DarkMode</div>
          <button id="btn">Switch</button>
        </div>
      </>
    );
  }
}

export default DarkMode;
