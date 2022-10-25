import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Locations from './components/Locations'
import Hikes from './components/Hikes';
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
