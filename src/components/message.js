import { Avatar } from '@material-ui/core';
import React from 'react'
import "./message.css";

const message = ({
    id,
    contents: {
        timestamp, displayName, email, message, photo, uid
    },
}) => {
  return (
      <div className="message">
          <Avatar src={photo} />
          <p>{message}</p>
          <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
  )
}

export default message