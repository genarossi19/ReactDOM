import React from 'react'

import { useAuth0} from '@auth0/auth0-react'
import './styles/Profile.css'

function Profile() {
    const {user, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && ( <div className='ProfileContainer'>
        <img src={user.picture} alt='User Image'></img> 
        <div className='ProfileContainer-info'>
        <p><b>{user.name}</b></p>
        <p>{user.email}</p>

        </div>
        
        
       
     </div>)
  )
}

export default Profile