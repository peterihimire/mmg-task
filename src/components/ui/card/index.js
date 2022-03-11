import React from "react";
import "./styles.scss";
// import Link from "next/link";

const Card = ({ id, title, info, src, alt }) => {
  return (
    <div className={`card`}>
      <div className={`cardImage`}>
        <img loading='lazy' alt={alt} src={src} />
      </div>
      <div className={`cardTitle`}>
        <h3>{title}</h3>
      </div>
      <div className={`cardInfo`}>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Card;
