import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />

      <div className="app-wraper-content">
        <Routes>
          {/* <Dialogs /> */}
          {/* <Profile /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
