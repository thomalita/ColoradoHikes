import { useState, useEffect } from "react";
import axios from 'axios'

const Locations = () => {
    const [locations, setLocations] = useState([])
    useEffect (() => {
    const getLocations = async () => {
        const response = await axios.get('http://localhost:3001/locations')
        // console.log(response.data)
    const locations = response.data
        setLocations(locations)
    }
    getLocations()
    }, [])
    return (
        <div>
            <div>
                <h2>Locations</h2>
                {locations.map((location) =>(
                    <div key={location.id}>
                        <h3>{location.city}</h3>
                        <img src={location.image}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Locations
   

