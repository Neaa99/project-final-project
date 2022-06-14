import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProfileForm from './ProfileForm'

import { account } from '../../reducers/account'

import { EDIT_USER } from '../../utils/constants'

const Profile = () => {
  const user = useSelector(store => store.account)

  const [fullName, setFullName] = useState(user.fullName)
  const [age, setAge] = useState(user.age)
  const [superhero, setSuperhero] = useState(user.superhero)
  const [movie, setMovie] = useState(user.movie)

  const dispatch = useDispatch()

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
    <section>
       <div className="title-container">
                <h3 className="main-title">Profile</h3>
            </div>
     
      <h3 className="welcome">{`Welcome ${user.fullName}`}</h3>
      <div className="profile-info-and-form">
        <div className="profile-info">
            <p><span>Username:</span> {`${user.username}`}</p>
            <p><span>Email:</span> {`${user.email}`}</p>
              {user.fullName && 
                <p><span>Name:</span> {`${user.fullName}`}</p>
              }
              {user.age && 
                <p><span>Age:</span> {`${user.age}`}</p>
              }
              {/* {user.location &&  */}
                <p><span>Super Hero Name:</span> {`${user.superhero}`}</p>
              {/* } */}
              {/* {user.movie &&  */}
                <p><span>Favorite Marvel movie:</span> {`${user.movie}`}</p>
              {/* } */}
        </div>

        <div className="profile-form">
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
          />
        </div>
      </div>
    </section>
  )
}

export default Profile