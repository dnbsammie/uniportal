import SideBar from "../components/SideBar.tsx";
import NoteSheet from "../sections/NoteSheet.tsx";

export default function Grades() {
    return (
        <>
            <SideBar />
            <main className="logged">
                <NoteSheet />
            </main>
        </>
    )
}