import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'



function App() {
const {isAuthenticated} = useAuth0()

  return (
    
      <div className='App'>
        <img className='autLogo' src='https://cdn.worldvectorlogo.com/logos/auth0.svg'alt='auth0 logo'></img>
        <h1 className='title'>Auth0 </h1>
        {isAuthenticated ? <h2>Sesion iniciada</h2> : <h2>Iniciar Sesion</h2>}
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        <Profile/>
        </div>

  
  )
}

export default App
