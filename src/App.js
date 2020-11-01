import React, { useState } from 'react';

import './App.css';
import LeftSidebar from './components/LeftSideBar/LeftSidebar'
import TwitterFeed from './components/TwitterFeed/TwitterFeed'
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
