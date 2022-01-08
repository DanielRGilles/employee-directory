import React, { useEffect, useState } from 'react'
import { getProfile } from '../../services/profiles';

export default function Profile() {
    const [profile, setProfile ] = useState([]);
 
 
    useEffect(() => {
      getProfile()
       .then((fetchedProfile) => {
        setProfile(fetchedProfile)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])
   
  
  const handleSubmit = (e) => {
        e.preventDefault();
    } 
    
 

    const profileRender =  (
        <div>s</div>

    )

    return (
        <div>

            { profile.email ? profileRender
            : <fieldset onSubmit={handleSubmit}>
                <legend>Create Profile</legend>
                <label >name</label>
                <input></input>
                <label >email</label>
                <input></input>
                <label >bio</label>
                <input></input>
                <label >birthday</label>
                <input></input>
                <button type='submit'>Create Profile</button>

            </fieldset>}
            {console.log(profile)}
        </div>
    )
}
