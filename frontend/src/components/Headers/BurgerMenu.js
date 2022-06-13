import React from "react";
import { useDispatch } from 'react-redux'
import { account } from '../../reducers/account'
import { Link } from 'react-router-dom'

import { BurgerIcon } from "./BurgerIcon";

const BurgerMenu = () => {

  const dispatch = useDispatch()

    return (
        <nav className="meny">
            <button className="burger-btn">
                <BurgerIcon />
            </button>
            <ul>
            <Link to="/authorized/profile"><li>Profile</li></Link>
            <Link to="/feed"><li>Feed</li></Link>
                <li 
                     
                    onClick={() => {
                    dispatch(account.actions.logOut())
                    localStorage.removeItem('user')
                    }}>Log out</li>
            </ul>
        </nav>

        
    )
}

export default BurgerMenu