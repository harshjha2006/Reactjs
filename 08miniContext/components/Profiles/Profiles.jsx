import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import UserContext from '../../context/UserContext'

function Profiles() {
    const {user,gender} = useContext(UserContext)

    if(!user || user === null) return <div>Please Login</div>

  return (
    <div>Username : {user.username} Gender :{user.genders} </div>
  )
}

export default Profiles
