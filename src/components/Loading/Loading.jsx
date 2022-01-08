import React from 'react'
import loading from '../../assets/loading.png'

export default function Loading() {
    return (
        <div>
            <img src={loading} alt='loading spinner' />
            <h1 className='loading'>......Loading</h1>
        </div>
    )
}
