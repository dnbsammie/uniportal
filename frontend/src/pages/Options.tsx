import SideBar from "../components/SideBar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";
import {useNavigate} from "react-router-dom";

export default function Option() {
    const navigate = useNavigate();
    return (
        <>
            <SideBar/>
            <main className="logged">
                <UnderConstruction
                    title="Módulo de Opciones"
                    message="Esta sección estará disponible en el próximo ciclo académico."
                    actionLabel="Volver al inicio"
                    onAction={() => navigate("/dashboard")}
                />
            </main>
        </>
    )
}