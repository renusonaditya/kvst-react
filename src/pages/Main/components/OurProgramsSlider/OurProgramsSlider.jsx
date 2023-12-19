import "./OurProgramsSlider.css";
import slider5 from "./assets/slider_5.png";
import slider6 from "./assets/slider_6.png";
import slider7 from "./assets/slider_7.png";

export const OurProgramsSlider = () => {
  return (
    <div id="templatemo_oslide">
      <div id="templatemo_content_our_prog">
        <div class="templatemo_our_prog_section">
          <img src={slider5} id="slider" alt="oslider1" />
          <img src={slider6} id="slider2" alt="oslider2" />
          <img src={slider7} id="slider3" alt="oslider3" />
        </div>
      </div>
    </div>
  );
};
