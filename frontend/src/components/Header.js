import React from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { BackIcon } from "./BackIcon";
import BurgerMenu from "./BurgerMenu";

const Header = () => {

    const navigate = useNavigate();

    const onBackButtonClick = () => {
        // navigate(-1)
        navigate(-1);
      };

    return(
        <header>
            <div className="header">
            {/* <BurgerMenu /> */}
                <button class="backLink" onClick={onBackButtonClick}>
                   <BackIcon />
                </button>
                <Link to="/authorized/profile"><p className="sidebar-list-item">Profile</p></Link>
          <Link to="/feed"><p className="sidebar-list-item">Feed</p></Link>
          <p 
            className="sidebar-list-item" 
            onClick={() => {
              dispatch(account.actions.logOut())
              localStorage.removeItem('user')
            }}>Log out</p>
                

            </div>
        </header>
    )
}

export default Header
