import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { account } from 'reducers/account'

const Sidebar = () => {

  const dispatch = useDispatch()
  
  return (
    <article className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <Link to="/authorized/profile"><li className="sidebar-list-item">Profile</li></Link>
          <Link to="/feed"><li className="sidebar-list-item">Feed</li></Link>
          <li 
            className="sidebar-list-item" 
            onClick={() => {
              dispatch(account.actions.logOut())
              localStorage.removeItem('user')
            }}>Log out</li>
        </ul>
      </nav>

    </article> 

  )
}

export default Sidebar 