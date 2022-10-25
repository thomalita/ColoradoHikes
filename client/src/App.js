import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Locations from './components/Locations'
import Hikes from './components/Hikes';
import HikeForm from './components/HikeForm'
import './App.css';

function App() {

  
  
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path = "/" element = { <Home/> } />
          <Route path = "/locations" element = { <Locations/> } />
          <Route path = "/hikes" element = { <Hikes/> } />
          <Route path ="/form" element={ <HikeForm/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
