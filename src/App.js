import React, { } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Nav/Nav';
import Profile from './components/Profile/Pfofile';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='app-wrapper'>

        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;