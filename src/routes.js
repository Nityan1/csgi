import QuizPage  from "./pages/quiz/Quiz"
import DashboardPage from "./pages/Dashboard"
import SettingPage from "./pages/setting/Setting"
import { Routes, Route } from "react-router-dom"

export default function getRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/quiz" element={<QuizPage />}/>
            <Route path="/Setting" element={< SettingPage/>}/>

            

        </Routes>
    )
}