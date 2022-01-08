import React, {  useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getProfile, updateProfile } from '../../services/profiles';

export default function EditProfile() {
    const [profile, setProfile ] = useState({ name:'', email: '', birthday:'', bio:'' });
    const history = useHistory();
    
    useEffect(() => {
        getProfile()
        .then((fetchedProfile) => {
            setProfile(fetchedProfile)
        })
        .catch((error) => {
            throw new Error(`Error: ${error}`)
        })
    }, [])
    
    
    const {name, email, bio, birthday } = profile;
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile((prevState) => ({ ...prevState, [name]: value }));
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await updateProfile({ name, email, bio, birthday })
      history.push('/profile')

  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <fieldset >
                <legend>Edit Profile</legend>
                <label htmlFor='name' >Name</label>
                <input
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={handleChange}
                />
                <div> Email: {email} </div>
                <section><label >birthday</label>
                <input
                id='birthday'
                name='birthday'
                type='date'
                value={birthday}
                onChange={handleChange}
                ></input></section>
            
                <label >bio</label>
                <textarea 
                id='bio'
                name='bio'
                type='text'
                value={bio}
                onChange={handleChange} ></textarea>
                <button type='submit'>Save</button>

             </fieldset>
            </form>
        </div>
    )
}
