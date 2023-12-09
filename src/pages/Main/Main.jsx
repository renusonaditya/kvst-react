import React from "react";
import {
  Album,
  Banner,
  ContentSlider,
  NewsPanel,
  OurPrograms,
  OurProgramsSlider,
  ShivaImage,
} from "./components";

import "./Main.css";

export const Main = () => {
  return (
    <>
      <Banner />
      <NewsPanel />
      <ContentSlider />
      <ShivaImage />
      <OurPrograms />
      <OurProgramsSlider />
      <Album />
    </>
  );
};
