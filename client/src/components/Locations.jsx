import { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



const Locations = () => {
    const [locations, setLocations] = useState([])
        let navigate = useNavigate()

        const handleClick = (id) => {
            navigate(`/locations/${id}`)
    }

    useEffect (() => {
        const getLocations = async () => {
            const response = await axios.get('http://localhost:3001/locations')
                setLocations(response.data)
    }
        getLocations()
    }, [])



return (
    <body className="location-body">
        <h2>Locations</h2>
        <div className="locations-grid">
             {locations.map((location) =>(
                <div className="location-card" key={locations._id} onClick={()=>handleClick(location._id)}>
                    <h3>{location.city}</h3>
                    <img src={location.image}></img>
                </div>
             ))}
        </div>
    </body>
    )
}

export default Locations
   

