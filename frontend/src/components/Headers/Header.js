import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Hamburger from "hamburger-react";

import { account } from "reducers/account";
import { BackIcon } from "./BackIcon";


const Header = (props) => {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
      };

    const btnHandler = () => {
      setActive(!active)
    }

    return(
        <header>
            <div className="header">
              <div className="top-header">
                <Hamburger 
                    direction="left"
                    size={30}
                    className="hamburger"
                    onToggle={()=> btnHandler()}
                    />

                    <h1 className="main-title">{props.title}</h1>

                  <button className="backLink" onClick={onBackButtonClick}>
                    <BackIcon />
                  </button>
              </div>
            
                
                
            <nav className="meny">
              <ul className={active ? "sideMenu-open" : "sideMenu-closed"}>
              <div className="header-list">
                    <Link to="/authorized/profile">
                      <p className="header-list-item bold">Profile</p>
                    </Link>
                    <Link to="/feed" onClick={btnHandler}>
                      <p className="header-list-item">Feed</p>
                    </Link>
                    <Link to="/feed/categories">
                      <p className="header-list-item">Categories</p>
                    </Link>
                     <Link to="/feed/tags">
                      <p className="header-list-item">Tags</p>
                    </Link>
                    <Link to="/feed/movies">
                      <p className="header-list-item">Movies</p>
                    </Link>
                    <Link to="/feed/series">
                      <p className="header-list-item">Series</p>
                    </Link>
                    <Link to="/feed/oneshot">
                      <p className="header-list-item">Oneshots</p>
                    </Link>
                    <p className="header-list-item bold" 
                        onClick={() => {
                          dispatch(account.actions.logOut())
                          localStorage.removeItem('user')
                        }}>Log out
                    </p>
                  </div>
                
                  {/* <div className={active ? "closeMenu-open" : "closeMenu-closed"}>
                  </div>  */}
              </ul>
          </nav>
            </div>
        </header>
    )
}

export default Header
