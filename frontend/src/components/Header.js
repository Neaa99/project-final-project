import React from "react";
import { NavLink } from 'react-router-dom'

import { BackIcon } from "./BackIcon";

const Header = () => {

    return(
        <header>
            <div className="header">
            <NavLink class="backLink" to='/feed'>
                   <BackIcon />
                </NavLink>

            </div>
        </header>
    )
}

export default Header
