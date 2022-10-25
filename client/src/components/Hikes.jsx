import { useState, useEffect } from "react";
import axios from 'axios'



const Hikes = () => {

    const [hikes, setHikes] = useState([])

    useEffect (() => {
    const getHikes = async () => {
        const response = await axios.get('http://localhost:3001/hikes')
        console.log(response.data)
        const hikes = response.data
        setHikes(hikes)
    }
    getHikes()
    }, [])
    return (
        <div className="hikes-grid">
            <div>
            <h2>Trails</h2>
                {hikes.map((hike) =>(
                    <div key={hike.id}>
                        <h3>Location: {hike.location?.city}</h3>
                        <img src={hike.image}></img>
                        <h5>Difficulty: {hike.difficulty}</h5>
                        <h5>Miles: {hike.miles}</h5>
                        <h5>Details: {hike.details}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hikes