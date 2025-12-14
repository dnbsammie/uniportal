import styles from "../styles/components/Calendar.module.css";

export default function Calendar() {
    const toClass = () => {
        window.open("#", "_blank");
    }
    return (
        <section id="calendar" aria-labelledby="calendar" className={styles.calendar}>
            <h1>Mi Horario Semanal</h1>
            <small>Gestiona tus clases, reuniones y tutoías en un solo lugar.</small>
            <br />
            <div className={styles.schedule}>
                <div className={styles.div1}>
                    <h6>Lunes</h6>
                </div>
                <div className={styles.div2}>
                    <h6>Martes</h6>
                </div>
                <div className={styles.div3}>
                    <h6>Miércoles</h6>
                </div>
                <div className={styles.div4}>
                    <h6>Jueves</h6>
                </div>
                <div className={styles.div5}>
                    <h6>Viernes</h6>
                </div>
                <div className={styles.div6}>
                    <h6>Sábado</h6>
                </div>
                <div className={styles.div7}>
                    <p>5:00 P.M.</p>
                </div>
                <div className={styles.div8}>
                    <p>6:00 P.M.</p>
                </div>
                <div className={styles.div9}>
                    <p>7:00 P.M.</p>
                </div>
                <div className={styles.div10}>
                    <p>8:00 P.M.</p>
                </div>
                <div className={styles.div11}>
                    <button onClick={toClass} className={styles.event}>
                        <h6>Reunión de Coordinación</h6>
                        <small>8 de Diciembre, 2025 - 5:30 PM</small>
                        <p>Reunión para discutir el progreso académico.</p>
                    </button>
                </div>
                <div className={styles.div12}>
                    <button onClick={toClass} className={styles.event}>
                        <h6 id="Class_Name" aria-labelledby="class name">CLASE: Análisis y Diseño de Sistemas</h6>
                        <small>9 de Diciembre, 2025 - 7:30 PM</small>
                        <p>Clase Magistral.</p>
                    </button>
                </div>
                <div className={styles.div13}>
                    <button onClick={toClass} className={styles.event}>
                        <h6 id="Class_Name" aria-labelledby="class name">CLASE: Análisis y Diseño de Sistemas</h6>
                        <small>11 de Diciembre, 2025 - 6:30 PM</small>
                        <p>Tutoría</p>
                    </button>
                </div>
            </div>
        </section>
    )
}