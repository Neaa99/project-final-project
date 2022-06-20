import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    {/* Add here of you want something to show on everypage, eg: header */}
    </>
  )
}

export default AuthorizedPage 