import styles from "../styles/components/SubjectSheet.module.css";
import systems from "../assets/img/systems.webp"
import {useNavigate} from "react-router-dom";

export default function SubjectSheet() {
    const navigate = useNavigate();
    const subjects = [
        {
            id: 1,
            name: "Análisis y Diseño de Sistemas",
            code: "ADS-302",
            faculty: "Ingeniería",
            schedule: "Lun y Jue · 7:00–9:00 PM",
            students: 32,
            image: systems
        }
    ];

    return (
        <section className={styles.subject_sheet}>
            <header className={styles.top}>
                <h3>Materias asignadas</h3>
            </header>
            <div className={styles.grid}>
                {subjects.map(subject => (
                    <article key={subject.id} className={styles.card}>
                        <img src={subject.image} alt="" />
                        <div className={styles.content}>
                            <span className={styles.students}>
                                {subject.students} estudiantes
                            </span>
                            <h3>{subject.name}</h3>
                            <p className={styles.meta}> {subject.code} · {subject.schedule} · {subject.faculty}</p>
                            <div className={styles.actions}>
                                <button onClick={()=> navigate("course1")} className={styles.primary}>Entrar</button>
                                <button onClick={()=>navigate("/messages")} className={styles.icon}><i className="fa-solid fa-people-group" /></button>
                                <button onClick={()=> navigate("/grades")} className={styles.icon}><i className="fa-solid fa-folder-tree" /></button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}