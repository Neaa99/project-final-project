import React from "react";
import { useDispatch } from 'react-redux'
import { account } from '../../reducers/account'
import { Link } from 'react-router-dom'



const BurgerMenu = () => {

  const dispatch = useDispatch()

    return (
        <nav className="meny">
             <ul class="sideMenu" id="sideMenu">
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
              
                <div class="closeMenu">

                </div>
                
            </ul>
        </nav>

        
    )
}

export default BurgerMenu