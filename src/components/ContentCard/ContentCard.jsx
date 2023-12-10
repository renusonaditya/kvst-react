import React from "react";
import "./ContentCard.scss";

const rootClassName = "content-card";
const imageAndContentClassName = rootClassName + "__image-and-content";
const descriptionClassName = rootClassName + "__description";
const sideContentClassName = imageAndContentClassName + "__side-content";
const imageClassName = imageAndContentClassName + "__image";
const titleClassName = sideContentClassName + "__title";
const subtitleClassName = sideContentClassName + "__subtitle";

const Image = ({ cardImage }) => {
  return <img src={cardImage} alt="history" className={imageClassName} />;
};

const SideContent = ({ title, subtitle }) => {
  return (
    <div className={sideContentClassName}>
      <label className={titleClassName}>{title}</label>
      <div className={subtitleClassName}>{subtitle}</div>
    </div>
  );
};

const Description = ({ description }) => {
  const { title, subtitle } = description;
  return (
    <div className={descriptionClassName}>
      <label className={titleClassName}>{title}</label>
      <div className={subtitleClassName}>{subtitle}</div>
    </div>
  );
};

export const ContentCard = ({ isInversedContentCard, cardData }) => {
  console.info(cardData);
  const { image, title, subtitle, description } = cardData;
  return (
    <div className={rootClassName}>
      <div className={imageAndContentClassName}>
        {!isInversedContentCard && <Image image={image} />}
        {/* <SideContent title={title} subtitle={subtitle} /> */}
        {isInversedContentCard && <Image image={image} />}
      </div>
      {/* <Description description={description} /> */}
    </div>
  );
};
