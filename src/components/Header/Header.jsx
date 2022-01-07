import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
    const { user, setUser } = useUser();
    
   
    return (
        <header className='top-nav'>
            <div>Acme Inc. </div>
            <div>Image of something</div>
            <div>{user?.email ? user.email : 'Friend'}</div>
            {user.email ? <button onClick={async () => { await signOutUser();
            setUser({})}} className='auth-btn'>Sign Out</button> : (
                <Link to="/login" className='auth-btn'>
                  <button>Sign In</button>
                </Link>
              )}
        </header>
    )
}
