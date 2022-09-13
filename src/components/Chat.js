import React, { useState } from 'react'
import "./Chat.css";
import MicNoneIcon from '@mui/icons-material/MicNone';

const Chat = () => {
    const [input, setInput] = useState('')
    const sendMessage = (e) => {
        e.preventDefault();

        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat-header">
                <h4>To:<span className="chatName">Channel name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat-msg">
                
            </div>
            
            <div className="chatInput">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <MicNoneIcon className="mic"/>
            </div>

        </div>
    )
}

export default Chat