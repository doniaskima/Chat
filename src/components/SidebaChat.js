import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebaChat.css";

const SidebaChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat-info">
                <h3>Channel name</h3>
                <p>Last message sent..</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebaChat