import React from "react";
import { cards } from "./config/cards";
import { ContentCard } from "../../components";

import "./About.scss";


export const About = () => {
  return <div className="about-page">
    {
      cards.map(
        (eachCard, index) => {
          const isInvertedContentCard = index % 2;
          return <ContentCard
            isInversedContentCard={isInvertedContentCard}
            cardData={eachCard}
          />
        }
      )
    }
  </div>
};
