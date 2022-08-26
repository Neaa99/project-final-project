import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import ProfileForm from './ProfileForm'
import Footer from 'components/MainComponents/Footer'
import { account } from '../../reducers/account'
import { EDIT_USER } from '../../utils/constants'

const Profile = () => {
  const user = useSelector(store => store.account)

  const [fullName, setFullName] = useState(user.fullName)
  const [age, setAge] = useState(user.age)
  const [superhero, setSuperhero] = useState(user.superhero)
  const [movie, setMovie] = useState(user.movie)

  const dispatch = useDispatch()

  const [active, setActive] = useState(false)

   const btnHandler = () => {
        setActive(!active)
      }

  const onFormSubmit = (event) => {
    event.preventDefault()
    
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.accessToken
      },
      body: JSON.stringify({ fullName: fullName, age: age, superhero: superhero, movie: movie })
    }

    fetch(EDIT_USER(user.id), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(account.actions.setProfileInfo(data.updateUser))

          localStorage.setItem('user', JSON.stringify({
            fullName: data.fullName,
            age: data.age,
            superhero: data.superhero,
            movie: data.movie
          }))
        } else {
          dispatch(account.actions.setErrors(data))
        }
      })
      .finally(() => {
        setFullName(user.fullName)
        setAge(user.age)
        setSuperhero(user.superhero)
        setMovie(user.movie)
      })
  }

  return (
    <section className="red-background">
        <div className="title-container">
        </div>
     
        <h1 className="welcome" tabIndex="0">Profile</h1>
        <div className="profile-info-and-form">
          <div className="profile-info">
              <p tabIndex="0"><span>Username:</span> {`${user.username}`}</p>
              <p tabIndex="0"><span>Email:</span> {`${user.email}`}</p>
                {user.fullName && 
                  <p tabIndex="0"><span>Name:</span> {`${user.fullName}`}</p>
                }
                {user.age && 
                  <p tabIndex="0"><span>Age:</span> {`${user.age}`}</p>
                }
                {user.superhero && 
                  <p tabIndex="0"><span>Superhero Name:</span> {`${user.superhero}`}</p>
                } 
                {user.movie && 
                  <p tabIndex="0"><span>Favorite Marvel movie:</span> {`${user.movie}`}</p>
                } 
          </div>

          <div className="btn-container">
          <button className="btn custom-btn" onClick={btnHandler}>
            {active ? "Close" : "Edith Profile"}
          </button>
          <Link to='/feed' className="btn custom-btn">
             <p>Explore</p>    
          </Link>
        </div>

        <div className={active ? "sideMenu-open" : "sideMenu-closed"}>
          <ProfileForm
            fullName={fullName}
            setFullName={setFullName}
            age={age}
            setAge={setAge}
            superhero={superhero}
            setSuperhero={setSuperhero}
            movie={movie}
            setMovie={setMovie}
            onFormSubmit={onFormSubmit}
            btnHandler={btnHandler}
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Profile