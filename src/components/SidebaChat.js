import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./SidebaChat.css";
import { setChat } from "../features/chatSlice";
import { useDispatch } from "react-redux"
const SidebaChat = ({ id, chatName }) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() =>
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName,
                    })
                )
            }
            className="sidebarChat">
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