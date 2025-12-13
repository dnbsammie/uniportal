import React, { useState } from "react";
import styles from "../styles/sections/Login.module.css"
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
            <form onSubmit={handleSubmit} >
                <h1>Ingreso</h1>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                />
                {error && <p>{error}</p>}

                <button type="submit">Ingresar</button>
            </form>
        </section>
    );
}
