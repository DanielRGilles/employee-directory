import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';
import styles from './Header.css'
import phone  from '../../assets/gymnast.svg';

export default function Header() {
    const { user, setUser } = useUser();
    
   
    return (
        <header className={styles.headerT}>
            <div></div>
            <div>
            <h1>Acme Inc. </h1>
            <div><img className={styles.img}  src={phone} alt='karate kicker'/></div>
            <div>{user?.email ? user.email : 'Friend'}</div></div>
            <div>
            {user?.email ? <button onClick={async () => { await signOutUser();
            setUser({})}} className='auth-btn'>Sign Out</button> : (
                <Link to="/login" className='auth-btn'>
                  <button>Sign In</button>
                </Link>
              )}</div>
        </header>
    )
}
