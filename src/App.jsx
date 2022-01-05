import React from 'react'
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';

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
              <Route path="">
              </Route>
              <PrivateRoute path="">
              </PrivateRoute>
             
            </Switch>
          </main>
        </Router>
     
    </UserProvider>
  )
}
