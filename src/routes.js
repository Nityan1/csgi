import QuizPage from "./pages/quiz/Quiz"
import DashboardPage from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/login"
import AnalysisPage from "./pages/Analysis/analysis"
import ProfilePage from "./pages/Profile/profile"
import { Routes, Route } from "react-router-dom"
import Pagess from "./Service/pages"

export function mainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<Pagess />} />           
        </Routes>
    )
}

export function getRoutes(){
    return(
        <Routes>
             <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
    )
}