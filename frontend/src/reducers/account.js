import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('user') ? { 
  AuthId: JSON.parse(localStorage.getItem('user')).AuthId,
  username: JSON.parse(localStorage.getItem('user')).username,
  email: JSON.parse(localStorage.getItem('user')).email,
  fullName: JSON.parse(localStorage.getItem('user')).fullName,
  age: JSON.parse(localStorage.getItem('user')).age,
  superhero: JSON.parse(localStorage.getItem('user')).superhero,
  movie: JSON.parse(localStorage.getItem('user')).movie,
  accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
  errors: null, 
  signup: false
}
:
{
  AuthId: null,
  username: null,
  email: null,
  fullName: null,
  age: null,
  superhero: null,
  movie: null,
  accessToken: null,
  errors: null, 
  signup: false
}

export const account = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setID: (store, action) => {
      store.AuthId = action.payload
    },

    setUsername: (store, action) => {
      store.username = action.payload
    },

    setEmail: (store, action) => {
      store.email = action.payload
    },

    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },

    setProfileInfo: (store, action) => {
      store.fullName = action.payload.fullName
      store.age = action.payload.age
      store.superhero = action.payload.superhero
      store.movie = action.payload.movie
    },

    setErrors: (store, action) => {
      store.errors = action.payload
    },

    showSignupForm: (store, action) => {
      store.signup = action.payload
    },
    
    logIn: (store, action) => {
      store.logedIn = action.payload
    },

    logOut: (store, action) => {
      store.accessToken = null
      store.AuthId = null
      store.username = null
      store.email = null
    }
  }
})