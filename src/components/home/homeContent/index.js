import React from "react";
import HomeCard from "../../ui/card";
import "./styles.scss";

import LoanData from "./LoanData";

const homePage = () => {
  console.log(LoanData);
  return (
    <div className='home-content'>
      <div className='grid'>
        {LoanData.map((loan, index) => {
          return (
            <HomeCard
              key={index}
              id={1}
              title={loan.title}
              info={loan.info}
              src={loan.image}
              alt={"image"}
            />
          );
        })}
        {/* <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          // src={"../../../assets/images/ProfilePix.png"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        />

        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          // src={"../../../assets/images/ProfilePix.png"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        />
        <HomeCard
          key={1}
          id={1}
          title={"One Month Loan"}
          info={"Access funds for personal upkeep for 30 days only"}
          src={Pix}
          alt={"image"}
        /> */}
      </div>
    </div>
  );
};

export default homePage;
