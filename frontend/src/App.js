import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import LandingPage from 'components/LogIn/LandingPage'
import AuthorizedPage from 'components/LogIn/AuthorizedPage'
import Profile from 'components/Profile/Profile'
import Feed from 'components/MainComponents/Feed'
import Details from 'components/MainComponents/Details'
import Tags from 'components/MainComponents/Tags'
import Category from 'components/MainComponents/Category'
import AllTags from 'components/MainComponents/AllTags'
import AllCategories from 'components/MainComponents/AllCategories'
import NotFound from 'components/Headers/NotFound'
import AllMovies from 'components/MainComponents/AllMovies'
import AllSeries from 'components/MainComponents/AllSeries'
import AllOneshot from 'components/MainComponents/AllOneshot'
import Welcome from 'components/LogIn/Welcome'

import { account } from './reducers/account'

const reducer = combineReducers({
  account: account.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/authorized" element={<><AuthorizedPage /><Welcome /></>}></Route>
            <Route path="/authorized/profile" element={<><AuthorizedPage /><Profile /></>}></Route>
            <Route path="/feed" element={<><AuthorizedPage /><Feed /></>}></Route>
            <Route path='/feed/:title' element={<><AuthorizedPage /><Details /></>}></Route>
            <Route path='/feed/tags/:tags' element={<><AuthorizedPage /><Tags /></>}></Route>
            <Route path='/feed/categories/:category' element={<><AuthorizedPage /><Category /></>}></Route>
            <Route path='/feed/tags' element={<><AuthorizedPage /><AllTags /></>}></Route>
            <Route path='/feed/categories' element={<><AuthorizedPage /><AllCategories /></>}></Route>
            <Route path='/feed/movies' element={<><AuthorizedPage /><AllMovies /></>}></Route>
            <Route path='/feed/series' element={<><AuthorizedPage /><AllSeries /></>}></Route>
            <Route path='/feed/oneshot' element={<><AuthorizedPage /><AllOneshot /></>}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="*" element={<Navigate to="/404" replace />}></Route>
          </Routes>
        </main>
      </Provider>
    </BrowserRouter>
  )
}