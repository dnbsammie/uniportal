import SideBar from "../components/SideBar.tsx";
import Calendar from "../sections/Calendar.tsx";

export default function Schedule() {
    return (
        <>
            <SideBar />
            <main className="logged">
                <Calendar />
            </main>
        </>
    )
}