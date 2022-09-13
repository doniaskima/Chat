import React from 'react'
import Sidebar from './Sidebar'
import "./Imessage.css";
import Chat from './Chat';

const Imessage = () => {
  return (
    // Sidebar
    <div className="imessage">
      <Sidebar />
      <Chat/>
    </div>
  )
}

export default Imessage