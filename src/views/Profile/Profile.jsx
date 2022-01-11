import React, { useEffect, useState } from 'react'
import { createProfile, getProfile } from '../../services/profiles';
import styles from '../../App.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';


export default function Profile() {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile ] = useState({ name, email, birthday, bio });
 
    useEffect(() => {
      getProfile()
       .then((fetchedProfile) => {
        setProfile(fetchedProfile)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
      .finally(() => setLoading(false))
  }, [])
   
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e) => {
        e.preventDefault();
        createProfile({ name, email, bio, birthday })
    } 
    
 
    const {name, email, bio, birthday } = profile;

    const profileRender =  (
       <div className={styles.grid}>
       <div></div>
       <div className={styles.created}>
       <div><Link to='/profile/edit'>Edit</Link></div>
            <h1>{name}</h1>
                <p>{email}</p>
                <p>Birthday: {birthday}</p>
                <span>{bio}</span>
        </div>
        <div></div>
        </div>
    )
    if (loading) return <Loading />;
    return (
        <div>

            { profile.email ? profileRender
            : <form onSubmit={handleSubmit}>
                <fieldset >
                 <legend>Create Profile</legend>
                    <label htmlFor='name' >name</label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={handleChange}
                        ></input>
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
                <button type='submit'>Create Profile</button>

                </fieldset>
             </form>}
            
        </div>
    )
}
