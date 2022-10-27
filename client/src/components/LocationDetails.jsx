import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React from 'react'

const LocationDetails = ({hikes}) => {

  let { id } = useParams()

  const [location, setLocation] = useState([])

  const getLocation = async () => { 
  const response = await axios.get(`http://localhost:3001/locations/${id}/hikes`)
    setLocation(response.data)
  }
    
  useEffect(() => {
      getLocation()
 
      }, [])



    //make axios get with ID use Params, setState
  return (
    <div className='location-details'>
      <h3>Details</h3>
        {location?.map((hike) =>(
          <div key={location.id}>
            <h3>Location: {hike?.city}</h3>
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
