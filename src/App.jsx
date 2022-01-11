import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import './App.css';
import EditProfile from './views/Profile/EditProfile';

export default function App() {
  return (
    <UserProvider>
        
          <Header />
          <main className='main'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="/register">
                <Auth isSigningUp />
              </Route>
              <PrivateRoute path="/profile/edit">
              <EditProfile />
            </PrivateRoute>
              <PrivateRoute path="/profile">
                <Profile/>
              </PrivateRoute>
            </Switch>
          </main>
        
     
    </UserProvider>
  )
}
