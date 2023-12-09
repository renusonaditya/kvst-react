import React from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import lingam from "./assets/lingam.png";
import cropped from "./assets/cropped.gif";
import rodLower from "./assets/rod-lower.png";
import rodUpper from "./assets/rod-upper.png";

export const Header = () => {
  return (
    <div id="templatemo_header_panel">
      <div id="templatemo_title_section">
        <h1>
          WELCOME TO
          <br />
          SRI KASHI VISHWANATH SWAMY TEMPLE, MEDCHAL
          <br />
          OFFICIAL WEBSITE
        </h1>
      </div>
      <img src={logo} id="logo" />
      <img src={cropped} id="flag" />
      <img src={rodUpper} id="rod" />
      <img src={rodLower} id="rod2" />
      <img src={lingam} id="Lingam" />
    </div>
  );
};
