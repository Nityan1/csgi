import QuizPage  from "./pages/quiz/Quiz"
import DashboardPage from "./pages/Dashboard/Dashboard"
import LoginPage from "./pages/Login/login"
import AnalysisPage from "./pages/Analysis/analysis"
import ProfilePage from "./pages/Profile/profile"
import DashboardPage from "./pages/Dashboard"
import SettingPage from "./pages/setting/Setting"
import { Routes, Route } from "react-router-dom"

export default function getRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />}/>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/quiz" element={<QuizPage />}/>
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/analysis" element={<AnalysisPage/>}/>
            <Route path="/Setting" element={< SettingPage/>}/>
        </Routes>
    )
}