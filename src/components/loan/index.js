import React from "react";
// import ProfilePix from "../../assets/images/ProfilePix.png";
import Hero from "./hero";
import HomeContent from "./homeContent";
import "./styles.scss";

const loanPage = () => {
  return (
    <div className='homepage'>
      <div className='wrapper'>
        <Hero />
        <HomeContent />
      </div>
    </div>
  );
};

export default loanPage;
