import './App.css';
import React from 'react';
import { mainRoutes } from './routes/index';

function MarketingApp () {
  
  return (

    <div className="App">

      {mainRoutes()}

    </div>
  );
}

export default MarketingApp;
