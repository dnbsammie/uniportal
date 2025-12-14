import styles from '../styles/sections/Courses.module.css'

export default function CourseDetail() {

    const courseInfo = {
        name: "Análisis y Diseño de Sistemas",
        teacher: "Ing. Tatiana Cabrera",
        code: "25082025",
        faculty: "Ingeniería",
        schedule: "Mar y Jue · 7:30–9:30 PM",
        startDate: "2025-08-01",
        announcements: [
            {
                id: 1,
                title: "Bienvenida al curso",
                date: "2025-02-01",
                content: "Bienvenidos al curso. Revisen el sílabo y el cronograma."
            },
            {
                id: 2,
                title: "Entrega Parcial 1",
                date: "2025-02-10",
                content: "El parcial 1 se habilitará el viernes."
            }
        ],
        topics: [
            "Introducción a los sistemas",
            "Levantamiento de requerimientos",
            "Diagramas UML",
            "Arquitectura de software"
        ]
    };

    return (
        <section className={styles.course}>
            {/* Header */}
            <header className={styles.header}>
                <h1>{courseInfo.name}</h1>
                <p>
                    {courseInfo.code} · {courseInfo.faculty}
                </p>
            </header>

            <div className={styles.layout}>
                {/* Contenido principal */}
                <main className={styles.main}>
                    <div className={styles.block}>
                        <h2>Anuncios recientes</h2>

                        {courseInfo.announcements.map(a => (
                            <article key={a.id} className={styles.announcement}>
                                <header>
                                    <h3>{a.title}</h3>
                                    <span>{a.date}</span>
                                </header>
                                <p>{a.content}</p>
                            </article>
                        ))}
                    </div>

                    <div className={styles.block}>
                        <h2>Tópicos del curso</h2>
                        <ul className={styles.topics}>
                            {courseInfo.topics.map(topic => (
                                <li key={topic}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.card}>
                        <h4>Docente</h4>
                        <p>{courseInfo.teacher}</p>
                    </div>

                    <div className={styles.card}>
                        <h4>Horario</h4>
                        <p>{courseInfo.schedule}</p>
                    </div>

                    <div className={styles.card}>
                        <h4>Inicio</h4>
                        <p>{courseInfo.startDate}</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}