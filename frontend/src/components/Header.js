import React from "react";
import { NavLink } from 'react-router-dom'

import { BackIcon } from "./BackIcon";
import BurgerMenu from "./BurgerMenu";

const Header = () => {


    return(
        <header>
            <div className="header">
            <BurgerMenu />
                <NavLink class="backLink" to='/feed'>
                   <BackIcon />
                </NavLink>
                
                

            </div>
        </header>
    )
}

export default Header
