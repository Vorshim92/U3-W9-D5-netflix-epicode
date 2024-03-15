import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
window.onload = () => {
  const sliders = document.querySelectorAll(".slider");
  const divSliders = document.querySelectorAll(".test");
  const indicators = document.querySelectorAll(".indicator");
  let baseSliderWidth = sliders.offsetWidth;
  let activeIndex = 0;

  function updateIndicators(index) {
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    let newActiveIndicator = indicators[index];
    newActiveIndicator.classList.add("active");
  }

  // Scroll Left button
  divSliders.forEach((div) => {
    const btnLeft = div.querySelector(".moveLeft");
    btnLeft.addEventListener("click", function (e) {
      let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
      let scrollDistance = movieWidth * 6;
      div.querySelector(".slider").scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });
      activeIndex = (activeIndex - 1) % 3;
      console.log(activeIndex);
      updateIndicators(activeIndex);
    });
  });

  // Scroll Right button
  divSliders.forEach((div) => {
    const btnRight = div.querySelector(".moveRight");
    btnRight.addEventListener("click", function (e) {
      let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
      let scrollDistance = movieWidth * 6;
      console.log(`movieWidth = ${movieWidth}`);
      console.log(`scrolling right ${scrollDistance}`);
      console.log(btnRight);
      console.log(div.querySelector(".slider"));
      // se si è nell'ultima pagina
      if (activeIndex == 2) {
        div.querySelector(".slider").scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        activeIndex = 0;
        updateIndicators(activeIndex);
      } else {
        div.querySelector(".slider").scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        activeIndex = (activeIndex + 1) % 3;
        console.log(activeIndex);
        updateIndicators(activeIndex);
      }
    });
  });
};
