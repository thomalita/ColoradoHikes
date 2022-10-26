import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Locations from './components/Locations'
import LocationDetails from './components/LocationDetails'
import Hikes from './components/Hikes';
import HikeForm from './components/HikeForm'
import axios from 'axios';
import './App.css';

function App() {

  const [hikes, setHikes] = useState([])

    const getHikes = async () => {
        const response = await axios.get('http://localhost:3001/hikes')
        console.log(response.data)
        const hikes = response.data
        setHikes(hikes)
    }

    useEffect (() => {
    getHikes()
    }, [])
  
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path = "/" element = { <Home/> } />
          <Route path = "/locations" element = { <Locations/> } />
          <Route path = "/locations/:id" element = { <LocationDetails hikes = {hikes}/> } />
          <Route path = "/hikes" element = { <Hikes hikes = {hikes} getHikes = {getHikes} /> } />
          <Route path ="/form/:id" element={ <HikeForm/>} />
          {/* <Route path ="/hike/:id/updateForm" element={ <UpdateForm/>}/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
