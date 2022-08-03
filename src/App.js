import React, { } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/Nav';
import Profile from './components/Profile/Pfofile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />


    </div>
  );
}

export default App;