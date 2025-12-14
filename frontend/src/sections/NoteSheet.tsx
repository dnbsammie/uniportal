import styles from "../styles/components/NoteSheet.module.css";

export default function NoteSheet() {
    const students = [
        {
            name: "Carlos Pérez",
            id: "A01234567",
            p1: 4.2,
            p2: 3.8,
            p3: 4.5,
            finalTest: 4.1,
            state: "Borrador"
        },
        {
            name: "Martín Silva",
            id: "A01234568",
            p1: 4.5,
            p2: 4.8,
            p3: 5.0,
            finalTest: 3.2,
            state: "Publicado"
        },
        {
            name: "Selene López",
            id: "A01234569",
            p1: 4.9,
            p2: 0,
            p3: 0,
            finalTest: 4.8,
            state: "Pendiente"
        },
        {
            name: "Sofía Gutiérrez",
            id: "A01234570",
            p1: 3.5,
            p2: 3.9,
            p3: 4.0,
            finalTest: 4.2,
            state: "Publicado"
        }
    ];

    function calculateFinalGrade(
        p1: number,
        p2: number,
        p3: number,
        finalTest: number
    ): number {
        const avg = (p1 + p2 + p3 + finalTest) / 4;
        return Number(avg.toFixed(1));
    }

    return (
        <section className={styles.note_sheet}>
            <header className={styles.top}>
                <h2>Gestión de Calificaciones</h2>
                <p>Ingresa, revisa y publica las calificaciones de tus alumnos</p>
            </header>

            <div className={styles.bar}>
                <select>
                    <option>Seleccionar materia</option>
                    <option>Análisis y Diseño de Sistemas</option>
                </select>

                <input type="search" placeholder="Buscar estudiante…" />

                <button className={styles.publish}>
                    Publicar calificaciones
                </button>
            </div>

            <div className={styles.table_wrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Código</th>
                        <th>P1</th>
                        <th>P2</th>
                        <th>P3</th>
                        <th>Final</th>
                        <th>Definitiva</th>
                        <th>Estado</th>
                    </tr>
                    </thead>

                    <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td className={styles.mono}>{student.id}</td>
                            <td>{student.p1}</td>
                            <td>{student.p2}</td>
                            <td>{student.p3}</td>
                            <td>{student.finalTest}</td>
                            <td className={styles.final}>{calculateFinalGrade(student.p1,student.p2,student.p3,student.finalTest)}</td>
                            <td>
              <span className={`${styles.badge} ${styles[student.state.toLowerCase()]}`}>
                {student.state}
              </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}