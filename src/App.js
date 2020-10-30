import React, { useState } from 'react';

import './css/App.css';
import Sidebar from './components/Sidebar'
import TwitterFeed from './components/TwitterFeed'
import Rightsidebar from './components/Rightsidebar'


function App() {
  return (
    <div className="App">

      <Sidebar />
      <TwitterFeed />
      <Rightsidebar />


    </div>
  );
}

export default App;
