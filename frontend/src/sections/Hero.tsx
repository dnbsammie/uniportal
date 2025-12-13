import styles from "../styles/sections/Hero.module.css"

export default function Hero() {
    return (
        <section id="hero" aria-labelledby="hero-section" className={styles.hero}>
            <div className={styles.hero_r}>
                <h1>Gestión Académica Centralizada para Docentes Modernos</h1>
                <p>Simplifica la asignación de materias, claificaciones y comunicación administrativa en una sola plataforma diseñada para optimizar tu tiempo.</p>
                <div id="cta">
                    <button>Comenzar Ahora</button>
                    <button>Ver Demo</button>
                </div>
            </div>
            <div className={styles.hero_r}>
                <img src="https://placehold.co/800?text=Hero+Image&font=poppins" alt="hero_img"/>
            </div>
        </section>
    )
}
