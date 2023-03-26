import "./Sidebar.css"

import React from "react"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarTitle />
            <div className="sidebarContainer">
                <SidebarCard iconPath="/img/dashboard-icon.png" label="Dashboard"/>
                <SidebarCard iconPath="/img/quiz-icon.png" label="Quiz" active/>
                <SidebarCard iconPath="/img/profile-icon.png" label="Profile" />
                <SidebarCard iconPath="/img/analysis-icon.png" label="Analysis" />
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

function SidebarCard({iconPath, label, active}) {
    return (
        <div className={`sidebarTab ${active && 'active'}`}>
            <img src={iconPath} alt={label} className="sidebarImg" />
            <div>{label}</div>
        </div>
    )
}

export default Sidebar