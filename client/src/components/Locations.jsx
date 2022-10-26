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
        <div className="locations-grid">
        <div>
            <h2>Locations</h2>
             {locations.map((location) =>(
                //   <Link to={`/location/${location._id}`}> 
                    <div className="location-card" key={location._id} onClick={()=>handleClick(location._id)}>
                    <h3>{location.city}</h3>
                    <img src={location.image}></img>
                </div>
                // {/* </Link> */}
             ))}
            </div>
        </div>
    )
}

export default Locations
   

