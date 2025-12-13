import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <nav>
            <div className="nav_l">
                <Link to={"/"} className="nav-link" id="logo">UniPortal</Link>
            </div>
            <div className="nav_r">
                <Link to={"/login"} className="nav_link">Login</Link>
            </div>
        </nav>
    )
}
