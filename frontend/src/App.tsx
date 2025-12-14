import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion} from "framer-motion";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";

import Login from "./pages/Login";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Schedule from "./pages/Schedule";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Options from "./pages/Options";

export default function App() {
    const location = useLocation();

  return (
    <>
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                style={{ position: "relative" }}
            >
                {/* overlays */}
                <motion.div
                    className="slide_in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />

                <motion.div
                    className="slide_out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />

                <Routes location={location}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<Home />} />
                        <Route path="/dashboard" element={<DashBoard />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/grades" element={<Grades />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/options" element={<Options />} />
                    </Route>
                </Routes>
            </motion.div>
        </AnimatePresence>
    </>
  )
}