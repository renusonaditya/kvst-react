import React from "react";
import "./PoojaCard.css";

export const PoojaCard = ({ data }) => {
  const { title, subtitle, rituals, scrollId } = data;
  return (
    <span id={scrollId}>
      <div class="Nitya_puja">{title}</div>
      <div class="Nitya_puja_list">{subtitle}</div>

      {rituals.map((eachRitual) => {
        const { title, content, image } = eachRitual;
        return (
          <div class="rituals-puja-card">
            <div class="image-box">
              <img src={image} id="Arch" alt="archana3" />
            </div>
            <div class="description-box">
              <div class="description-header">{title}</div>
              <div class="description-content">{content}</div>
            </div>
          </div>
        );
      })}
    </span>
  );
};
