import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';
import "./message.css";
import * as timeago from "timeago.js";

const Message = ({
    id,
    contents: {
        timestamp, displayName, email, message, photo, uid
    },
    
}) => {
    const user = useSelector(selectUser);
  return (
      <div className={`message ${user.email===email && "message-sender"}`}>
          <Avatar className="message-photo" src={photo} />
          <p>{message}</p>
          <small>
              {timeago.format(new Date(timestamp?.toDate()).toLocaleString())}
          </small>
      </div>
  )
}

export default Message