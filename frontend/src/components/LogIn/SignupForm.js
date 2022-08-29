import React, { useState, useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { account } from '../../reducers/account'

import { API_URL, SIGNUP } from '../../utils/constants'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const accessToken = useSelector(store => store.account.accessToken)
  const error = useSelector(store => store.account.errors)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
        navigate('/authorized')
    }
  }, [accessToken, history])

  const handleOnClick = () => {
    dispatch(account.actions.showSignupForm(false))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }

    fetch(API_URL(SIGNUP), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(account.actions.setID(data.id))
            dispatch(account.actions.setUsername(data.username))
            dispatch(account.actions.setEmail(data.email))
            dispatch(account.actions.setAccessToken(data.accessToken))
            dispatch(account.actions.setProfileInfo(data))
            dispatch(account.actions.setErrors(null))

            localStorage.setItem('user', JSON.stringify({
              id: data.id,
              username: data.username,
              accessToken: data.accessToken,
              email: data.email,
              fullName: data.fullName,
              age: data.age,
              superhero: data.superhero,
              movie: data.movie
            }))
          })
        } else {
          dispatch(account.actions.setErrors(data))
        }
      })
  }

  return (
    <div className="landingpage-section-wrapper">
      <h1 className="begin-header mobile-hide" tabIndex="0">Begin your Marvel journey here...</h1>
      <section className="landingpage-section signup-section">
        <h3 tabIndex="0">Sign Up here</h3>
        <form className="form signup-form" onSubmit={onFormSubmit}>
          <label htmlFor="username" tabIndex="0">Username:</label>
          <input 
            tabIndex="0"
            className="input signup-username-input" 
            type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} 
          />
          <label htmlFor="Email" tabIndex="0">Email:</label>
          <input 
            tabIndex="0"
            className="input signup-Email-input" 
            type="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
          />
          <label htmlFor="password" tabIndex="0">Password:</label>
          <input 
            tabIndex="0"
            className="input signup-password-input" 
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
          />
          {error && <p className="error-msg">{error.message}</p>}
          <button className="btn custom-btn signup-button" type="submit" tabIndex="0">Sign Up</button>
        </form>
        <div>
          <p tabIndex="0"> Already a member? </p>
          <button
            tabIndex="0"   
            className="btn custom-btn" 
            onClick={handleOnClick}
          > 
            Log in here!
          </button>
        </div>
      </section>
    </div>

  )
}

export default SignupForm 