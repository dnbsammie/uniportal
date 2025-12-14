import { Link, useNavigate } from 'react-router-dom'

export default function NavBar () {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="nav_l">
                <Link to={"/"} className="nav-link" id="logo"><i className="fa-solid fa-layer-group"></i> UniPortal</Link>
            </div>
            <div className="nav_r">
                <button onClick={()=>navigate("/dashboard")} type="button" className="nav_link">DashBoard</button>
                <button onClick={()=>navigate("/login")} type="button" className="nav_link">Iniciar Sesión</button>
            </div>
        </nav>
    )
}
