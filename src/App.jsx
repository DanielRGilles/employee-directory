import React from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <UserProvider>
        <Router>
          <Header />
          <main className={styles.main}>
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
              <PrivateRoute  path="/profile/edit">
                <EditProfile/>
              </PrivateRoute>
             
            </Switch>
          </main>
        </Router>
     
    </UserProvider>
  )
}
