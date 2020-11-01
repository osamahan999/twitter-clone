import React, { useState } from 'react';

import './css/App.css';
import LeftSidebar from './components/LeftSidebar'
import TwitterFeed from './components/TwitterFeed/TwitterFeed/TwitterFeed'
import Rightsidebar from './components/Rightsidebar'


function App() {
  return (
    <div className="App">

      <LeftSidebar />
      <TwitterFeed />
      <Rightsidebar />


    </div>
  );
}

export default App;
