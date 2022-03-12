import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/cloudbank-2.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down-uncloak.svg";
import ProfilePix from "../../../assets/images/ProfilePix.png";

import "./styles.scss";

const DashboardHeader = () => {
  return (
    <header className='dash_header'>
      <div className='wrapper'>
        <div className='brand-logo'>
          <Logo />
        </div>

        <div className='nav-links'>
          <ul>
            <li>
              <NavLink to='/login'>Home</NavLink>
            </li>

            <li>
              <NavLink to='/signup' className='signup-btn'>
                Assets
              </NavLink>
            </li>

            <li>
              <NavLink to='/signup' className='signup-btn'>
                Reports
              </NavLink>
            </li>

            <li>
              <NavLink to='/signup' className='signup-btn'>
                Jobs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='profile-wrapper'>
          <div>
            <img src={ProfilePix} alt='' />
          </div>
          <div>
            <img src={ProfilePix} alt='' />
          </div>
          <div className='profile-info-wrapper'>
            <img src={ProfilePix} alt='' />
            <div className='profile-name'>
              <h4>Austin Robertson</h4>
              <p>Marketing Administrator</p>
            </div>
            <ArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
