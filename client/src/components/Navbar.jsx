export default function Navbar() {
    return <nav className="nav">
        <a href="/" classname="title">
            Colorado's Hiking Guide
        </a>
    <ul>
        <li>
            <a href="/locations">Locations</a>
        </li>
        <li>
            <a href="/hikes">Hiking Trails</a>
        </li>
    </ul>
    </nav>
}