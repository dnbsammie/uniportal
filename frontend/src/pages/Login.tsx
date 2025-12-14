import React, { useState } from "react";
import styles from "../styles/components/Login.module.css"
import loginImg from "../assets/img/login.webp";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth.ts";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const success = login(username, password);

        if (success) {
            navigate("/dashboard", { replace: true });
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <section id="login" aria-labelledby="login_section" className={styles.login}>
            <div className={styles.login_l}>
                <div className={styles.icon}>

                </div>
                <div className={styles.title}>
                    <h4>Portal Docente</h4>
                    <small>Inicia sesión para acceder a tu panel</small>
                </div>

                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">Usuario o Email</label>
                    <input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="eje. ana.torres@docente.edu"
                        style={{ width: "100%" }}
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        style={{ width: "100%" }}
                    />
                    <div className={styles.ctas}>
                        <div style={{ display: "flex", gap: "var(--space-xxs)" }}>
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Recuérdame</label>
                        </div>
                        <a href="#">¿Olvidé mi contraseña?</a>
                    </div>
                    <div className={styles.ctas}>
                        {error && <small>{error}</small>}
                    </div>

                    <button type="submit">Ingresar</button>
                </form>
                <p>¿Necesitas ayuda? <a href="#">Contacta a Soporte</a></p>
            </div>
            <div className={styles.login_r}>
                <img src={loginImg} alt="login_image" />
                <h3>Centraliza tu gestión académica</h3>
                <p>Accede a tus cursos, calificaciones, y comunicaciones en un solo lugar.</p>
            </div>

        </section>
    );
}
