import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React from 'react'

const LocationDetails = ({hikes}) => {

  let { id } = useParams()

  const [location, setLocation] = useState()

  const getLocation = async () => { 
  const response = await axios.get(`http://localhost:3001/locations/${id}/hikes`)
  const locations = response.data
  let selectedLocation = response.data
    setLocation(selectedLocation)
  }
    
  useEffect(() => {
      getLocation()
 
      }, [])



    //make axios get with ID use Params, setState
  return (
    <div className='location-details'>
      <h3>Location</h3>
        {hikes.map((hike) =>(
          <div key={location.id}>
            <h3>Location: {hike.location?.city}</h3>
            <img src={hike.image}></img>
            <h5>Difficulty: {hike.difficulty}</h5>
            <h5>Miles: {hike.miles}</h5>
            <h5>Details: {hike.details}</h5>
        </div>
      ))}
    </div>
  )
}


export default LocationDetails
