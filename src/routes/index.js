import { Router, Route } from 'react-router-dom';
import React from "react";
import Appliedjobs from '../components/Appliedjobs';
import Jobform from '../components/Jobform';
import Joblist from '../components/Joblist';
import Login from '../components/Login';
import history from '../history';
import Navbar from '../components/Navbar'


export const mainRoutes = () => {
  return (

    
    <Router history={history}>
      <Navbar />

      <Route
        exact
        strict
        path="/REACT-MARKETING-APP/"
        render={props => <Login  {...props} />}

      />
      <Route
        exact
        strict
        path="/login"
        render={props => <Login/>}

      />
      <Route
        exact
        strict
        path="/joblist"
        render={props => <Joblist  {...props} />}

      />

      <Route
        exact
        strict
        path="/jobform"
        render={props => <Jobform  {...props} />}

      />

      <Route
        exact
        strict
        path="/appliedjobs"
        render={props => <Appliedjobs  {...props} />}

      />
    </Router>


  )
}