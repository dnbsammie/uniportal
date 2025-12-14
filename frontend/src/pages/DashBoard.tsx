import SideBar from "../components/SideBar.tsx";
import Panel from '../sections/Panel.tsx'

export default function DashBoard() {
    return (
        <>
            <SideBar />
            <main className="logged">
                <Panel/>
            </main>
        </>
    )
}