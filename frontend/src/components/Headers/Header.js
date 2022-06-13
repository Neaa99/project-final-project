import React from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { account } from "reducers/account";

import { BackIcon } from "./BackIcon";

const Header = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
      };

    return(
        <header>
            <div className="header">
                <button className="backLink" onClick={onBackButtonClick}>
                   <BackIcon />
                </button>
                
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
