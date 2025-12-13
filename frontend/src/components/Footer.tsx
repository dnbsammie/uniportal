import { Link } from 'react-router-dom';

export default function Footer()  {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer_top">
                <div className="ftl">
                    <h4>UniPortal</h4>
                    <small>Facilitando la gestión académica para construir un futuro educativo más eficiente y conectado.</small>
                </div>
                <div className="ftr">
                    <div className="ft_lists">
                        <h6>Plataforma</h6>
                        <ul>
                            <li><Link to={"/"} className="nav_link" aria-label="back to top">Inicio</Link></li>
                            <li><Link to={"/functionalities"} className="nav_link">Funcionalidades</Link></li>
                            <li><Link to={"/login"} className="nav_link">Ingreso</Link></li>
                        </ul>
                    </div>
                    <div className="ft_lists">
                        <h6>Ayuda</h6>
                        <ul>
                            <li><Link to={"/"} className="nav_link">Soporte Técnico</Link></li>
                            <li><Link to={"/"} className="nav_link">Manual de Usuario</Link></li>
                            <li><Link to={"/"} className="nav_link">Politica de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer_bot">
                <small className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera.</small>
                <a href="https://github.com/dnbsammie/u1a1-academic" target={"_blank"} className={"fa-brands fa-github"}></a>
            </div>
        </footer>
    )
}