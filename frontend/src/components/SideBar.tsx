import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function SideBar () {
    const navigate = useNavigate();

    return (
        <div className="sidebar" id="sidebar">
            <div className="logo">
                <Link to={"/"} className="nav-link" id="logo">Teaching 360</Link>
            </div>
            <hr/>
            <Link to={"/dashboard"} className="nav-link"><i className="fa-solid fa-sitemap"></i> Dashboard</Link>
            <Link to={"/courses"} className="nav-link"><i className="fa-solid fa-book-bookmark"></i> Materias</Link>
            <Link to={"/grades"} className="nav-link"><i className="fa-regular fa-star"></i> Notas</Link>
            <Link to={"/schedule"} className="nav-link"><i className="fa-regular fa-calendar"></i> Horario</Link>
            <Link to={"/messages"} className="nav-link"><i className="fa-regular fa-message"></i> Mensajes</Link>
            <Link to={"/profile"} className="nav-link"><i className="fa-regular fa-user"></i> Perfil</Link>
            <Link to={"/options"} className="nav-link"><i className="fa-solid fa-gear"></i> Opciones</Link>
            <button
                onClick={() => {
                    logout();
                    navigate("/", { replace: true });
                }}
            >
                Salir
            </button>
        </div>
    )
}