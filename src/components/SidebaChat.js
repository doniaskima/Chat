import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebaChat.css";

const SidebaChat = ({id,chatName}) => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat-info">
                <h3>{chatName}</h3>
                <p>Last message sent..</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebaChat