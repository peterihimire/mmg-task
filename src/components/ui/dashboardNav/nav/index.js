import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logout } from "../../../../assets/images/turnoff.svg";
import { ReactComponent as Logo } from "../../../../assets/images/cloudbank-1.svg";
import { ReactComponent as Menu } from "../../../../assets/images/menu.svg";
import { ReactComponent as Send } from "../../../../assets/images/send.svg";
import { ReactComponent as Investment } from "../../../../assets/images/investment.svg";
import { ReactComponent as Loan } from "../../../../assets/images/loan-fill.svg";
import { ReactComponent as Card } from "../../../../assets/images/card-face.svg";
import { ReactComponent as Transaction } from "../../../../assets/images/bill.svg";
import { ReactComponent as Market } from "../../../../assets/images/market.svg";
import { ReactComponent as Settings } from "../../../../assets/images/settings-line.svg";

import "./styles.scss";

const Nav = () => {
  return (
    <nav className='nav' id='navbar'>
      <div className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <ul className='navLinks'>
        <li>
          <NavLink
            to='/'
            className='dashLink'
            activeClassName='active'
            exact={true}
          >
            <Menu />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/send-money'
            className='dashLink'
            activeClassName='active'
          >
            <Send />
            <span>Send Money</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/investment'
            className='dashLink'
            activeClassName='active'
          >
            <Investment />
            <span>Investment</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/loan' className='dashLink' activeClassName='active'>
            <Loan />
            <span>Loan</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/cards' className='dashLink' activeClassName='active'>
            <Card />
            <span>Cards</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/transaction'
            className='dashLink'
            activeClassName='active'
          >
            <Transaction />
            <span>Transaction</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/marketplace'
            className='dashLink'
            activeClassName='active'
          >
            <Market />
            <span>Marketplace</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className='dashLink' activeClassName='active'>
            <Settings />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className={`navLogout`}>
        <Logout />
        <button
          className='logout'
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
