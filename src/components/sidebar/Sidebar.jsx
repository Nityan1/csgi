import { useNavigate, useLocation } from "react-router-dom"
import "./Sidebar.css"
import React from "react"
function Sidebar() {
    const location = useLocation();
    function SidebarTitle() {
        return (
            <div className="sidebarTitle">
                <img src="/img/logo.png" alt="sidebarlogo" className="titleImg" />
                <div className="titleText">
                    CSGI DISCORSO

                </div>
            </div>

        )
    }
    function SidebarCard({ iconPath, label, active, route }) {
        const navigate = useNavigate();
        return (
            <div onClick={() => { navigate(route) }} className={`sidebarTab ${active === 'hello' ? 'active' : null}`}>
                <img src={iconPath} alt={label} className="sidebarImg" />
                <div>{label}</div>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <SidebarTitle />
            <div className="sidebarContainer">
                <SidebarCard iconPath="/img/dashboard.png" label="Dashboard" route="Dashboard" active={location.pathname === '/Dashboard' ? 'hello' : null} />
                <SidebarCard iconPath="/img/edit.png" label="Quiz" route="Quiz" active={location.pathname === '/Quiz' ? 'hello' : null} />
                <SidebarCard iconPath="/img/profile.png" label="Profile" route="Profile" active={location.pathname === '/Profile' ? 'hello' : null} />
                <SidebarCard iconPath="/img/analysis.png" label="Analysis" route="Analysis" active={location.pathname === '/Analysis' ? 'hello' : null} />
            </div>
        </div>
    )
}
export default Sidebar