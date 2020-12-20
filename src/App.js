import React, { useState } from 'react';

import './App.css';
import LeftSidebar from './components/LeftSideBar/LeftSidebar'
import TwitterFeed from './components/TwitterFeed/TwitterFeed/TwitterFeed'
import RightSidebar from './components/RightSideBar/RightSidebar'
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <div className="App">

      <LeftSidebar />
      {/* <TwitterFeed /> */}
      <Profile />
      <RightSidebar />


    </div>
  );
}

export default App;
