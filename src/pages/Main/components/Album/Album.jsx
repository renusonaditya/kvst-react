import pic1Large from "./assets/Pic1-large.jpg";
import pic1Small from "./assets/Pic1-small.jpg";
import pic2Large from "./assets/Pic2-large.jpg";
import pic2Small from "./assets/Pic2-small.jpg";
import pic3Large from "./assets/Pic3-large.jpg";
import pic3Small from "./assets/Pic3-small.jpg";
import pic4Large from "./assets/Pic4-large.jpg";
import pic4Small from "./assets/Pic4-small.jpg";
import pic5Large from "./assets/Pic5-large.jpg";
import pic5Small from "./assets/Pic5-small.jpg";
import pic6Large from "./assets/Pic6-large.jpg";
import pic6Small from "./assets/Pic6-small.jpg";
import pic7Large from "./assets/Pic7-large.jpg";
import pic7Small from "./assets/Pic7-small.jpg";
import pic8Large from "./assets/Pic8-Large.jpg";
import pic8Small from "./assets/Pic8-small.jpg";
import pic9Large from "./assets/Pic9-large.jpg";
import pic9Small from "./assets/Pic9-small.jpg";
import pic10Large from "./assets/Pic10-large.jpg";
import pic10Small from "./assets/Pic10-small.jpg";

import "./Album.css";

export const Album = () => {
  return (
    <>
      <div id="templatemo_Album_panel">
        <div id="templatemo_Album_section">
          <ul>
            <li>
              <a href="javascript:void(0)">Photo Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Album_Photos">
        <div class="Album_pic">
          <a href={pic1Large} data-lightbox="my_gall">
            <img src={pic1Small} alt="pic1Small" />
          </a>
          <a href={pic2Large} data-lightbox="my_gall">
            <img src={pic2Small} alt="pic2Small" />
          </a>
          <a href={pic3Large} data-lightbox="my_gall">
            <img src={pic3Small} alt="pic3Small" />
          </a>
          <a href={pic4Large} data-lightbox="my_gall">
            <img src={pic4Small} alt="pic4Small" />
          </a>
          <a href={pic5Large} data-lightbox="my_gall">
            <img src={pic5Small} alt="pic5Small" />
          </a>
          <a href={pic6Large} data-lightbox="my_gall">
            <img src={pic6Small} alt="pic6Small" />
          </a>
          <a href={pic7Large} data-lightbox="my_gall">
            <img src={pic7Small} alt="pic7Small" />
          </a>
          <a href={pic8Large} data-lightbox="my_gall">
            <img src={pic8Small} alt="pic8Small" />
          </a>
          <a href={pic9Large} data-lightbox="my_gall">
            <img src={pic9Small} alt="pic9Small" />
          </a>
          <a href={pic10Large} data-lightbox="my_gall">
            <img src={pic10Small} alt="pic10Small" />
          </a>
        </div>
      </div>
      <div id="templatemo_vmore_panel">
        <div id="templatemo_vmore_section">
          <ul>
            <li>
              <a href="javascript:void(0)">View More</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
