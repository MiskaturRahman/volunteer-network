import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import User from './Component/User/User';

export const UserContext = createContext();




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header />
        <Switch>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/registration'>
            <Registration />
          </PrivateRoute>

          <PrivateRoute path='/user'>
            <User />
          </PrivateRoute>

          <Route exact path='/'>
            <Home />
          </Route>



        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
