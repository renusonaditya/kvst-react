import React from "react";
import slider from "./assets/slider.png";
import "./ContentSlider.css";

export const ContentSlider = () => {
  return (
    <div id="templatemo_content_slider">
      <div class="templatemo_slider_section">
        <img src={slider} id="slider" alt="slider" />
        <img src={slider} id="slider2" alt="slider2" />
        <img src={slider} id="slider3" alt="slider3" />
        <img src={slider} id="slider4" alt="slider4" />
      </div>
    </div>
  );
};
