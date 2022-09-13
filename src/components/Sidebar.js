import React from 'react'
import "./Sidebar.css";
import {Avatar} from "@material-ui/core"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>im the sidebar !</h1>
            <div className="sidebar-header">
            <Avatar/>

            </div>
            <div className="sidebar-chats">

            </div>
        </div>
    )
}

export default Sidebar