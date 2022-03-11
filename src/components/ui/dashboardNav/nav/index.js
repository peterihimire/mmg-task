import React from "react";
import "./styles.scss";
// import Dropdown from "../dropdown";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/images/turnoff.svg";
// import Logout from "../../../../assets/images/turnoff.svg";
import { ReactComponent as Logo } from "../../../../assets/images/cloudbank-1.svg";

// import Menu from "../../../../assets/images/menu.svg";

import { ReactComponent as Menu } from "../../../../assets/images/menu.svg";
import { ReactComponent as Send } from "../../../../assets/images/send.svg";
import { ReactComponent as Investment } from "../../../../assets/images/investment.svg";
import { ReactComponent as Loan } from "../../../../assets/images/loan-fill.svg";
import { ReactComponent as Card } from "../../../../assets/images/card-face.svg";
import { ReactComponent as Transaction } from "../../../../assets/images/bill.svg";
import { ReactComponent as Market } from "../../../../assets/images/market.svg";
import { ReactComponent as Settings } from "../../../../assets/images/settings-line.svg";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);

  // const router = useRouter();

  // const crowdInvest = "/crowd-invest";
  // const orderConfirmation = "/order-confirmation";

  // useEffect(() => {
  //   openAbout(false);
  //   openServices(false);
  //   openIndustries(false);
  // }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isOpen) {
  //     openAbout(false);
  //     openServices(false);
  //     openIndustries(false);
  //   }
  // }, [isOpen]);

  return (
    // <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
    <nav className='nav' id='navbar'>
      <div className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <ul className='navLinks'>
        <li>
          <NavLink to='/dashboard' className='dashLink'>
            <Menu />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/crowd-invest' className='dashLink'>
            <Send />
            <span>Send Money</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/long-hold-investment' className='dashLink'>
            <Investment />
            <span>Investment</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/favourite' className='dashLink'>
            <Loan />
            <span>Loan</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/wallet' className='dashLink'>
            <Card />
            <span>Cards</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/my-portfolio' className='dashLink'>
            <Transaction />
            <span>Transaction</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-portfolio' className='dashLink'>
            <Market />
            <span>Marketplace</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-portfolio' className='dashLink'>
            <Settings />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className={`navLogout`}>
        <Logout />
        <button
        className="logout"
          // onClick={(e) => {
          //   e.preventDefault();
          //   router.push("/");
          // }}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
