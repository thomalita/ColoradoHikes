import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';

function App() {


  
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <h1>Welcome to Colorado's Guide to Hiking Trails!</h1>
      <main>
        <Routes>
          {/* <Route path = "/" element = { <Home/> } /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
