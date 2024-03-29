import React from 'react'
import '/src/App.css'

import { useAuth0 } from '@auth0/auth0-react'


function LogoutButton() {
    const {logout} = useAuth0()
  return (
    <button onClick={() => logout()}>Logout</button>
  )
}


export default LogoutButton