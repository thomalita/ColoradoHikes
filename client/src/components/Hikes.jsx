import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'




const Hikes = ({hikes, getHikes}) => {

  

const handleDelete = async (id) => {
    await axios.delete(`/hikes/${id}`)
    getHikes()
}



    return (
        <div>
            <h2 className="trails">Trails</h2>
            <div className="hikes-grid">
                {hikes.map((hike) =>(
                    <div key={hike.id} className="hikes-card">
                        <h3>Location: {hike.location?.city}</h3>
                        <img src={hike.image}></img>
                        <h5>Difficulty: {hike.difficulty}</h5>
                        <h5>Miles: {hike.miles}</h5>
                        <h5>Details: {hike.details}</h5>
                        <button onClick={() => handleDelete(hike._id)}>Delete</button>
                        <Link to={`/hikes/${hike._id}/updateForm`}>
                        <button>Update</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hikes