import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navbar">
            <h3>Colorado's Hiking Guide</h3>
            <div>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/hikes">Hiking Trails</NavLink></li>
                <li><NavLink to="/form/:id">Add Hike</NavLink></li>
                <li><NavLink to="/hike/:id/updateForm">Update Hike</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav