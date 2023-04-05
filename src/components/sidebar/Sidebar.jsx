import { useNavigate } from "react-router-dom"
import "./Sidebar.css"

import React from "react"

function Sidebar() {
    // const navigate = useNavigate();
    return (
        <div className="sidebar">
            <SidebarTitle />
            <div className="sidebarContainer">
                <SidebarCard iconPath="/img/dashboard.png" label="Dashboard"  route="Dashboard" />
                <SidebarCard iconPath="/img/edit.png" label="Quiz" active route="Quiz" />
                <SidebarCard iconPath="/img/profile.png" label="Profile" route="Profile" />
                <SidebarCard iconPath="/img/analysis.png" label="Analysis" route="Analysis" />
            </div>

        </div>
    )
}

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
        <div onClick={() => { navigate(route) }} className={`sidebarTab ${active && 'active'}`}>
            <img src={iconPath} alt={label} className="sidebarImg" />
            <div>{label}</div>
        </div>
    )
}

export default Sidebar