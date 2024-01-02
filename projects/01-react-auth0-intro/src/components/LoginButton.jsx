import React from 'react'
import '/home/pct-04/Documentos/React/ReactDOM/projects/01-react-auth0-intro/src/App.css'

import { useAuth0 } from '@auth0/auth0-react'


function LoginButton() {
    const {loginWithRedirect} = useAuth0()
  return (
    <button onClick={()=> loginWithRedirect()}>Login</button>
  )
}

export default LoginButton