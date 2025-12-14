import { useNavigate } from "react-router-dom";
import styles from "../styles/components/Panel.module.css";

export default function Panel() {
    const navigate = useNavigate();

    const toClass = () => {
        window.open("https://meet.google.com/landing", "_blank");
    }


    return (
        <section id="panel" aria-labelledby="control-panel" className={styles.panel}>
            <div className={styles.search}>
                <input type="text" className={styles.search_bar} placeholder="Busca cursos, estudiantes, mensajes..." />
            </div>
            <div className={styles.content}>
                <h3>Bienvenida, Profesora Tatiana!</h3>
                <div className={styles.parent}>
                    <div className={styles.card} id="schedule">
                        <h6>Horario de Hoy</h6>
                        <div className={styles.class}>
                            <div className={styles.class_i}>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className={styles.class_c}>
                                <h6 id="Class_Name" aria-labelledby="class name">Análisis y Diseño de Sistemas</h6>
                                <small aria-labelledby="class id">25082025</small>
                                <small aria-labelledby="class time">M: 7:30-9:30</small>
                            </div>
                            <div className={styles.class_l}>
                                <button onClick={toClass}>Unirse a la clase</button>
                            </div>
                        </div>
                        <div className={styles.class}>
                            <div className={styles.class_i}>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className={styles.class_c}>
                                <h6 id="Class_Name" aria-labelledby="class name">Análisis y Diseño de Sistemas</h6>
                                <small aria-labelledby="class id">25082025</small>
                                <small aria-labelledby="class time">V: 6:30-8:30</small>
                            </div>
                            <div className={styles.class_l}>
                                <button onClick={toClass}>Unirse a la clase</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card} id="news">
                        <h6>Anuncios Recientes</h6>
                        <div className={styles.new}>
                            <p>Cierre de la plataforma por mantenimiento</p>
                            <small>Hace 2 Horas</small>
                        </div>
                        <div className={styles.new}>
                            <p>Nuevas directrices de evaluación para el semestre</p>
                            <small>Hace 1 día</small>
                        </div>
                        <div className={styles.new}>
                            <p>Convocatoria para proyectos de investigación</p>
                            <small>Hace 3 días</small>
                        </div>
                    </div>
                    <div className={styles.card} >
                        <h6>Acceso Rápido</h6>
                        <div className={styles.quick_access}>
                            <button onClick={() => navigate("/grades")} type="button" className={styles.quick}>Ingresar Notas</button>
                            <button onClick={() => navigate("/messages")} type="button" className={styles.quick}>Enviar Mensaje</button>
                            <button onClick={() => navigate("/courses")} type="button" className={styles.quick}>Ver Cursos</button>
                            <button onClick={() => navigate("/schedule")} type="button" className={styles.quick}>Revisar Horario</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h6>Progreso de Notas</h6>
                        <div className={styles.progress_bar}>75%</div>
                        <small>Calificaciones del parcial enviadas</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
