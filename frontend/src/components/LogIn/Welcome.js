import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Welcome = () => {

  const user = useSelector(store => store.account)

    return (
        <section className="red-background">
            <div className="title-container">
            </div>

            <h1 className="welcome" tabIndex="0">{user.superhero ? `Welcome ${user.superhero}` : `Welcome ${user.fullName}` ? !user.superhero : `Welcome`}</h1>
            <div className="welcome-container">
                <Link to="/authorized/profile" className='welcome-link' tabIndex="0">
                    <p className="welcome-link-item bold">Profile</p>
                </Link>

                <Link to="/feed" className='welcome-link' tabIndex="0">
                    <p className="welcome-link-item bold">Let's start exploring!</p>
                </Link>
            </div>
        </section>
    )
}

export default Welcome