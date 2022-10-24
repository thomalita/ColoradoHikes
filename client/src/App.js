import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {


  
  return (
    <div className="App">
      <header>
      <Nav>Hikes</Nav>
      </header>
      <h1>TITLE</h1>
      <main>
        <Routes>
          {/* <Route path = "/" element = { <Home/> } /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
