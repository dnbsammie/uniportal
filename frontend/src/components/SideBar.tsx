import styles from '../styles/components/Sidebar.module.css';
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function SideBar () {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar} id="sidebar">
            <div className={styles.logo}>
                <Link to={"/"} className="nav-link" id="logo"><i className="fa-solid fa-layer-group"></i> UniPortal</Link>
            </div>
            <ul className={styles.sitemap}>
                <li><Link to={"/dashboard"} className="nav-link"><i className="fa-solid fa-sitemap"></i> Dashboard</Link></li>
                <li><Link to={"/courses"} className="nav-link"><i className="fa-solid fa-book-bookmark"></i> Materias</Link></li>
                <li><Link to={"/grades"} className="nav-link"><i className="fa-regular fa-star"></i> Notas</Link></li>
                <li><Link to={"/schedule"} className="nav-link"><i className="fa-regular fa-calendar"></i> Horario</Link></li>
                <li><Link to={"/messages"} className="nav-link"><i className="fa-regular fa-message"></i> Mensajes</Link></li>
                <li><Link to={"/profile"} className="nav-link"><i className="fa-regular fa-user"></i> Perfil</Link></li>
                <li><Link to={"/options"} className="nav-link"><i className="fa-solid fa-gear"></i> Opciones</Link></li>
            </ul>
            <div className={styles.bot}>
                <button
                    onClick={() => {
                        logout();
                        navigate("/", { replace: true });
                    }}
                >
                    Salir
                </button>
            </div>
        </div>
    )
}