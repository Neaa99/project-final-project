import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import LandingPage from './components/LandingPage'
import AuthorizedPage from './components/AuthorizedPage'
import Profile from './components/Profile'
import Feed from 'components/Feed'
import Details from 'components/Details'
import Tags from 'components/Tags'
import Category from 'components/Category'
import AllTags from 'components/AllTags'
import AllCategories from 'components/AllCategories'
import NotFound from 'components/NotFound'

import { account } from './reducers/account'
import Header from 'components/Header'

const reducer = combineReducers({
  account: account.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/authorized" element={<><AuthorizedPage /><Profile /></>}></Route>
            <Route path="/authorized/profile" element={<><AuthorizedPage /><Profile /></>}></Route>
            <Route exact path="/feed" element={<><AuthorizedPage /><Feed /></>}></Route>
            <Route exact path='/feed/:title' element={<><AuthorizedPage /><Details /></>}></Route>
            <Route path='/feed/tags/:tags' element={<><AuthorizedPage /><Tags /></>}></Route>
            <Route path='/feed/categories/:category' element={<><AuthorizedPage /><Category /></>}></Route>
            <Route path='/feed/tags' element={<><AuthorizedPage /><AllTags /></>}></Route>
            <Route path='/feed/categories' element={<><AuthorizedPage /><AllCategories /></>}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="*" element={<Navigate to="/404" replace />}></Route>
          </Routes>
        </main>
      </Provider>
    </BrowserRouter>
  )
}