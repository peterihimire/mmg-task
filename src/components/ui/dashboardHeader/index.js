import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboardNav";
import Logo from "../../../assets/images/cloudbank-2.svg";

import "./styles.scss";



const Header = ({ isOpen, clicked }) => {
  const [isDropOpen, setDropOpen] = useState(false);

  const [bgChange, setBgChange] = useState(false);


  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);


  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='hamburgerBtn'>
          <button
            type='button'
            aria-label='navigation button'
            onClick={clicked}
            className={`hamburger hamburger--spring ${
              isOpen ? "is-active" : ""
            }`}
          >
            <span className='hamburger-box'>
              <span
                className={`${"hamburger-inner  hamburger-dashboard"}`}
              ></span>
            </span>
          </button>
        </div>

        <Nav
          bgChange={bgChange}
          isDrop={isDropOpen}
          isOpen={isOpen}
          clicked={(payload) => dropHandler(payload)}
        />

        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>
        <div className='empty-div'></div>
      </div>
    </header>
  );
};

export default Header;
