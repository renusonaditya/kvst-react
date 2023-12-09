import shiva from "./assets/Shiva.png";
import aboutTemple from "./assets/about _temple.jpg";

import "./ShivaImage.css";

export const ShivaImage = () => {
  return (
    <div class="shiva-template">
      <div id="templatemo_shiva">
        <img src={shiva} id="Shiva" alt="shiva" />
      </div>
      <div id="abt_tpl">
        <img src={aboutTemple} id="abttpl" alt="about-temple" />
      </div>
    </div>
  );
};
