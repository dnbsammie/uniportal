import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar.tsx";

export default function Courses() {
    return (
        <>
            <SideBar />
            <main className="logged">
                <Outlet />
            </main>
        </>
    )
}