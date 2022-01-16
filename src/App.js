import './App.css';
import React from 'react';
import { mainRoutes } from './routes/index';
import Login from './components/Login';


function MarketingApp () {
  
  return (

    <div className="App">

      {mainRoutes()}

    </div>
  );
}

export default MarketingApp;
