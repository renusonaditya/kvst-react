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

const parseToHTML = (content) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

const SideContent = ({ title, subtitle }) => {
  return (
    <div className={subtitleClassName}>
      <label className={titleClassName}>{title}</label>
      {parseToHTML(subtitle)}
    </div>
  );
};

const Description = ({ description }) => {
  return <div className={descriptionClassName}>{parseToHTML(description)}</div>;
};

export const ContentCard = ({ isInversedContentCard, cardData }) => {
  const { image, title, subtitle, description, scrollId } = cardData;
  return (
    <div className={rootClassName} id={scrollId}>
      <div className={imageAndContentClassName}>
        {!isInversedContentCard && <Image cardImage={image} />}
        <SideContent title={title} subtitle={subtitle} />
        {isInversedContentCard && <Image cardImage={image} />}
      </div>
      <Description description={description} />
    </div>
  );
};
