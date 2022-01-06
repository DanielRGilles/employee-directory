import React from 'react'
import { useUser } from '../../context/UserContext';

export default function Header() {
    const { user } = useUser();
    return (
        <header className='top-nav'>
            <div>Acme Inc. </div>
            <div>Image of something</div>
            <div>{user.email ? user.email : 'Friend'}</div>
        </header>
    )
}
