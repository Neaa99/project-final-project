import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Sidebar from 'components/Sidebar'
import Header from 'components/Header'

const AuthorizedPage = () => {

  const accessToken = useSelector(store => store.account.accessToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
        navigate('/');
    }
  }, [accessToken, history]);

  return (
    <>
      <Header />
      {/* <Sidebar /> */}
    </>
  )
}

export default AuthorizedPage 