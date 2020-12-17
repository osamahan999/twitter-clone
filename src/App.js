import React, { useState } from 'react';

import './App.css';
import LeftSidebar from './components/LeftSideBar/LeftSidebar'
import TwitterFeed from './components/TwitterFeed/TwitterFeed/TwitterFeed'
import RightSidebar from './components/RightSideBar/RightSidebar'
import ProfileContainer from './pages/Profile/ProfileContainer';


function App() {
  return (
    <div className="App">

      <LeftSidebar />
      {/* <TwitterFeed /> */}
      <ProfileContainer />
      <RightSidebar />


    </div>
  );
}

export default App;
