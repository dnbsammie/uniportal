import styles from "../styles/sections/Hero.module.css"
import banner from '../assets/img/banner.webp'
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    const openDemo = () => {
        window.open("https://www.youtube.com/watch?v=dqAHnJCrquE", "_blank");
    }

    return (
        <section id="hero" aria-labelledby="hero-section" className={styles.hero}>
            <div className={styles.hero_r}>
                <h1>Gestión Académica Centralizada para Docentes Modernos</h1>
                <p>Simplifica la asignación de materias, claificaciones y comunicación administrativa en una sola plataforma diseñada para optimizar tu tiempo.</p>
                <hr />
                <div id="cta">
                    <button onClick={() => navigate("/dashboard")} type="button" className="nav_link">Comenzar Ahora</button>
                    <button onClick={openDemo}>
                        <i className="fa-regular fa-circle-play"></i> Ver Demo
                    </button>
                </div>
            </div>
            <div className={styles.hero_r}>
                <img src={banner} alt="hero_img" />
            </div>
        </section>
    )
}
