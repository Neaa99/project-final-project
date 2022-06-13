import React from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Hamburger from "hamburger-react";

import { useDispatch } from 'react-redux'
import { account } from "reducers/account";

import { BackIcon } from "./BackIcon";
const sideMenu = document.querySelector(".sideMenu");
const closeMenu = document.querySelector(".closeMenu");

const Header = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
      };

      // let className = 'menu'
      //     if (this.props.isActive) {
      //       className += 'menu-active'
      //    } else {
      //      className += 'menu-close'
      //    }

    return(
        <header>
            <div className="header">
                <button className="backLink" onClick={onBackButtonClick}>
                   <BackIcon />
                </button>
                <Hamburger 
                  direction="left"
                  size={30}
                  onToggle={toggle => {
                    if (toggle) {
                      console.log('Open')
                      sideMenu.style.display = "flex";
                      sideMenu.style.top = "0";
                      closeMenu.style.display = "block";

                      

                    } else {
                      console.log('Close')
                      sideMenu.style.top = "-150%";
                      closeMenu.style.display = "none";
                    }
                  }}/>
                
                <Link to="/authorized/profile">
                  <p className="header-list-item">Profile</p>
                </Link>
                <Link to="/feed">
                  <p className="header-list-item">Feed</p>
                </Link>
                <p className="header-list-item" 
                    onClick={() => {
                      dispatch(account.actions.logOut())
                      localStorage.removeItem('user')
                    }}>Log out
                </p>
            </div>
        </header>
    )
}

export default Header
