import React, { useState, useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { account } from '../../reducers/account'

import { API_URL, SIGNIN } from '../../utils/constants'

const LoginForm = () => {
  const [username, setUsername] = useState('')
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

  const handleOnClick = (action) => {
    dispatch(action)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }

    fetch(API_URL(SIGNIN), options)
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
      <h1 className="begin-header mobile-hide" tabIndex="0">Avengers, assemble!</h1>
      <section className="landingpage-section">
        <h3 tabIndex="0">Welcome back! 
          <br></br>Log in here</h3>
        <form className="form" onSubmit={onFormSubmit}>
          <label htmlFor="username" tabIndex="0">Username:</label>
          <input 
            tabIndex="0"
            className="input" 
            type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} 
          />
          <label htmlFor="password" tabIndex="0">Password:</label>
          <input 
            tabIndex="0"
            className="input" 
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
          />
          {error && <p className="error-msg">{error.message}</p>}
          <button className="btn custom-btn" type="submit" tabIndex="0">Log in</button>
        </form>
        <div>
          <p className='not-member' tabIndex="0"> Not yet a member? </p>
          <button className="btn custom-btn create-account-btn" onClick={() => handleOnClick(account.actions.showSignupForm(true))} tabIndex="0"> 
            Create an account
          </button>
        </div>
      </section>
    </div>
  )
}
export default LoginForm