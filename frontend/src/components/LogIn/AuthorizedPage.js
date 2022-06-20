import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Sidebar from 'components/Headers/Sidebar'
import Header from 'components/Headers/Header'

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
      
    </>
  )
}

export default AuthorizedPage 