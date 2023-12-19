import React from "react";
import { cards } from "./config/cards";
import { ContentCard } from "../../components";

import "./About.css";


export const About = () => {
  console.info(cards);
  return <>
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
  </>
};
