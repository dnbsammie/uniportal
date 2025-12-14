import styles from "../styles/components/Calendar.module.css";

export default function Calendar() {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const hours = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM","9:00 PM", "10:00PM"];
    const toMeeting = () => { window.open("https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGQ5ZTRhMWYtYmQ4Mi00M2E3LWJmNzQtZmM2NzQ1OTJkNGRl%40thread.v2/0?context=%7b%22Tid%22%3a%22ba5b0a4d-6c68-4ac3-9d6e-c5b5a12a9d69%22%2c%22Oid%22%3a%22d3a4f61c-225b-4fa1-a30a-cdca36708e02%22%7d", "_blank"); }

    return (
        <section className={styles.calendar}>
            <header className={styles.top}>
                <h3>Mi Horario Semanal</h3>
            </header>

            <div className={styles.schedule}>
                <div className={styles.corner} />

                {days.map(day => (
                    <div key={day} className={styles.day}>{day}</div>
                ))}

                {hours.map(hour => (
                    <div key={hour} className={styles.hour}>{hour}</div>
                ))}

                {/* Eventos */}
                <button onClick={toMeeting} className={`${styles.event} ${styles.eventMonday}`}>
                    <h6>Reunión de Coordinación</h6>
                    <small>5:30 PM</small>
                </button>

                <button onClick={toMeeting} className={`${styles.event} ${styles.eventTuesday}`}>
                    <h6>Análisis y Diseño de Sistemas</h6>
                    <small>7:30 PM</small>
                </button>

                <button onClick={toMeeting} className={`${styles.event} ${styles.eventThursday}`}>
                    <h6>Análisis y Diseño de Sistemas</h6>
                    <small>6:30 PM</small>
                </button>
            </div>
        </section>
    );
}
