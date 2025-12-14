import styles from "../styles/sections/About.module.css"

export default function About() {
    return (
        <section className={styles.about} id="about">
            <hr />
            <h6 className="text_accent">BENEFICIOS</h6>
            <h3>Todo lo que necesitas en un solo lugar</h3>
            <p>Nuestra plataforma integra todas las herramientas esenciales para que puedas enfocarte en lo que más importa: la enseñanza;</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <i className="fa-solid fa-book-atlas"></i>
                    <h5>Asignación de Materias</h5>
                    <small>Selecciona y confirma tus cursos semestrales con un sistema ágil, visualizando cupos y horarios en tiempo real.</small></div>
                <div className={styles.card}>
                    <i className="fa-solid fa-clipboard-list"></i>
                    <h5>Gestión de Trámites</h5>
                    <small>Centraliza tus solicitudes administrativas, licencias y requisiciones reduciendo la burocracia y el papeleo físico.</small></div>
                <div className={styles.card}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <h5>Calendario Académico</h5>
                    <small>Visualiza fechas clave, plazos de entregas de actas y eventos institucionales sincronizados automaticamente.</small></div>
            </div>
            <div className={styles.impact}>
                <div className={styles.imp_l}>
                    <h4>Impacto en la comunidad</h4>
                    <p>Docentes de diversas universidades ya estan optimizando su día a día.</p>
                </div>
                    <div className={styles.status}>
                        <i></i>
                        <h5>500+</h5>
                        <small>Docentes Activos</small>
                    </div>
                    <div className={styles.status}>
                        <i></i>
                        <h5>1.2k</h5>
                        <small>Materías Gestionadas</small>
                        </div>
                    <div className={styles.status}>
                        <i></i>
                        <h5>15%</h5>
                        <small>Horas Ahorradas</small>
                    </div>
            </div>
        </section>
    )
}