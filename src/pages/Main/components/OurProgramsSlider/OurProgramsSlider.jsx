import "./OurProgramsSlider.css";
import slider from "./assets/slider.png";
export const OurProgramsSlider = () => {
  return (
    <div id="templatemo_oslide">
      <div id="templatemo_content_our_prog">
        <div class="templatemo_our_prog_section">
          <img src={slider} id="slider" alt="oslider" />
          <img src={slider} id="slider2" alt="oslider2" />
          <img src={slider} id="slider3" alt="oslider3" />
        </div>
      </div>
    </div>
  );
};
