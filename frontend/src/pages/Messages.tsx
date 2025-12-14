import SideBar from "../components/SideBar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";
import {useNavigate} from "react-router-dom";

export default function Messages() {
    const navigate = useNavigate();
    return (
        <>
            <SideBar />
            <main className="logged">
                <UnderConstruction
                    title="Módulo de mensajes"
                    message="Esta sección estará disponible en el próximo ciclo académico."
                    actionLabel="Volver al inicio"
                    onAction={() => navigate("/dashboard")}
                />
            </main>
        </>
    )
}