import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navbar">
            <h3>Colorado's Hiking Guide</h3>
            <div>
                <ul>
                <li><NavLink to="/api">Home</NavLink></li>
                <li><NavLink to="/api/locations">Locations</NavLink></li>
                <li><NavLink to="/api/hikes">Hiking Trails</NavLink></li>
                <li><NavLink to="/api/form/:id">Add Hike</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav