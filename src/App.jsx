import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import './App.css';

export default function App() {
  return (
    <UserProvider>
        <Router>
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
              <PrivateRoute path="/profile">
                <Profile/>
              </PrivateRoute>
              {/* <  path="/profile/edit">
                {/* <EditProfile/> */}
              
            
            </Switch>
          </main>
        </Router>
     
    </UserProvider>
  )
}
